import { StyleSheet } from 'react-native'

const containers = StyleSheet.create({
  main_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  gameboard: {
    marginTop: 40,
    paddingTop: 50,
    width: '95%',
    aspectRatio: 9 / 10
  },
  keyboard: {
    width: '95%',
    aspectRatio: 5,
    justifyContent: 'space-around',
    flexDirection: 'row',
    padding: 10
  },
  choose_player: {
    height: 250,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'white'
  },
  choose_player_in: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    height: '35%',
    marginBottom: 60
  },
  choose_player_empty: {
    width: '10%'
  },
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    width:'33%',
    height:'33%'
  },
  grid_sticks: {
    position: 'absolute',
    flex: 1,
    zIndex: -100,
    height: "100%",
    width: "100%",
  },
  grid_stick_up: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    height: "100%",
    width: "100%",
    zIndex: -100,
    position: 'absolute',
    flexDirection: 'row'
  },
  grid_stick_flat: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    height: "100%",
    width: "100%",
    zIndex: -100,
    position: 'absolute'
  }
})

const titles = StyleSheet.create({
  title_size1: {
    fontFamily: 'Roboto',
    fontSize: 48,
    fontWeight: 'bold'
  },
  infos: {
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  infos_2: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    margin: 60,
    paddingTop: 60
  }
})

const buttons = StyleSheet.create({
  button_size1_background: {
    backgroundColor: "darkorange",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25
  },
  button_size1_text: {
    color: "white",
    fontSize: 18
  },
  button_size2_background: {
    backgroundColor: "darkorange",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12
  },
  button_size2_text: {
    color: "white",
    fontSize: 18
  }
})

const shapes = StyleSheet.create({
  circle: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    borderColor: 'black',
    borderWidth: 20
  },
  cross: {
    transform: [
      {rotate: '45deg'}
    ]
  },
  crossUp: {
    backgroundColor: 'black',
    height: 100,
    width: 20
  },
  crossFlat: {
    backgroundColor: 'black',
    height: 20,
    width: 100,
    position: 'absolute',
    left: -40,
    top: 40
  },
  stickUp: {
    backgroundColor: 'darkgrey',
    height: '95%',
    width: 3
  },
  stickFlat: {
    backgroundColor: 'darkgrey',
    height: 3,
    width: '95%'
  },
  empty_stick_up: {
    height: '100%',
    width: '30%'
  },
  empty_stick_flat: {
    height: '30%',
    width: '100%'
  }
})

export {containers, titles, buttons, shapes}
