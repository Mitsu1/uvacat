import React from 'react'
import { useEffect } from "react"
import { View, Text} from 'react-native'
import  styles  from '../theme/appTheme'
import SplashScreen from 'react-native-splash-screen'

const UvacatScreen = () => {

    useEffect(() => {
        SplashScreen.hide()
    }, [])
    
    return (
        <View>
            <Text style={ styles.texto }>UvacatScreen</Text>
        </View>
    )
}

export default UvacatScreen