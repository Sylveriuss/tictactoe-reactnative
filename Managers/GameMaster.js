import React from 'react'
import { Text } from 'react-native'
import { connect } from 'react-redux'
import { buttons, containers, titles } from '../Styles/Common'
import evaluate from './Evaluate'
import Constants from './Constants'

function evaluationMinimax(winner, symbolMax) {
  if (symbolMax === winner) {
    return 1
  } else if (winner === Constants.TIE || winner === undefined) {
    return 0
  } else {
    return -1
  }
}


function pion(state){
  if (state === Constants.CROSS) {
    return 'X'
  }else if (state === Constants.CIRCLE) {
    return 'O'
  } else {
    return ' '
  }
}

function displayBoard(board) {
  console.log(pion(board[0])+pion(board[1])+pion(board[2]))
  console.log(pion(board[3])+pion(board[4])+pion(board[5]))
  console.log(pion(board[6])+pion(board[7])+pion(board[8]))
}


function returnOppositeSymbol(symbolMax) {
  if (symbolMax === Constants.CROSS) {
    return Constants.CIRCLE
  } else {
    return Constants.CROSS
  }
}

function minimax(board, depth, maximizingPlayer, symbolMax) {
  let winner = evaluate(board)

  if (depth === 0 || winner !== undefined ) {
    return evaluationMinimax(winner, symbolMax);
  }

  if (maximizingPlayer) {

    // Maximize
    let maxEval = -100

    for (var box in board) {

      if (board[box] === Constants.EMPTY){

        board[box] = symbolMax
        let evaluation = minimax(board, depth-1, false, symbolMax)
        board[box] = Constants.EMPTY

        if (evaluation > maxEval) {
          maxEval = evaluation
        }
      }
    }

    return maxEval

  } else {

    // Minimize
    let minEval = 100

    for (var box in board) {

      if (board[box] === Constants.EMPTY) {

        board[box] = returnOppositeSymbol(symbolMax)
        let evaluation = minimax(board, depth-1, true, symbolMax)
        board[box] = Constants.EMPTY

        if (evaluation < minEval) {
          minEval = evaluation
        }
      }
    }

    return minEval

  }
}

class GameMaster extends React.Component{

  constructor(props) {
      super(props)
  }

  _playIA() {
    let board = this.props.board

    let bestmove = -1
    let maxscore = -2

    for (var box in this.props.board) {

      if (board[box] === Constants.EMPTY) {

        board[box] = this.props.AISymbol
        let score = minimax(board, 6, false, this.props.AISymbol)
        board[box] = Constants.EMPTY

        if (score >= maxscore) {
          bestmove = box
          maxscore = score
        }
      }

    }

    if ((bestmove !== -1) && (board[bestmove] === Constants.EMPTY)){

      const action = { type: Constants.UPDATE, value: [Constants.AI, bestmove]}
      this.props.dispatch(action)

      return true;
    }

    return false;
  }

  render() {
    let information

    if (this.props.message !== "") {
      if (this.props.message === Constants.ERROR)
      {
        information = "There has been an error"
      } else {
        information = this.props.message
      }
    } else if (this.props.lastPlayer === Constants.AI) {
      information = "Your turn"
    } else if (this.props.lastPlayer === Constants.GAMER) {
      information = this._playIA() ? "Wait your turn" : "Game over"
    } else {
      information = "Please do begin the game"
    }

    return (
      <Text style={titles.infos}>{information}</Text>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    message: state.message,
    lastPlayer: state.lastPlayer,
    board: state.board,
    AISymbol: state.AISymbol
  }
}

export default connect(mapStateToProps)(GameMaster)
