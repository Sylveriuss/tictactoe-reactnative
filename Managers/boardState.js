import evaluate from './Evaluate'
import Constants from './Constants'

function cleanBoard() {
  return ([Constants.EMPTY,Constants.EMPTY,Constants.EMPTY
  , Constants.EMPTY,Constants.EMPTY,Constants.EMPTY
  , Constants.EMPTY,Constants.EMPTY,Constants.EMPTY])
}

const initialboard = {
  counter: 0,
  lastPlayer: undefined,
  AISymbol: undefined,
  message: "",
  board: cleanBoard()
}

function toggleBoardState(state = initialboard, action) {
  let nextState


  console.log()

  switch (action.type) {

    case Constants.INIT:

      nextState = {
        counter: 0,
        message: "",
        lastPlayer: undefined,
        AISymbol: undefined,
        board: cleanBoard()
      }

      return nextState

    case Constants.PLAYER_CHOSEN:

      let lastPlayer;
      let aISymbol;

      if (action.value[0] == Constants.CROSS) {
        lastPlayer = Constants.AI
        aISymbol = Constants.CIRCLE
      } else {
        lastPlayer = Constants.GAMER
        aISymbol = Constants.CROSS
      }
      nextState = {
        counter: 0,
        message: "",
        lastPlayer: lastPlayer,
        AISymbol: aISymbol,
        board: cleanBoard()
      }

      return nextState

    case Constants.ERROR:

      nextState = {
        counter: state.counter,
        message: Constants.ERROR,
        lastPlayer: state.lastPlayer,
        AISymbol: state.AISymbol,
        board: state.board
      }

      return nextState

    case Constants.UPDATE:

      nextState = {
        counter: state.counter + 1,
        message: "",
        lastPlayer: action.value[0],
        AISymbol: state.AISymbol,
        board: state.board
      }


      let lastState = state.board[action.value[1]]

      switch (lastState) {
        case Constants.EMPTY:
            if (action.value[0] === Constants.GAMER) {
              nextState.board[action.value[1]] =
                  (state.AISymbol === Constants.CROSS ? Constants.CIRCLE : Constants.CROSS)
            } else {
              nextState.board[action.value[1]] = state.AISymbol
            }
          break;
        default:
          break;
      }

      let winner = evaluate(nextState.board)
      if (winner === undefined)
      {
        return nextState
      } else {
        nextState.counter = -1
        nextState.message = (winner === nextState.AISymbol ? 'You lost' : (winner === Constants.TIE ? 'Game over' : 'You won') )
        return nextState
      }

    default:
      return state
  }
}

export default toggleBoardState
