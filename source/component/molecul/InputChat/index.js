import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import { Button } from '../../atom'

export default function InputChat() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan" />
            <Button type="btn-icon-send" />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 16,
        flexDirection : 'row'
    },
    input : {
        backgroundColor : colors.disable,
        padding : 14,
        borderRadius : 10,
        marginRight : 10,
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        maxHeight : 45,
        flex : 1,
    }
})
