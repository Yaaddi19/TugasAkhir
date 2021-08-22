import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1 } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function ListMessages() {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor1} style={styles.avatar}/>
            <View style={styles.section}>
                <Text style={styles.name}>Dicky</Text>
                <Text style={styles.desc}>Terima kasih atas wakt...</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        padding : 16,
        borderBottomWidth : 1,
        color : colors.border,
        alignItems : 'center',
    },
    avatar : {
        height : 46,
        width : 46,
        borderRadius : 46/2
    },
    section : {
        marginLeft : 12,
    },
    name : {
        fontSize : 16,
        fontFamily : fonts.primary.normal,
        color : colors.text.primary,
    },
    desc : {
        fontSize : 12,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary,
    }
})
