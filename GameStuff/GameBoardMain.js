import React from 'react'
import { Button, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import { buttons, containers, titles } from '../Styles/Common'
import Grid from '../GameStuff/Grid'
import BottomButtons from '../GameStuff/BottomButtons'
import GameMaster from '../Managers/GameMaster'
import Modal from 'react-native-modal'
import ChoosePlayer from '../GameStuff/ChoosePlayer'
import { connect} from 'react-redux'


class GameBoardMain extends React.Component {

  constructor(props) {
    super(props)
  }

  showModal_() {
    return (this.props.lastPlayer === undefined)
  }

  render() {
    return (
      <View style={containers.main_container}>
        <View style={containers.gameboard}>
          <Grid/>
        </View>
        <GameMaster/>
        <BottomButtons navigation={this.props.navigation}/>
        <Modal isVisible={this.showModal_()}>
          <ChoosePlayer/>
        </Modal>
      </View>
    )
  }
} // Home

const mapStateToProps = (state) => {
  return {
    lastPlayer: state.lastPlayer
  }
}

export default connect(mapStateToProps)(GameBoardMain)
