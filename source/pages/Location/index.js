import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { DummyHospital1, ILHospitalBG } from '../../assets'
import ListLocation from '../../component/molecul/ListLocation'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

export default function Location() {
    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.avatar}>
                <Text style={styles.title}>Rumah Sakit Tersedia</Text>
            </ImageBackground>
            <View style={styles.container}>
                <ListLocation
                hospital="Klinik Hewan" 
                name="Tomang Pulo" 
                address="Jln. Tomang Raya"
                pic={DummyHospital1} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.primary,
        flex : 1,
    },
    container : {
        backgroundColor : colors.white,
        flex : 1,
        borderRadius : 20,
        marginTop : -20,
        paddingTop : 14,
    },
    avatar : {
        height : 240,
        paddingTop : 30,
    },
    title : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.white,
        textAlign : 'center',
    },
})
