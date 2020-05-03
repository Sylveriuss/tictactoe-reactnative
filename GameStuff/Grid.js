import React from 'react'
import { View, Text } from 'react-native'
import { buttons, containers, titles, shapes } from '../Styles/Common'
import { connect } from 'react-redux'
import Box from './Box'
import GridSticks from './GridSticks'
import Constants from '../Managers/Constants'

class Grid extends React.Component {

  constructor(props) {
    super(props)
    this._initBoard()
  }

  _initBoard() {
    const action = { type: Constants.INIT, value: undefined}
    this.props.dispatch(action)
  }

  render() {
    return (
      <View style={containers.grid}>
        {this.props.board.map((_, index) => <Box id={index} key={index} /> )}
        <GridSticks/>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    board: state.board
  }
}

export default connect(mapStateToProps)(Grid)
