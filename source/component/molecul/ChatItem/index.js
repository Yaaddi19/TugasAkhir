import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import IsMe from './IsMe'
import Other from './Other'

export default function ChatItem({isMe}) {
    if (isMe) {
        return <IsMe/>
    } 
    return <Other />
}

const styles = StyleSheet.create({
    container : {
        marginBottom : 20,
        alignItems : 'flex-end',
        paddingRight : 16,
    },
    contentChat : {
        padding : 12,
        paddingRight : 18,
        backgroundColor : colors.cardLight,
        maxWidth : '70%',
        borderRadius : 10,
        borderBottomRightRadius : 0,
    },
    contentText : {
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        color : colors.text.primary,
    },
    contentDate : {
        fontSize : 11,
        fontFamily : fonts.primary.normal,
        color : colors.text.secondary,
        marginTop : 8,
    }
})