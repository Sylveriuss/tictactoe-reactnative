import React from 'react'
import GameBoardMain from '../GameStuff/GameBoardMain'


class GameBoard extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <GameBoardMain navigation={this.props.navigation}/>
    )
  }
} // Home


export default GameBoard
