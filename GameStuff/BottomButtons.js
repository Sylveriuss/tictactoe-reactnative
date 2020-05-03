import React from 'react'
import { Button, Text, View, TouchableOpacity, BackHandler } from 'react-native'
import { buttons, containers, titles } from '../Styles/Common'
import { connect } from 'react-redux'
import Constants from '../Managers/Constants'


class BottomButtons extends React.Component {

    constructor(props) {
      super(props)
    }

    _stopPlaying() {
      this.props.navigation.navigate(Constants.HOME)
    }

    _reset() {
      const action = { type: Constants.INIT, value: []}
      this.props.dispatch(action)
    }

    render() {
      return (
        <View style={containers.keyboard}>
          <TouchableOpacity
            style={buttons.button_size2_background}
            onPress={() => this._reset()}>
            <Text style={buttons.button_size2_text}>
              Reset
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={buttons.button_size2_background}
            onPress={() => this._stopPlaying()}>
            <Text style={buttons.button_size2_text}>
              Return
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
}

const mapStateToProps = (state) => { return {} }

export default connect(mapStateToProps)(BottomButtons)
