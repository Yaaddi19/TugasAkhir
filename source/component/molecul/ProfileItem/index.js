import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function ProfileItem({label, value}) {
    return (
        <View style={styles.container}>
            <Text style={styles.alumnus}>{label}</Text>
            <Text style={styles.campus}>{value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 16,
        borderBottomWidth : 1,
        borderBottomColor : colors.border,
    },
    alumnus : {
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        color : colors.text.secondary,
        marginBottom : 6,
    },
    campus : {
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        color : colors.text.primary,
    }
})
