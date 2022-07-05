import React from 'react'
import { SafeAreaView } from 'react-native'
import UvacatScreen from './src/screens/UvacatScreen' 

import  styles  from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <UvacatScreen/>
    </SafeAreaView>
  )
}

export default App