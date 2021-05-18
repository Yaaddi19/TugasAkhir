import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils/colors'

export default function Button({type, title, onPress}) {
    return (
        <TouchableOpacity style={styles.container(type)} onPress={onPress}>
            <Text style={styles.text(type)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : type => ({
        backgroundColor :  type === 'secondary' 
        ? colors.button.secondary.background 
        : colors.button.primary.background,
        paddingVertical : 10,
        borderRadius : 10,
    }),
    text : type => ({
        fontSize : 16,
        textAlign : 'center',
        color : type === 'secondary' 
        ? colors.button.secondary.text 
        : colors.button.primary.text,
        fontFamily : 'Nunito-SemiBold',
    })
})
