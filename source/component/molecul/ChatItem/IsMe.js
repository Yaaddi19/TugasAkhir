import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'


export default function IsMe() {
    return (
        <View style={styles.container}>
            <View style={styles.contentChat}>
            <Text style={styles.contentText}>Ibu  dokter, mau nanya tentang kucing boleh?</Text>    
            </View>
        <Text style={styles.contentDate}>16.00</Text>
    </View>
    )
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
