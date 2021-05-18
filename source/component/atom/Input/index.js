import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utils/colors'

export default function Input({title}) {
    return (
        <View>
            <Text style={styles.textInput}>{title}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        borderWidth : 1,
        borderRadius : 10,
        borderColor : colors.border,
        padding : 12,
    },
    textInput : {
        fontSize : 16,
        marginBottom : 7,
        fontFamily : 'Nunito-Regular',
        color : colors.text.secondary,

    }
})
