import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function ListLocation({hospital, name, address, pic}) {
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.avatar}/>
            <View>
            <Text style={styles.title}>{hospital}</Text>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.address}>{address}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        padding : 16,
        borderBottomWidth : 1,
    },
    avatar : {
        height : 60,
        width : 80,
        borderRadius : 10,
        marginRight : 16,
    },
    title : {
        fontSize : 16,
        fontFamily : fonts.primary.normal,
        color : colors.text.primary,
    },
    address : {
        fontSize : 12,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary,
        marginTop : 6,
    }
})
