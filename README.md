# Mina Snapp: Checkers

A Checkers game built to demonstrate Mina Snapps Smart Contracts at work.

Game works according to the rules other than the following known Issues/TODOs,

1. A players pieces can move over their own pieces.
2. King can move over multiple pieces while removing the opposite pieces along the way.
3. A player can not take multiple opposite pieces. Need a smart contract method to allow multiple move coordinates.
4. Only way to win is to take all opposite pieces, there are no draws or other ways to win like number of moves or a timer.
5. No UI. Plan is to work with something like https://github.com/GabrielMioni/react-checkers to have a UI.

## How to run

```sh
npx tsc && node build/src/index.js
```

## How to build

```sh
npm run build
```

## How to run tests

```sh
npm run test
npm run testw # watch mode
```

## How to run coverage

```sh
npm run coverage
```

## License

[Apache-2.0](LICENSE)
