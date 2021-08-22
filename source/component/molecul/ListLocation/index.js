import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, ILHospitalBG } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function ListLocation() {
    return (
        <View style={styles.container}>
            <Image source={DummyHospital1} style={styles.avatar}/>
            <View>
            <Text style={styles.title}>Klink Hewan</Text>
            <Text style={styles.title}>Tomang Pulo</Text>
            <Text style={styles.address}>Jln. Tomang Raya</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        padding : 16,
        borderBottomWidth : 1,
    },
    avatar : {
        height : 60,
        width : 80,
        borderRadius : 10,
        marginRight : 16,
    },
    title : {
        fontSize : 16,
        fontFamily : fonts.primary.normal,
        color : colors.text.primary,
    },
    address : {
        fontSize : 12,
        fontFamily : fonts.primary[300],
        color : colors.text.secondary,
        marginTop : 6,
    }
})
