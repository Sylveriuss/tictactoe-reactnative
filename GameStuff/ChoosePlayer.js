import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { buttons, containers, titles, shapes } from '../Styles/Common'
import { connect} from 'react-redux'
import Cross from './Cross'
import Circle from './Circle'
import Constants from '../Managers/Constants'

class ChoosePlayer extends React.Component {

  chosen_(player) {
    const action = { type: Constants.PLAYER_CHOSEN, value: [player, null]}
    this.props.dispatch(action)
  }

  render() {
    return (
      <View style={containers.choose_player}>
        <View style={containers.choose_player_in}>
          <Text style={titles.infos_2}>Choose your player</Text>
        </View>
        <View style={containers.choose_player_in}>
            <View style={containers.choose_player_empty}/>
            <TouchableOpacity style={containers.box} onPress={() => {this.chosen_(Constants.CROSS)}}>
              <Cross/>
            </TouchableOpacity>
            <View style={containers.choose_player_empty}/>
            <TouchableOpacity style={containers.box} onPress={() => {this.chosen_(Constants.CIRCLE)}}>
              <Circle/>
            </TouchableOpacity>
            <View style={containers.choose_player_empty}/>
        </View>
      </View>
    )
  }

}

const mapStateToProps = (state) => { return {} }

export default connect(mapStateToProps)(ChoosePlayer)
