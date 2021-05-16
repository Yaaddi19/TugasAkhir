import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted } from '../../assets'
import { Gap } from '../../component/atom'
import Button from '../../component/atom/Button'

export default function GetStarted() {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <Text></Text>
            </View>
            <View>
                <Button title="Get Started" />
                <Gap height={16}/>
                <Button type="secondary" title="Sign In" />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : 'white',
        padding : 40,
        justifyContent : 'space-between',
        flex : 1,
    }
})
