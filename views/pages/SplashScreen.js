import React, { useEffect } from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SplashBackground } from '../../assets'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('MainApp');
        }, 2000)
    }, [navigation]);

    return (
        <ImageBackground source={SplashBackground} style={styles.background}>
        </ImageBackground>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})
