import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function ListMessages({profile, name, desc}) {
    return (
        <View style={styles.container}>
            <Image source={profile} style={styles.avatar}/>
            <View style={styles.section}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
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
