import Constants from './Constants'

function evaluate(board) {
  if ((board[1]!==Constants.EMPTY)&&(board[0]===board[1])&&(board[1]===board[2]))
  {
    return board[1]
  }
  else if ((board[2] !== Constants.EMPTY)&&(board[2]===board[5])&&(board[5]===board[8]))
  {
    return board[5]
  }
  else if ((board[8] !== Constants.EMPTY)&&(board[8]===board[7])&&(board[7]===board[6]))
  {
    return board[7]
  }
  else if ((board[6] !== Constants.EMPTY)&&(board[6]===board[3])&&(board[3]===board[0]))
  {
    return board[3]
  }
  else if ((board[3] !== Constants.EMPTY)&&(board[3]===board[4])&&(board[4]===board[5]))
  {
    return board[3]
  }
  else if ((board[1] !== Constants.EMPTY)&&(board[1]===board[4])&&(board[4]===board[7]))
  {
    return board[7]
  }
  else if ((board[6] !== Constants.EMPTY)&&(board[6]===board[4])&&(board[4]===board[2]))
  {
    return board[4]
  }
  else if ((board[0] !== Constants.EMPTY)&&(board[0]===board[4])&&(board[4]===board[8]))
  {
    return board[0]
  }

  for (var box in board)
  {
    if (board[box] === Constants.EMPTY)
      return undefined
  }
  return Constants.TIE
}

export default evaluate
