import React from 'react'
import { View } from 'react-native'
import { shapes } from '../Styles/Common'


class Cross extends React.Component{

  render() {
      return (
        <View style={shapes.cross}>
          <View style={shapes.crossUp} />
          <View style={shapes.crossFlat} />
        </View>
      )
  }

}


export default Cross
