import {
  Field,
  State,
  PublicKey,
  SmartContract,
  state,
  PrivateKey,
  UInt64,
  Int64,
  Bool,
  CircuitValue,
  Mina,
  Party,
  shutdown,
  Optional,
  method,
  Signature,
  isReady,
  Circuit,
  prop,
} from 'snarkyjs';

export { deploy, play, getSnappState, CheckerSnapp, CheckersBoard };

await isReady;

function abs(value: Field): Field {
  return Circuit.if(value.lt(Field.zero), value.mul(new Field(-1)), value);
}

const FIGURE_SIZE = 2;
const PLAYER_1 = 'r';
const PLAYER_1_KING = 'ʬ';
const PLAYER_2 = 'b';
const PLAYER_2_KING = 'β';
class Piece extends CircuitValue {
  @prop player: Bool;
  @prop isKing: Bool;
  @prop x: Field; // j
  @prop y: Field; // i

  constructor(start: number, bits: Bool[], y: number, x: number) {
    super();
    this.player = bits === undefined ? new Bool(false) : bits[start];
    this.isKing = bits === undefined ? new Bool(false) : bits[start + 1];
    this.x = new Field(x || 0);
    this.y = new Field(y || 0);
  }

  getDisplayToken(): string {
    let token = this.isKing.toBoolean() ? PLAYER_2_KING : PLAYER_2;
    if (this.player.toBoolean()) {
      token = this.isKing.toBoolean() ? PLAYER_1_KING : PLAYER_1;
    }
    return token;
  }

  serialize(): Bool[] {
    return [this.player, this.isKing];
  }
}

const BOARD_SIZE = 8;
class CheckersBoard {
  board: Optional<Piece>[][];

  constructor(serializedBoard: Field) {
    const bits = serializedBoard.toBits();
    let board = [];
    let figurePtr = 0;
    for (let i = 0; i < BOARD_SIZE; i++) {
      let row = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        const isPlayed = bits[figurePtr];
        let pieceOpt = new Optional(
          isPlayed,
          new Piece(figurePtr + 1, bits, i, j)
        );
        row.push(pieceOpt);
        figurePtr += 1 + FIGURE_SIZE;
      }
      board.push(row);
    }
    this.board = board;
  }

  // initial game state
  init() {
    let board = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      let row = [];
      if (i < 3) {
        for (let j = 0; j < BOARD_SIZE; j++) {
          if ((i + j) % 2 == 0) {
            row.push(
              new Optional(
                new Bool(true),
                new Piece(0, [new Bool(false), new Bool(false)], i, j)
              )
            );
          } else {
            row.push(
              new Optional(
                new Bool(false),
                /* Does not matter */ new Piece(
                  0,
                  [new Bool(true), new Bool(false)],
                  i,
                  j
                )
              )
            );
          }
        }
      } else if (i >= BOARD_SIZE - 3) {
        for (let j = 0; j < BOARD_SIZE; j++) {
          if ((i + j) % 2 == 0) {
            row.push(
              new Optional(
                new Bool(true),
                new Piece(0, [new Bool(true), new Bool(false)], i, j)
              )
            );
          } else {
            row.push(
              new Optional(
                new Bool(false),
                /* Does not matter */ new Piece(
                  0,
                  [new Bool(true), new Bool(false)],
                  i,
                  j
                )
              )
            );
          }
        }
      } else {
        for (let j = 0; j < BOARD_SIZE; j++) {
          row.push(
            new Optional(
              new Bool(false),
              /* Does not matter */ new Piece(
                0,
                [new Bool(true), new Bool(false)],
                i,
                j
              )
            )
          );
        }
      }
      board.push(row);
    }
    this.board = board;
  }

  move(x1: Field, y1: Field, x2: Field, y2: Field, player: Bool) {
    // find the piece given by (x1, y1)
    let piece = new Optional(
      new Bool(false),
      new Piece(0, [new Bool(false), new Bool(false)], 0, 0)
    );
    // find the place given by (x2,y2)
    let place = new Optional(
      new Bool(true),
      new Piece(0, [new Bool(false), new Bool(false)], 0, 0)
    );
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        // piece to move
        const toMove = x1
          .equals(new Field(j))
          .and(y1.equals(new Field(i)))
          .and(this.board[i][j].isSome);
        piece = Circuit.if(toMove, this.board[i][j], piece);

        // place to move to
        const toPlace = x2
          .equals(new Field(j))
          .and(y2.equals(new Field(i)))
          .and(this.board[i][j].isSome.not());
        place = Circuit.if(toPlace, this.board[i][j], place);
      }
    }

    // verify piece exists
    piece.isSome.assertEquals(true);
    console.log('1. Found piece');

    // verify owner
    piece.value.player.assertEquals(player);
    console.log('2. Correct player');

    // verify coordinates
    piece.value.x.assertEquals(x1);
    piece.value.y.assertEquals(y1);
    console.log('3. Piece has right coordinates');

    // verify a piece does not exist in these coordinates
    place.isSome.assertEquals(false);
    console.log('4. The place is empty');

    // verify the move is only forwards for a non-king piece
    piece.value.player
      .not()
      .and(y1.lt(y2))
      .or(piece.value.player.and(y1.gt(y2)))
      .and(piece.value.isKing.not())
      .assertEquals(true);
    console.log('5. Move is forward');

    // verify the move is only along the diagonals
    x1.equals(x2).not().and(y1.equals(y2).not()).assertEquals(true);
    console.log('6. Move is diagonal');

    // verify the move is only along places that are allowed to be moved for a non-king piece
    let xDiff = x1.sub(x2);
    let xDiffAbs = abs(xDiff);
    let yDiff = y1.sub(y2);
    let yDiffAbs = abs(yDiff);
    const singlePlaceMove = xDiffAbs
      .equals(Field.one)
      .and(yDiffAbs.equals(Field.one));
    // going over a single opposite piece, diff = 2. Need to have a different contract method that
    // calls this method multiple times to take multiple opposite pieces.
    const doublePlaceMove = xDiffAbs
      .equals(new Field(2))
      .and(yDiffAbs.equals(new Field(2)));
    // For king more verification is necessary to prevent jumping over consective diagonal items.
    piece.value.isKing
      .not()
      .and(singlePlaceMove.or(doublePlaceMove))
      .assertEquals(true);
    console.log('7. Correct number of places travelled');

    // set king if eligible
    piece.value.isKing = player
      .not()
      .and(y2.equals(new Field(BOARD_SIZE - 1)))
      .or(player.and(y2.equals(Field.zero)));

    let numPiecesRemoved = Field.zero;
    // remove the piece from x1, y1 and set it to x2, y2
    // Remove maximum of 1 opposite pieces along the way,
    // TODO while also verifying there are no own pieces along the way
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        const x = new Field(j);
        const y = new Field(i);
        // piece to move
        const toMove = x1
          .equals(x)
          .and(y1.equals(y))
          .and(this.board[i][j].isSome);
        this.board[i][j] = Circuit.if(
          toMove,
          new Optional(
            new Bool(false),
            new Piece(0, [new Bool(false), new Bool(false)], i, j)
          ),
          this.board[i][j]
        );
        // place to move to
        const toPlace = x2
          .equals(x)
          .and(y2.equals(y))
          .and(this.board[i][j].isSome.not());
        this.board[i][j] = Circuit.if(
          toPlace,
          new Optional(
            new Bool(true),
            new Piece(0, [piece.value.player, piece.value.isKing], i, j)
          ),
          this.board[i][j]
        );

        // Remove maximum of 1 opposite pieces along the way,
        // TODO while also verifying there are no own pieces along the way
        /**
         * This block slows things down a looooot... :(
         */
        // const betweenXCoordinates1 = x
        //   .lt(x2)
        //   .and(x.gt(x1))
        //   .or(x.gt(x2).and(x.lt(x1)));
        // const betweenYCoordinates1 = y
        //   .lt(y2)
        //   .and(y.gt(y1))
        //   .or(y.gt(y2).and(y.lt(y1)));
        /**
         * End slow block
         */
        const toRemove = this.board[i][j].isSome
          // opposite player's piece
          .and(this.board[i][j].value.player.equals(player).not())
          .and(numPiecesRemoved.equals(Field.zero));
        //.and(betweenXCoordinates1)
        //.and(betweenYCoordinates1)
        numPiecesRemoved = Circuit.if(
          toRemove,
          numPiecesRemoved.add(Field.one),
          numPiecesRemoved
        );
        this.board[i][j] = Circuit.if(
          toRemove,
          new Optional(
            new Bool(false),
            new Piece(0, [new Bool(false), new Bool(false)], i, j)
          ),
          this.board[i][j]
        );
      }
    }
  }

  serialize(): Field {
    let sBoard: Bool[] = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      let row: Bool[] = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        row.push(this.board[i][j].isSome);
        let piece = Circuit.if(
          this.board[i][j].isSome,
          this.board[i][j].value,
          // encoding a dummy value to avoid if-conditions in the deserialization
          new Piece(0, [new Bool(false), new Bool(false)], 0, 0)
        );
        row = row.concat(piece.serialize());
      }
      //console.log(row.length);
      sBoard = sBoard.concat(row);
    }
    return Field.ofBits(sBoard);
  }

  printState() {
    for (let i = 0; i < BOARD_SIZE; i++) {
      let row = '| ';
      for (let j = 0; j < BOARD_SIZE; j++) {
        let token = '_';
        if (this.board[i][j].isSome.toBoolean()) {
          token = this.board[i][j].value.getDisplayToken();
        }
        row += token + ' | ';
      }
      console.log(row);
    }
    console.log('---\n');
  }

  uiState() {
    let uiState = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
      let row = [];
      for (let j = 0; j < BOARD_SIZE; j++) {
        let token = '-';
        if (this.board[i][j].isSome.toBoolean()) {
          token = this.board[i][j].value.getDisplayToken();
        }
        row.push(token);
      }
      console.log(row);
      uiState.push(row);
    }
    //console.log(uiState);
    console.log('---\n');
    return uiState;
  }

  isWon(): Bool {
    let player1Pieces = new Field(0);
    let player2Pieces = new Field(0);
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        const pieceExists = this.board[i][j].isSome;
        player1Pieces = Circuit.if(
          pieceExists.and(this.board[i][j].value.player.not()),
          player1Pieces.add(new Field(1)),
          player1Pieces
        );
        player2Pieces = Circuit.if(
          pieceExists.and(this.board[i][j].value.player),
          player2Pieces.add(new Field(1)),
          player2Pieces
        );
      }
    }
    // Simple win condition, one player has been wiped out of the board
    return player1Pieces.isZero().or(player2Pieces.isZero());
  }
}

/**
 * Checkers Game.
 */
class CheckerSnapp extends SmartContract {
  // The board is serialized as a single field element
  @state(Field) board = State<Field>();
  // false -> player 1 | true -> player 2
  @state(Bool) nextPlayer = State<Bool>();
  // defaults to false, set to true when a player wins
  @state(Bool) gameDone = State<Bool>();

  // player 1's public key
  player1: PublicKey;
  // player 2's public key
  player2: PublicKey;

  constructor(address: PublicKey, player1: PublicKey, player2: PublicKey) {
    super(address);
    // set the public key of the players
    this.player1 = player1;
    this.player2 = player2;
  }

  // initialization
  deploy(initialBalance: UInt64, player1: PublicKey, player2: PublicKey) {
    super.deploy();
    this.balance.addInPlace(initialBalance);
    let initBoard = new CheckersBoard(Field.zero);
    initBoard.init();
    this.board.set(initBoard.serialize());
    this.nextPlayer.set(new Bool(false)); // player 1 starts
    this.gameDone.set(new Bool(false));
    // set the public key of the players
    this.player1 = player1;
    this.player2 = player2;
  }

  @method async play(
    pubkey: PublicKey,
    signature: Signature,
    x1: Field,
    y1: Field,
    x2: Field,
    y2: Field
  ) {
    // 1. if the game is already finished, abort.
    const finished = await this.gameDone.get();
    finished.assertEquals(false);

    // 2. ensure that we know the private key associated to the public key
    //    and that our public key is known to the snapp

    // ensure player owns the associated private key
    signature.verify(pubkey, [x1, y1, x2, y2]).assertEquals(true);

    // ensure player is valid
    Bool.or(
      pubkey.equals(this.player1),
      pubkey.equals(this.player2)
    ).assertEquals(true);

    // 3. Make sure that its our turn,
    //    and set the state for the next player

    // get player token
    const player = pubkey.equals(this.player2); // player 1 is false, player 2 is true

    // ensure its their turn
    const nextPlayer = await this.nextPlayer.get();
    nextPlayer.assertEquals(player);

    // set the next player
    this.nextPlayer.set(player.not());

    // 4. get and deserialize the board
    let board = new CheckersBoard(await this.board.get());

    // 5. update the board (and the state) with our move
    x1.gte(Field.zero)
      .and(x1.lt(new Field(BOARD_SIZE)))
      .assertEquals(true);
    x2.gte(Field.zero)
      .and(x2.lt(new Field(BOARD_SIZE)))
      .assertEquals(true);
    y1.gte(Field.zero)
      .and(y1.lt(new Field(BOARD_SIZE)))
      .assertEquals(true);
    y2.gte(Field.zero)
      .and(y2.lt(new Field(BOARD_SIZE)))
      .assertEquals(true);

    board.move(x1, y1, x2, y2, player);
    this.board.set(board.serialize());

    // 6. did I just win? If so, update the state as well
    const won = board.isWon();
    this.gameDone.set(won);
  }
}

// setup
const Local = Mina.LocalBlockchain();
Mina.setActiveInstance(Local);
const player1 = Local.testAccounts[0].privateKey;
const player2 = Local.testAccounts[1].privateKey;

let isDeploying = null as null | {
  play(
    player: string,
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): Promise<void>;
  getSnappState(): Promise<{
    serializedBoard: Field;
    board: string[][];
    nextPlayer: boolean;
    gameDone: boolean;
  }>;
};

async function deploy() {
  if (isDeploying) return isDeploying;
  const snappPrivkey = PrivateKey.random();
  let snappAddress = snappPrivkey.toPublicKey();
  let snappInterface = {
    play(player: string, x1: number, y1: number, x2: number, y2: number) {
      return play(snappAddress, player, x1, y1, x2, y2);
    },
    getSnappState() {
      return getSnappState(snappAddress);
    },
  };
  isDeploying = snappInterface;

  let snapp = new CheckerSnapp(
    snappAddress,
    player1.toPublicKey(),
    player2.toPublicKey()
  );
  let tx = Mina.transaction(player1, async () => {
    console.log('Deploying CheckerSnapp...');
    const initialBalance = UInt64.fromNumber(1000000);
    const p = await Party.createSigned(player2);
    p.balance.subInPlace(initialBalance);
    snapp.deploy(initialBalance, player1.toPublicKey(), player2.toPublicKey());
  });
  await tx.send().wait();

  isDeploying = null;
  return snappInterface;
}

async function play(
  snappAddress: PublicKey,
  player: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  let snapp = new CheckerSnapp(
    snappAddress,
    player1.toPublicKey(),
    player2.toPublicKey()
  );
  let playerKey = player == 'b' ? player1 : player2;
  let tx = Mina.transaction(playerKey, async () => {
    const X1 = new Field(x1);
    const Y1 = new Field(y1);
    const X2 = new Field(x2);
    const Y2 = new Field(y2);
    const signature = Signature.create(playerKey, [X1, Y1, X2, Y2]);
    await snapp.play(playerKey.toPublicKey(), signature, X1, Y1, X2, Y2);
  });
  try {
    await tx.send().wait();
  } catch (err) {
    console.log('Move rejected!', err);
  }
}

async function getSnappState(snappAddress: PublicKey) {
  let snappState = (await Mina.getAccount(snappAddress)).snapp.appState;
  let board = new CheckersBoard(snappState[0]).uiState();
  let nextPlayer = snappState[1].equals(true).toBoolean();
  let gameDone = snappState[2].equals(true).toBoolean();
  return {
    serializedBoard: snappState[0],
    board: board,
    nextPlayer: nextPlayer,
    gameDone: gameDone,
  };
}
