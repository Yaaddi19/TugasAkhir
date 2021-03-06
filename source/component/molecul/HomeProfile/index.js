import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { DummyUser } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function HomeProfile({onPress}) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={DummyUser} style={styles.avatar} />
            <View>
                <Text style={styles.name}>Yadi</Text>
                <Text style={styles.profesion}>Mahasiswa</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
    },
    avatar : {
        width : 46,
        height : 46,
        borderRadius : 46/2,
        marginRight : 12,
    },
    name : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
    },
    profesion : {
        fontSize : 12,
        fontFamily : fonts.primary[400],
        color : colors.text.secondary,
    }
})
