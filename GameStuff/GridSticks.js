import React from 'react'
import { View, Text } from 'react-native'
import { buttons, containers, titles, shapes } from '../Styles/Common'



class GridSticks extends React.Component {

  render() {
    return (
      <View style={containers.grid_sticks}>
        <View style={containers.grid_stick_up}>
                <View style={shapes.empty_stick_up}/>
                <View style={shapes.stickUp}/>
                <View style={shapes.empty_stick_up}/>
                <View style={shapes.stickUp}/>
                <View style={shapes.empty_stick_up}/>
        </View>
        <View style={containers.grid_stick_flat}>
                <View style={shapes.empty_stick_flat}/>
                <View style={shapes.stickFlat}/>
                <View style={shapes.empty_stick_flat}/>
                <View style={shapes.stickFlat}/>
                <View style={shapes.empty_stick_flat}/>
        </View>
      </View>
    )
  }
}



export default GridSticks
