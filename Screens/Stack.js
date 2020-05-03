import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './Home'
import GameBoard from './GameBoard'

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
  GameBoard: {
    screen: GameBoard,
    navigationOptions: {
      headerShown: false
    }
  }
})

export default createAppContainer(MainStack);
