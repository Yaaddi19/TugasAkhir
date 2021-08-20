import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor1, ICStar } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function RatedDoctor() {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor1} style={styles.avatar} />
            <View style={styles.wrapper}>
                <Text style={styles.name}>Dicky</Text>
                <Text style={styles.category}>Dokter Kucing</Text>
            </View>
            <View style={styles.star}>
                <ICStar />
                <ICStar />
                <ICStar />
                <ICStar />
                <ICStar />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingBottom : 16,
    },
    avatar : {
        width : 50,
        height : 50,
        borderRadius : 50/2,
        marginRight : 12,
    },
    wrapper : {
        flex : 1,
    },
    star : {
        flexDirection : 'row',
    },
    name : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
    },
    category : {
        fontSize : 12,
        fontFamily : fonts.primary[400],
        color : colors.text.secondary,
        marginTop : 2,
    }
})
