import React from 'react'
import { View } from 'react-native'
import { shapes } from '../Styles/Common'


class Circle extends React.Component{

  render() {
      return (
          <View style={shapes.circle} />
      )
  }

}

export default Circle
