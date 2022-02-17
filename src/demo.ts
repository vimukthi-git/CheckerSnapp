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
import { Checkers, CheckersBoard } from './checkers.js';

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

  // play
  console.log('\n\n====== FIRST MOVE ======\n\n');
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

  // // debug
  b = await Mina.getAccount(snappPubkey);
  new CheckersBoard(b.snapp.appState[0]).printState();

  // play
  console.log('\n\n====== SECOND MOVE ======\n\n');
  await Mina.transaction(player2, async () => {
    const x1 = Field.one;
    const y1 = new Field(5);
    const x2 = new Field(2);
    const y2 = new Field(4);
    const signature = Signature.create(player2, [x1, y1, x2, y2]);
    await snappInstance
      .play(player2.toPublicKey(), signature, x1, y1, x2, y2)
      .catch((e) => console.log(e));
  })
    .send()
    .wait();

  // debug
  b = await Mina.getAccount(snappPubkey);
  new CheckersBoard(b.snapp.appState[0]).printState();

  // play
  console.log('\n\n====== THIRD MOVE ======\n\n');
  await Mina.transaction(player1, async () => {
    const x1 = new Field(2);
    const y1 = new Field(2);
    const x2 = new Field(3);
    const y2 = new Field(3);
    const signature = Signature.create(player1, [x1, y1, x2, y2]);
    await snappInstance
      .play(player1.toPublicKey(), signature, x1, y1, x2, y2)
      .catch((e) => console.log(e));
  })
    .send()
    .wait();

  // debug
  b = await Mina.getAccount(snappPubkey);
  new CheckersBoard(b.snapp.appState[0]).printState();

  // play
  console.log('\n\n====== FOURTH MOVE ======\n\n');
  await Mina.transaction(player2, async () => {
    const x1 = new Field(2);
    const y1 = new Field(4);
    const x2 = new Field(0);
    const y2 = new Field(2);
    const signature = Signature.create(player2, [x1, y1, x2, y2]);
    await snappInstance
      .play(player2.toPublicKey(), signature, x1, y1, x2, y2)
      .catch((e) => console.log(e));
  })
    .send()
    .wait();

  // debug
  b = await Mina.getAccount(snappPubkey);
  new CheckersBoard(b.snapp.appState[0]).printState();

  // play
  console.log('\n\n====== FIFTH MOVE ======\n\n');
  await Mina.transaction(player1, async () => {
    const x1 = new Field(1);
    const y1 = new Field(1);
    const x2 = new Field(2);
    const y2 = new Field(2);
    const signature = Signature.create(player1, [x1, y1, x2, y2]);
    await snappInstance
      .play(player1.toPublicKey(), signature, x1, y1, x2, y2)
      .catch((e) => console.log(e));
  })
    .send()
    .wait();
  // // debug
  b = await Mina.getAccount(snappPubkey);
  new CheckersBoard(b.snapp.appState[0]).printState();

  // play
  console.log('\n\n====== SIXTH MOVE ======\n\n');
  await Mina.transaction(player2, async () => {
    const x1 = new Field(0);
    const y1 = new Field(6);
    const x2 = new Field(1);
    const y2 = new Field(5);
    const signature = Signature.create(player2, [x1, y1, x2, y2]);
    await snappInstance
      .play(player2.toPublicKey(), signature, x1, y1, x2, y2)
      .catch((e) => console.log(e));
  })
    .send()
    .wait();

  // // debug
  b = await Mina.getAccount(snappPubkey);
  new CheckersBoard(b.snapp.appState[0]).printState();

  // play
  console.log('\n\n====== SEVENTH MOVE ======\n\n');
  await Mina.transaction(player1, async () => {
    const x1 = new Field(2);
    const y1 = new Field(0);
    const x2 = new Field(1);
    const y2 = new Field(1);
    const signature = Signature.create(player1, [x1, y1, x2, y2]);
    await snappInstance
      .play(player1.toPublicKey(), signature, x1, y1, x2, y2)
      .catch((e) => console.log(e));
  })
    .send()
    .wait();
  // // debug
  b = await Mina.getAccount(snappPubkey);
  new CheckersBoard(b.snapp.appState[0]).printState();

  // play. player 1 KING
  console.log('\n\n====== EIGTH MOVE ======\n\n');
  await Mina.transaction(player2, async () => {
    const x1 = new Field(0);
    const y1 = new Field(2);
    const x2 = new Field(2);
    const y2 = new Field(0);
    const signature = Signature.create(player2, [x1, y1, x2, y2]);
    await snappInstance
      .play(player2.toPublicKey(), signature, x1, y1, x2, y2)
      .catch((e) => console.log(e));
  })
    .send()
    .wait();

  // // debug
  b = await Mina.getAccount(snappPubkey);
  new CheckersBoard(b.snapp.appState[0]).printState();

  console.log('did someone win?', b.snapp.appState[2].toString());

  // cleanup
  shutdown();
}

main();
