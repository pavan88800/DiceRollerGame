import React, {useState} from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import DiceOne from './assets/dice1.png'
import DiceTwo from './assets/dice2.png'
import DiceThree from './assets/dice3.png'
import DiceFour from './assets/dice4.png'
import DiceFive from './assets/dice5.png'
import DiceSix from './assets/dice6.png'

const App = () => {
  const [dice, setDice] = useState(DiceFive)
  const playGame = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1
    switch (randomNumber) {
      case 1:
        setDice(DiceOne)
        break
      case 2:
        setDice(DiceTwo)
        break
      case 3:
        setDice(DiceThree)
        break
      case 4:
        setDice(DiceFour)
        break
      case 5:
        setDice(DiceFive)
        break
      case 6:
        setDice(DiceSix)
        break
      default:
        setDice(DiceFive)
    }
  }
  return (
    <>
      <View style={styles.container}>
        <Image style={styles.image} source={dice} />
        <TouchableOpacity onPress={playGame}>
          <Text style={styles.gamePlayButton}>Play Games</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222831',
  },
  image: {
    width: 200,
    height: 200,
  },
  gamePlayButton: {
    fontSize: 20,
    marginTop: 30,
    color: '#F2A365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#30475e',
    borderRadius: 5,
    borderWidth: 3,
    fontWeight: 'bold',
  },
})

export default App
