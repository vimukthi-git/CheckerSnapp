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
import { deploy, play, CheckerSnapp, CheckersBoard } from './checkers.js';

export async function main() {
  let snapp = await deploy();

  console.log('\ninitial board');
  let snappState = await snapp.getSnappState();
  const cb = new CheckersBoard(snappState.serializedBoard);
  cb.printState();

  // play
  console.log('\n\n====== FIRST MOVE ======\n\n');
  await snapp.play('b', 0, 2, 1, 3);
  await printState(snapp);

  // // play
  // console.log('\n\n====== SECOND MOVE ======\n\n');
  await snapp.play('r', 1, 5, 2, 4);
  await printState(snapp);

  // // play
  // console.log('\n\n====== THIRD MOVE ======\n\n');
  await snapp.play('b', 2, 2, 3, 3);
  await printState(snapp);

  // // play
  // console.log('\n\n====== FOURTH MOVE ======\n\n');
  await snapp.play('r', 2, 4, 0, 2);
  await printState(snapp);

  // // play
  // console.log('\n\n====== FIFTH MOVE ======\n\n');
  await snapp.play('b', 1, 1, 2, 2);
  await printState(snapp);

  // // play
  // console.log('\n\n====== SIXTH MOVE ======\n\n');
  await snapp.play('r', 0, 6, 1, 5);
  await printState(snapp);

  // // play
  // console.log('\n\n====== SEVENTH MOVE ======\n\n');
  await snapp.play('b', 2, 0, 1, 1);
  await printState(snapp);

  // // play. player 1 KING
  // console.log('\n\n====== EIGTH MOVE ======\n\n');
  await snapp.play('r', 0, 2, 2, 0);
  await printState(snapp);

  // console.log('did someone win?', b.snapp.appState[2].toString());

  // cleanup
  shutdown();
}

async function printState(snapp: any) {
  let snappState = await snapp.getSnappState();
  const cb = new CheckersBoard(snappState.serializedBoard);
  cb.printState();
}

main();
