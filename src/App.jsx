import React, { useCallback, useEffect, useState } from 'react';
import { render } from 'react-dom';

//row is passed a single row from the board, returns a container and a Cell for each item in the array
export class Row extends React.Component {
  render() {
    return (
      <div className="row">
        {this.props.rowArr.map(function (cell, index) {
          return (
            <Cell
              rowIndex={this.props.rowIndex}
              index={index}
              cell={cell}
              handlePieceClick={this.props.handlePieceClick}
            />
          );
        }, this)}
      </div>
    );
  }
}

//cell is passed a single item in a row, and renders it out, it also calls it's grand-parent's swapper function on click
export class Cell extends React.Component {
  render() {
    return (
      <div className={'cell cell-' + this.props.cell}>
        <div
          onClick={this.props.handlePieceClick}
          data-row={this.props.rowIndex}
          data-cell={this.props.index}
          className="gamePiece"
        ></div>
      </div>
    );
  }
}

export class Statistics extends React.Component {
  render() {
    return (
      <div className="stats">
        <div className="half" style={{ color: '#e26b6b' }}>
          Red:
          <br />
          {
            (
              this.props.board
                .map(function (row) {
                  return row.join('');
                })
                .join('')
                .match(/r/g) || []
            ).length
          }{' '}
          Soldiers
          <br />
          {
            (
              this.props.board
                .map(function (row) {
                  return row.join('');
                })
                .join('')
                .match(/r\sk/g) || []
            ).length
          }{' '}
          Kings
        </div>
        <div className="half">
          Black:
          <br />
          {
            (
              this.props.board
                .map(function (row) {
                  return row.join('');
                })
                .join('')
                .match(/b/g) || []
            ).length
          }{' '}
          Soldiers
          <br />
          {
            (
              this.props.board
                .map(function (row) {
                  return row.join('');
                })
                .join('')
                .match(/b\sk/g) || []
            ).length
          }{' '}
          Kings
        </div>
      </div>
    );
  }
}

//game board calls row for each item in the board array
export default class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      snapp: {},
      board: [
        ['b', '-', 'b', '-', 'b', '-', 'b', '-'],
        ['-', 'b', '-', 'b', '-', 'b', '-', 'b'],
        ['b', '-', 'b', '-', 'b', '-', 'b', '-'],
        ['-', '-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-', '-'],
        ['-', 'r', '-', 'r', '-', 'r', '-', 'r'],
        ['r', '-', 'r', '-', 'r', '-', 'r', '-'],
        ['-', 'r', '-', 'r', '-', 'r', '-', 'r'],
      ],
      activePlayer: 'b',
      gameDone: false,
      isDeployed: false,
    };
  }

  async updateState() {
    let snappState = await this.state.snapp.getSnappState();
    this.setState({
      board: snappState.board,
      activePlayer: snappState.nextPlayer ? 'r' : 'b',
      gameDone: snappState.gameDone,
    });
  }

  render() {
    let deploy = async function () {
      if (this.state.isDeployed) return;
      this.setState({ isDeployed: false });
      let Checkers = await import('../dist/checkers.js');
      let snapp = await Checkers.deploy();
      let snappState = await snapp.getSnappState();
      this.setState({
        snapp: snapp,
        board: snappState.board,
        activePlayer: snappState.nextPlayer ? 'r' : 'b',
        gameDone: snappState.gameDone,
        isDeployed: true,
      });
    }.bind(this);
    return (
      <div className="container">
        <div className={'board ' + this.state.activePlayer}>
          {this.state.board.map(function (row, index) {
            return (
              <Row
                rowArr={row}
                handlePieceClick={this.handlePieceClick.bind(this)}
                rowIndex={index}
              />
            );
          }, this)}
        </div>
        <div className="clear"></div>
        <Button onClick={deploy} disabled={this.state.isDeployed}>
          Deploy
        </Button>
        <Statistics board={this.state.board} />
      </div>
    );
  }
  handlePieceClick(e) {
    if (this.state.isDeployed != true) {
      return;
    }
    var rowIndex = parseInt(e.target.attributes['data-row'].nodeValue);
    var cellIndex = parseInt(e.target.attributes['data-cell'].nodeValue);
    if (
      this.state.board[rowIndex][cellIndex].indexOf(this.state.activePlayer) >
      -1
    ) {
      //this is triggered if the piece that was clicked on is one of the player's own pieces, it activates it and highlights possible moves
      this.state.board = this.state.board.map(function (row) {
        return row.map(function (cell) {
          return cell.replace('a', '');
        });
      }); //un-activate any previously activated pieces
      this.state.board[rowIndex][cellIndex] =
        'a' + this.state.board[rowIndex][cellIndex];
      this.highlightPossibleMoves(rowIndex, cellIndex);
    } else if (this.state.board[rowIndex][cellIndex].indexOf('h') > -1) {
      //this is activated if the piece clicked is a highlighted square, it moves the active piece to that spot.
      this.executeMove(
        rowIndex,
        cellIndex,
        this.state.board,
        this.state.activePlayer
      );
      //is the game over? if not, swap active player
      if (this.winDetection(this.state.board, this.state.activePlayer)) {
        console.log(this.state.activePlayer + ' won the game!');
      } else {
        //this.state.activePlayer = this.state.activePlayer == 'r' ? 'b' : 'r';
        // if (this.state.activePlayer == 'b') {
        //     setTimeout(
        //         function () {
        //             this.ai();
        //         }.bind(this),
        //         50
        //     );
        // }
      }
    }
    //this.setState(this.state);
  }
  async executeMove(x2, y2, board, activePlayer) {
    let activePiece;
    let x1;
    let y1;
    for (var i = 0; i < board.length; i++) {
      //for each row
      for (var j = 0; j < board[i].length; j++) {
        if (board[i][j].indexOf('a') > -1) {
          activePiece = board[i][j];
          x1 = j;
          y1 = i;
        }
      }
    }
    await this.state.snapp.play(activePlayer, x1, y1, x2, y2);
    this.updateState();
    return board;
  }
  executeMoveOld(rowIndex, cellIndex, board, activePlayer) {
    var activePiece;
    for (var i = 0; i < board.length; i++) {
      //for each row
      for (var j = 0; j < board[i].length; j++) {
        if (board[i][j].indexOf('a') > -1) {
          activePiece = board[i][j];
        }
      }
    }
    //make any jump deletions
    var deletions = board[rowIndex][cellIndex].match(/d\d\d/g);
    if (
      typeof deletions !== undefined &&
      deletions !== null &&
      deletions.length > 0
    ) {
      for (var k = 0; k < deletions.length; k++) {
        var deleteCoords = deletions[k].replace('d', '').split('');
        board[deleteCoords[0]][deleteCoords[1]] = '-';
      }
    }
    //remove active piece from it's place
    board = board.map(function (row) {
      return row.map(function (cell) {
        return cell.replace(activePiece, '-');
      });
    });
    //unhighlight
    board = board.map(function (row) {
      return row.map(function (cell) {
        return cell.replace('h', '-').replace(/d\d\d/g, '').trim();
      });
    });
    //place active piece, now unactive, in it's new place
    board[rowIndex][cellIndex] = activePiece.replace('a', '');
    if (
      (activePlayer == 'b' && rowIndex == 7) ||
      (activePlayer == 'r' && rowIndex == 0)
    ) {
      board[rowIndex][cellIndex] += ' k';
    }
    return board;
  }
  highlightPossibleMoves(rowIndex, cellIndex) {
    //unhighlight any previously highlighted cells
    this.state.board = this.state.board.map(function (row) {
      return row.map(function (cell) {
        return cell.replace('h', '-').replace(/d\d\d/g, '').trim();
      });
    });

    var possibleMoves = this.findAllPossibleMoves(
      rowIndex,
      cellIndex,
      this.state.board,
      this.state.activePlayer
    );

    //actually highlight the possible moves on the board
    //the 'highlightTag' inserts the information in to a cell that specifies
    for (var j = 0; j < possibleMoves.length; j++) {
      var buildHighlightTag = 'h ';
      for (var k = 0; k < possibleMoves[j].wouldDelete.length; k++) {
        buildHighlightTag +=
          'd' +
          String(possibleMoves[j].wouldDelete[k].targetRow) +
          String(possibleMoves[j].wouldDelete[k].targetCell) +
          ' ';
      }
      this.state.board[possibleMoves[j].targetRow][
        possibleMoves[j].targetCell
      ] = buildHighlightTag;
    }

    this.setState(this.state);
  }
  findAllPossibleMoves(rowIndex, cellIndex, board, activePlayer) {
    var possibleMoves = [];
    var directionOfMotion = [];
    var leftOrRight = [1, -1];
    var isKing = board[rowIndex][cellIndex].indexOf('k') > -1;
    if (activePlayer == 'b') {
      directionOfMotion.push(1);
    } else {
      directionOfMotion.push(-1);
    }

    //if it's a king, we allow it to both go forward and backward, otherwise it can only move in it's color's normal direction
    //the move loop below runs through every direction of motion allowed, so if there are two it will hit them both
    if (isKing) {
      directionOfMotion.push(directionOfMotion[0] * -1);
    }

    //normal move detection happens here (ie. non jumps)
    //for each direction of motion allowed to the piece it loops (forward for normal pieces, both for kings)
    //inside of that loop, it checks in that direction of motion for both left and right (checkers move diagonally)
    //any moves found are pushed in to the possible moves array
    for (var j = 0; j < directionOfMotion.length; j++) {
      for (var i = 0; i < leftOrRight.length; i++) {
        if (
          typeof board[rowIndex + directionOfMotion[j]] !== 'undefined' &&
          typeof board[rowIndex + directionOfMotion[j]][
            cellIndex + leftOrRight[i]
          ] !== 'undefined' &&
          board[rowIndex + directionOfMotion[j]][cellIndex + leftOrRight[i]] ==
            '-'
        ) {
          if (
            possibleMoves
              .map(function (move) {
                return String(move.targetRow) + String(move.targetCell);
              })
              .indexOf(
                String(rowIndex + directionOfMotion[j]) +
                  String(cellIndex + leftOrRight[i])
              ) < 0
          ) {
            possibleMoves.push({
              targetRow: rowIndex + directionOfMotion[j],
              targetCell: cellIndex + leftOrRight[i],
              wouldDelete: [],
            });
          }
        }
      }
    }

    //get jumps
    var jumps = this.findAllJumps(
      rowIndex,
      cellIndex,
      board,
      directionOfMotion[0],
      [],
      [],
      isKing,
      activePlayer
    );

    //loop and push all jumps in to possibleMoves
    for (var i = 0; i < jumps.length; i++) {
      possibleMoves.push(jumps[i]);
    }
    return possibleMoves;
  }
  findAllJumps(
    sourceRowIndex,
    sourceCellIndex,
    board,
    directionOfMotion,
    possibleJumps,
    wouldDelete,
    isKing,
    activePlayer
  ) {
    //jump moves
    var thisIterationDidSomething = false;
    var directions = [directionOfMotion];
    var leftOrRight = [1, -1];
    if (isKing) {
      //if it's a king, we'll also look at moving backwards
      directions.push(directions[0] * -1);
    }
    //here we detect any jump possible moves
    //for each direction available to the piece (based on if it's a king or not)
    //and for each diag (left or right) we look 2 diag spaces away to see if it's open and if we'd jump an enemy to get there.
    for (var k = 0; k < directions.length; k++) {
      for (var l = 0; l < leftOrRight.length; l++) {
        leftOrRight[l];
        if (
          typeof board[sourceRowIndex + directions[k]] !== 'undefined' &&
          typeof board[sourceRowIndex + directions[k]][
            sourceCellIndex + leftOrRight[l]
          ] !== 'undefined' &&
          typeof board[sourceRowIndex + directions[k] * 2] !== 'undefined' &&
          typeof board[sourceRowIndex + directions[k] * 2][
            sourceCellIndex + leftOrRight[l] * 2
          ] !== 'undefined' &&
          board[sourceRowIndex + directions[k]][
            sourceCellIndex + leftOrRight[l]
          ].indexOf(activePlayer == 'r' ? 'b' : 'r') > -1 &&
          board[sourceRowIndex + directions[k] * 2][
            sourceCellIndex + leftOrRight[l] * 2
          ] == '-'
        ) {
          if (
            possibleJumps
              .map(function (move) {
                return String(move.targetRow) + String(move.targetCell);
              })
              .indexOf(
                String(sourceRowIndex + directions[k] * 2) +
                  String(sourceCellIndex + leftOrRight[l] * 2)
              ) < 0
          ) {
            //this eventual jump target did not already exist in the list
            var tempJumpObject = {
              targetRow: sourceRowIndex + directions[k] * 2,
              targetCell: sourceCellIndex + leftOrRight[l] * 2,
              wouldDelete: [
                {
                  targetRow: sourceRowIndex + directions[k],
                  targetCell: sourceCellIndex + leftOrRight[l],
                },
              ],
            };
            for (var i = 0; i < wouldDelete.length; i++) {
              tempJumpObject.wouldDelete.push(wouldDelete[i]);
            }
            possibleJumps.push(tempJumpObject);
            thisIterationDidSomething = true;
          }
        }
      }
    }

    //if a jump was found, thisIterationDidSomething is set to true and this function calls itself again from that source point, this is how we recurse to find multi jumps
    if (thisIterationDidSomething) {
      for (var i = 0; i < possibleJumps.length; i++) {
        var coords = [possibleJumps[i].targetRow, possibleJumps[i].targetCell];
        var children = this.findAllJumps(
          coords[0],
          coords[1],
          board,
          directionOfMotion,
          possibleJumps,
          possibleJumps[i].wouldDelete,
          isKing,
          activePlayer
        );
        for (var j = 0; j < children.length; j++) {
          if (possibleJumps.indexOf(children[j]) < 0) {
            possibleJumps.push(children[j]);
          }
        }
      }
    }
    return possibleJumps;
  }
  reset() {
    this.setState({
      board: [
        ['b', '-', 'b', '-', 'b', '-', 'b', '-'],
        ['-', 'b', '-', 'b', '-', 'b', '-', 'b'],
        ['b', '-', 'b', '-', 'b', '-', 'b', '-'],
        ['-', '-', '-', '-', '-', '-', '-', '-'],
        ['-', '-', '-', '-', '-', '-', '-', '-'],
        ['-', 'r', '-', 'r', '-', 'r', '-', 'r'],
        ['r', '-', 'r', '-', 'r', '-', 'r', '-'],
        ['-', 'r', '-', 'r', '-', 'r', '-', 'r'],
      ],
      activePlayer: 'r',
    });
  }
  winDetection(board, activePlayer) {
    var enemyPlayer = activePlayer == 'r' ? 'b' : 'r';
    var result = true;
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        if (board[i][j].indexOf(enemyPlayer) > -1) {
          result = false;
        }
      }
    }
    return result;
  }
  cloneBoard(board) {
    var output = [];
    for (var i = 0; i < board.length; i++) output.push(board[i].slice(0));
    return output;
  }
}

// some style params
let grey = '#cccccc';
let darkGrey = '#999999';
function Button({ disabled = false, ...props }) {
  return (
    <button
      className="highlight"
      style={{
        color: disabled ? darkGrey : 'black',
        fontSize: '1rem',
        fontWeight: 'bold',
        backgroundColor: disabled ? 'white !important' : 'white',
        borderRadius: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
        width: '100%',
        border: disabled ? `4px ${darkGrey} solid` : '4px black solid',
        boxShadow: `${grey} 3px 3px 3px`,
        cursor: disabled ? undefined : 'pointer',
      }}
      disabled={disabled}
      {...props}
    />
  );
}

//render the gameboard on the board element
render(<GameBoard />, document.getElementById('board'));
