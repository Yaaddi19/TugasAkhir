import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ICNext } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function ListMessages({profile, name, desc, type}) {
    return (
        <View style={styles.container}>
            <Image source={profile} style={styles.avatar}/>
            <View style={styles.section}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
            {
                type === 'next' && <ICNext/>
            }
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
        justifyContent : 'space-between'
    },
    avatar : {
        height : 46,
        width : 46,
        borderRadius : 46/2
    },
    section : {
        marginLeft : 12,
        flex : 1,
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
