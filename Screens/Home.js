import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { buttons, containers, titles } from '../Styles/Common'

class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  _startPlay() {
      this.props.navigation.navigate("GameBoard")
  }

  render() {
    return (
      <View style={containers.main_container}>
        <View/>
        <Text style={titles.title_size1}>TicTacToe</Text>

        <TouchableOpacity
          style={buttons.button_size1_background}
          onPress={() => this._startPlay()}>
          <Text style={buttons.button_size1_text}>
            Click to Play
          </Text>
        </TouchableOpacity>
        <View/>
      </View>
    )
  }
} // Home

export default Home;
