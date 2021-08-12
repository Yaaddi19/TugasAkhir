import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICFace, ICMessenger, ICMessengerActive, ICFaceActive, ICLocation, ICLocationActive, } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function Tabitem({title, active, onPress, onLongPress}) {
    const Icon = () => {
        if ( title === 'Home') {
            return active ? <ICFaceActive/> : <ICFace />
        }
        if (title === 'Messages') {
        return active ? <ICMessengerActive/> : <ICMessenger />
        }
        if (title === 'Location') {
            return active ? <ICLocationActive/> : <ICLocation />
        }
        return <ICFace />
    }
    return (
        <TouchableOpacity 
        style={styles.container} 
        onPress={onPress}
        onLongPress={onLongPress}>
            <Icon />
            <Text style={styles.text(active)}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
    },
    text : (active) => (
        {
        fontSize : 10,
        fontFamily : fonts.primary[600],
        color : active 
        ? colors.text.inActive 
        : colors.text.noActive,
        marginTop : 4,
        }
    )
})
