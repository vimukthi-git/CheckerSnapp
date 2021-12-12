# Mina CheckerSnapp

A Checkers game built to demonstrate Mina Snapps Smart Contracts at work.

Game works according to the rules other than the following known Issues/TODOs,

1. A players pieces can move over their own pieces.
2. King can move over multiple pieces while removing the opposite pieces along the way.
3. A player can not take multiple opposite pieces. Need a smart contract method to allow multiple move coordinates.
4. Only way to win is to take all opposite pieces, there are no draws or other ways to win like number of moves or a timer.
5. No UI. Plan is to work with something like https://github.com/GabrielMioni/react-checkers to have a UI.
6. No tests!!! :/

## How to run

```sh
npx tsc && node build/src/index.js
```

Now each move would cause the game state to be printed in the console. Note the following representations of the player pieces,

```
PLAYER_1 = 'W'; // white player piece
PLAYER_1_KING = 'ʬ'; // white player king
PLAYER_2 = 'B'; // black player piece
PLAYER_2_KING = 'β'; // black player king
```

Sample console log

```
| B | _ | ʬ | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | B | _ | B |
| _ | _ | B | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | _ | _ | _ |
| _ | _ | _ | _ | _ | _ | _ | _ |
| _ | W | _ | W | _ | W | _ | W |
| _ | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
```

## How it works

Differences from the tictactoe game

- There is initial board setup where pieces are pre-arranged.
- Move requires two sets of coordinates.
- Board is larger with more logic.

Summary of the internals,

1. The smart contract interface looks like the following

```
class Checkers extends SmartContract {
  // The board is serialized as a single field element
  @state(Field) board: State<Field>;
  // false -> player 1 | true -> player 2
  @state(Bool) nextPlayer: State<Bool>;
  // defaults to false, set to true when a player wins
  @state(Bool) gameDone: State<Bool>;

  // initialization
  constructor(
    initialBalance: UInt64,
    address: PublicKey,
    player1: PublicKey,
    player2: PublicKey
  ) {
    // ...
  }

  @method async play(
    pubkey: PublicKey,
    signature: Signature,
    // Coordinates of the piece that the player wants to move
    x1: Field,
    y1: Field,
    // Coordinates of the place that the player wants to move the piece to.
    x2: Field,
    y2: Field
  ) {
    // ....
  }
}

```

2. Game is serialized in to `board` state variable by encoding each of the pieces(`Piece` data structure) of the game into a single bit array. An `Optional` value is prefixed to each piece to indicate whether the position in the board is empty or not.

```
board = Optional<Piece>[]

// piece
class Piece extends CircuitValue {
  @prop player: Bool;
  @prop isKing: Bool;
  @prop x: Field; // j
  @prop y: Field; // i

  // ..
}
```

3. Play method takes in the players public key, a signature of the paramters and two sets of coordinates, coordinates of the piece that the player wants to move as well as the coordinates of the place that the player wants to move the piece to. Following is an example call to the method. Any integration to a frontend would use this method to play the game.

```
 await Mina.transaction(player1, async () => {
    const x1 = Field.zero;
    const y1 = new Field(2);
    const x2 = Field.one;
    const y2 = new Field(3);
    const signature = Signature.create(player1, [x1, y1, x2, y2]);
    await snappInstance
      .play(player1.toPublicKey(), signature, x1, y1, x2, y2)
      .catch((e) => console.log(e));
  })
    .send()
    .wait();
```

4. Class `CheckersBoard` contains the main game logic. It verifies the move is valid as well as other performing logic like

```
1. Finding the piece to play
2. Correct player
3. The place to move to is empty
4. Move is forward for non-king pieces
5. Move is diagonal
6. Correct number of places travelled
7. Complete the move.
8. Remove opposite pieces along the way (Makes the game slow as of now).
9. Marking a piece as King if eligible.
```

5. Example round of play from the console logs

```
initial board
| B | _ | B | _ | B | _ | B | _ |
| _ | B | _ | B | _ | B | _ | B |
| B | _ | B | _ | B | _ | B | _ |
| _ | _ | _ | _ | _ | _ | _ | _ |
| _ | _ | _ | _ | _ | _ | _ | _ |
| _ | W | _ | W | _ | W | _ | W |
| W | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
---

====== PLAYER1 FIRST MOVE ======

| B | _ | B | _ | B | _ | B | _ |
| _ | B | _ | B | _ | B | _ | B |
| _ | _ | B | _ | B | _ | B | _ |
| _ | B | _ | _ | _ | _ | _ | _ |
| _ | _ | _ | _ | _ | _ | _ | _ |
| _ | W | _ | W | _ | W | _ | W |
| W | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
---



====== PLAYER2 SECOND MOVE ======

| B | _ | B | _ | B | _ | B | _ |
| _ | B | _ | B | _ | B | _ | B |
| _ | _ | B | _ | B | _ | B | _ |
| _ | B | _ | _ | _ | _ | _ | _ |
| _ | _ | W | _ | _ | _ | _ | _ |
| _ | _ | _ | W | _ | W | _ | W |
| W | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
---



====== PLAYER1 THIRD MOVE ======

| B | _ | B | _ | B | _ | B | _ |
| _ | B | _ | B | _ | B | _ | B |
| _ | _ | _ | _ | B | _ | B | _ |
| _ | B | _ | B | _ | _ | _ | _ |
| _ | _ | W | _ | _ | _ | _ | _ |
| _ | _ | _ | W | _ | W | _ | W |
| W | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
---



====== PLAYER2 FOURTH MOVE ======

| B | _ | B | _ | B | _ | B | _ |
| _ | B | _ | B | _ | B | _ | B |
| W | _ | _ | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | _ | _ | _ |
| _ | _ | _ | _ | _ | _ | _ | _ |
| _ | _ | _ | W | _ | W | _ | W |
| W | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
---



====== PLAYER1 FIFTH MOVE ======

| B | _ | B | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | B | _ | B |
| W | _ | B | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | _ | _ | _ |
| _ | _ | _ | _ | _ | _ | _ | _ |
| _ | _ | _ | W | _ | W | _ | W |
| W | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
---



====== PLAYER2 SIXTH MOVE ======

| B | _ | B | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | B | _ | B |
| W | _ | B | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | _ | _ | _ |
| _ | _ | _ | _ | _ | _ | _ | _ |
| _ | W | _ | W | _ | W | _ | W |
| _ | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
---



====== PLAYER1 SEVENTH MOVE ======

| B | _ | _ | _ | B | _ | B | _ |
| _ | B | _ | B | _ | B | _ | B |
| W | _ | B | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | _ | _ | _ |
| _ | _ | _ | _ | _ | _ | _ | _ |
| _ | W | _ | W | _ | W | _ | W |
| _ | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
---



====== PLAYER2 EIGTH MOVE ======

| B | _ | ʬ | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | B | _ | B |
| _ | _ | B | _ | B | _ | B | _ |
| _ | _ | _ | B | _ | _ | _ | _ |
| _ | _ | _ | _ | _ | _ | _ | _ |
| _ | W | _ | W | _ | W | _ | W |
| _ | _ | W | _ | W | _ | W | _ |
| _ | W | _ | W | _ | W | _ | W |
---
```

## License

[Apache-2.0](LICENSE)
