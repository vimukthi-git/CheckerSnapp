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

const FIGURE_SIZE = 2;
const PLAYER_1 = 'W';
const PLAYER_1_KING = 'ʬ';
const PLAYER_2 = 'B';
const PLAYER_2_KING = 'β';
class Piece {
  player: Bool;
  isKing: Bool;
  x: Field;
  y: Field;

  constructor(start: number, bits: Bool[], y: number, x: number) {
    // super();
    this.player = bits[start];
    this.isKing = bits[start + 1];
    this.x = new Field(x);
    this.y = new Field(y);
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
      if (i < 2) {
        for (let j = 0; j < BOARD_SIZE; j++) {
          row.push(
            new Optional(
              new Bool(true),
              new Piece(0, [new Bool(false), new Bool(false)], i, j)
            )
          );
        }
      } else if (i >= BOARD_SIZE - 2) {
        for (let j = 0; j < BOARD_SIZE; j++) {
          row.push(
            new Optional(
              new Bool(true),
              new Piece(0, [new Bool(true), new Bool(false)], i, j)
            )
          );
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
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        // piece to move
        const toMove = x1.equals(new Field(i)).and(y1.equals(new Field(j)));
        toMove.and(this.board[i][j].isSome).assertEquals(true);
        piece = Circuit.if(toMove, this.board[i][j], piece);
      }
    }

    // find the place given by (x2,y2)
    let place = new Optional(
      new Bool(true),
      new Piece(0, [new Bool(false), new Bool(false)], 0, 0)
    );
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        // place to move to
        const toPlace = x2.equals(new Field(i)).and(y2.equals(new Field(j)));
        toPlace.and(this.board[i][j].isSome).assertEquals(false);
        place = Circuit.if(toPlace, this.board[i][j], place);
      }
    }
    // verify piece exists
    piece.isSome.assertEquals(true);
    // verify owner
    piece.value.player.assertEquals(player);
    // verify coordinates
    piece.value.x.assertEquals(x1);
    piece.value.y.assertEquals(y1);

    // verify a piece does not exist in these coordinates
    place.isSome.assertEquals(false);

    // TODO verify the move is only forwards for a non-king piece

    // TODO verify the move is only along the diagonals

    // TODO verify the move is only along places that are allowed to be moved

    // TODO remove opposite pieces along the way

    // remove the piece from x1, y1
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        // piece to move
        const toMove = x1.equals(new Field(i)).and(y1.equals(new Field(j)));
        toMove.and(this.board[i][j].isSome).assertEquals(true);
        this.board[i][j] = Circuit.if(
          toMove,
          new Optional(
            new Bool(false),
            new Piece(0, [new Bool(false), new Bool(false)], i, j)
          ),
          this.board[i][j]
        );
      }
    }

    // set the piece to x2, y2
    for (let i = 0; i < BOARD_SIZE; i++) {
      for (let j = 0; j < BOARD_SIZE; j++) {
        // place to move to
        const toPlace = x2.equals(new Field(i)).and(y2.equals(new Field(j)));
        toPlace.and(this.board[i][j].isSome).assertEquals(false);
        this.board[i][j] = Circuit.if(
          toPlace,
          new Optional(
            new Bool(true),
            new Piece(0, [piece.value.player, piece.value.isKing], i, j)
          ),
          place
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
        if (this.board[i][j].isSome.toBoolean()) {
          row = row.concat(this.board[i][j].value.serialize());
        } else {
          // encoding a dummy value to avoid if-conditions in the deserialization
          row = row.concat(
            new Piece(0, [new Bool(false), new Bool(false)], 0, 0).serialize()
          );
        }
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
}

/**
 * Checkers Game.
 */
export default class Checkers extends SmartContract {
  // The board is serialized as a single field element
  @state(Field) board: State<Field>;
  // false -> player 1 | true -> player 2
  @state(Bool) nextPlayer: State<Bool>;
  // defaults to false, set to true when a player wins
  @state(Bool) gameDone: State<Bool>;

  // player 1's public key
  player1: PublicKey;
  // player 2's public key
  player2: PublicKey;

  // initialization
  constructor(
    initialBalance: UInt64,
    address: PublicKey,
    player1: PublicKey,
    player2: PublicKey
  ) {
    super(address);
    this.balance.addInPlace(initialBalance);
    let initBoard = new CheckersBoard(Field.zero);
    initBoard.init();
    this.board = State.init(initBoard.serialize());
    this.nextPlayer = State.init(new Bool(false)); // player 1 starts
    this.gameDone = State.init(new Bool(false));

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
      .and(x1.lt(new Field(BOARD_SIZE)))
      .assertEquals(true);
    y1.gte(Field.zero)
      .and(x1.lt(new Field(BOARD_SIZE)))
      .assertEquals(true);
    y2.gte(Field.zero)
      .and(x1.lt(new Field(BOARD_SIZE)))
      .assertEquals(true);

    board.move(x1, y1, x2, y2, player);
    this.board.set(board.serialize());

    // 6. did I just win? If so, update the state as well
    //const won = board.checkWinner();
    //this.gameDone.set(won);
  }
}

export async function main() {
  await isReady;

  const Local = Mina.LocalBlockchain();
  Mina.setActiveInstance(Local);

  const player1 = Local.testAccounts[0].privateKey;
  const player2 = Local.testAccounts[1].privateKey;

  const snappPrivkey = PrivateKey.random();
  const snappPubkey = snappPrivkey.toPublicKey();

  // Create a new instance of the contract
  console.log('\n\n====== DEPLOYING ======\n\n');
  let snappInstance: Checkers;
  await Mina.transaction(player1, async () => {
    // player2 sends 1000000000 to the new snapp account
    const amount = UInt64.fromNumber(1000000000);
    const p = await Party.createSigned(player2);
    p.body.delta = Int64.fromUnsigned(amount).neg();

    snappInstance = new Checkers(
      amount,
      snappPubkey,
      player1.toPublicKey(),
      player2.toPublicKey()
    );
  })
    .send()
    .wait();

  // initial state
  let b = await Mina.getAccount(snappPubkey);
  console.log('initial state of the snapp');
  for (const i in [0, 1, 2, 3, 4, 5, 6, 7]) {
    console.log('state', i, ':', b.snapp.appState[i].toString());
  }

  console.log('\ninitial board');
  const cb = new CheckersBoard(b.snapp.appState[0]);
  cb.printState();
  // cb.init();
  // cb.printState();

  // let ser = cb.serialize();
  // console.log(ser);
  // let unser = new CheckersBoard(ser);
  // unser.printState();

  // play
  console.log('\n\n====== FIRST MOVE ======\n\n');
  await Mina.transaction(player1, async () => {
    const x1 = Field.zero;
    const y1 = new Field(1);
    const x2 = Field.one;
    const y2 = new Field(2);

    const signature = Signature.create(player1, [x1, y1, x2, y2]);
    await snappInstance
      .play(
        player1.toPublicKey(),
        signature,
        Field.zero,
        new Field(1),
        Field.one,
        new Field(2)
      )
      .catch((e) => console.log(e));
  })
    .send()
    .wait();

  // // debug
  b = await Mina.getAccount(snappPubkey);
  new CheckersBoard(b.snapp.appState[0]).printState();

  // // play
  // console.log('\n\n====== SECOND MOVE ======\n\n');
  // const two = new Field(2);
  // await Mina.transaction(player1, async () => {
  //   const x = Field.one;
  //   const y = Field.zero;
  //   const signature = Signature.create(player2, [x, y]);
  //   await snappInstance
  //     .play(player2.toPublicKey(), signature, Field.one, Field.zero)
  //     .catch((e) => console.log(e));
  // })
  //   .send()
  //   .wait();

  // // debug
  // b = await Mina.getAccount(snappPubkey);
  // new Board(b.snapp.appState[0]).printState();

  // // play
  // console.log('\n\n====== THIRD MOVE ======\n\n');
  // await Mina.transaction(player1, async () => {
  //   const x = Field.one;
  //   const y = Field.one;
  //   const signature = Signature.create(player1, [x, y]);
  //   await snappInstance
  //     .play(player1.toPublicKey(), signature, Field.one, Field.one)
  //     .catch((e) => console.log(e));
  // })
  //   .send()
  //   .wait();

  // // debug
  // b = await Mina.getAccount(snappPubkey);
  // new Board(b.snapp.appState[0]).printState();

  // // play
  // console.log('\n\n====== FOURTH MOVE ======\n\n');
  // await Mina.transaction(player2, async () => {
  //   const x = two;
  //   const y = Field.one;
  //   const signature = Signature.create(player2, [x, y]);
  //   await snappInstance
  //     .play(player2.toPublicKey(), signature, two, Field.one)
  //     .catch((e) => console.log(e));
  // })
  //   .send()
  //   .wait();

  // // debug
  // b = await Mina.getAccount(snappPubkey);
  // new Board(b.snapp.appState[0]).printState();

  // // play
  // console.log('\n\n====== FIFTH MOVE ======\n\n');
  // await Mina.transaction(player1, async () => {
  //   const x = two;
  //   const y = two;
  //   const signature = Signature.create(player1, [x, y]);
  //   await snappInstance
  //     .play(player1.toPublicKey(), signature, two, two)
  //     .catch((e) => console.log(e));
  // })
  //   .send()
  //   .wait();

  // // debug
  // b = await Mina.getAccount(snappPubkey);
  // new Board(b.snapp.appState[0]).printState();
  // console.log('did someone win?', b.snapp.appState[2].toString());

  // cleanup
  shutdown();
}

main();
