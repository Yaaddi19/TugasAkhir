import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Button({type, title, onPress}) {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : type => ({
        backgroundColor :  type === 'secondary' ? '#A9AAB0' : '#0F1D69',
        paddingVertical : 10,
        borderRadius : 10,
    }),
    text : type => ({
        fontSize : 16,
        fontWeight : '600',
        textAlign : 'center',
        color : type === 'secondary' ?  '#0F0F0F' : 'white'
    })
})
