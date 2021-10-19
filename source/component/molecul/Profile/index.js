import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function Profile() {
    return (
        <View style={styles.container}>
            <View style={styles.borderavatar}>
                <Image source={DummyUser} style={styles.avatar} />
            </View>
            <Text style={styles.name}>Yadi</Text>
            <Text style={styles.profesi}>Mahasiswa</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        justifyContent : 'center',
        alignItems :'center',
    },
    avatar : {
        width : 110,
        height : 110,
        borderRadius : 110/2,
    },
    borderavatar : {
        width : 130,
        height : 130,
        borderRadius : 130/2,
        borderWidth : 1,
        borderColor : 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 16,
    },
    profesi : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 2,
    }
})
