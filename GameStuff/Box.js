import React from 'react'
import { View, TouchableWithoutFeedback, Text } from 'react-native'
import { connect } from 'react-redux'
import { containers } from '../Styles/Common'
import Circle from './Circle'
import Cross from './Cross'
import Constants from '../Managers/Constants'

class Box extends React.Component{

  constructor(props) {
      super(props)
  }

  _displayBox() {

    switch (this.props.board[this.props.id]) {

      case Constants.CROSS:

        return (
          <View style={containers.box}>
            <Cross/>
          </View>
        )

      case Constants.CIRCLE:

        return (
          <View style={containers.box}>
            <Circle/>
          </View>
        )
        break;

      case Constants.EMPTY:
      default:

        return (
          <View style={containers.box}/>
        )
    }
  }

  _beenTouched() {
    if ( (this.props.board[this.props.id] === Constants.EMPTY)
      && (this.props.counter !== -1) ) {
      const action = { type: Constants.UPDATE, value: [Constants.GAMER, this.props.id]}
      this.props.dispatch(action)
    }
  }

  render() {
    return (
        <TouchableWithoutFeedback onPress={() => this._beenTouched()} >
          {this._displayBox()}
        </TouchableWithoutFeedback>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    lastPlayer: state.lastPlayer,
    board: state.board
  }
}

export default connect(mapStateToProps)(Box)
