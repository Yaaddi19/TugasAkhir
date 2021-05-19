import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { ILGetStarted } from '../../assets'
import { Gap } from '../../component/atom'
import Button from '../../component/atom/Button'
import { colors } from '../../utils/colors'

export default function GetStarted({navigation}) {
    return (
        <ImageBackground source={ILGetStarted} style={styles.page}>
            <View>
                <Text></Text>
            </View>
            <View>
                <Button title="Get Started" 
                onPress={() => navigation.navigate('Register')} />
                <Gap height={16}/>
                <Button type="secondary" 
                title="Sign In"
                onPress={() => navigation.replace('Login')} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        padding : 40,
        justifyContent : 'space-between',
        flex : 1,
    }
})
