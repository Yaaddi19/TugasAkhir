import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { DummyDoctor1 } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import { Button } from '../../atom'


export default function PrimaryHome({onPress}) {
    return (
        <View style={styles.container}>
            <Button type="icon-only" icon="back-light" onPress={onPress} /> 
            <View style={styles.wrapper}>
                <Text style={styles.name}>Dicky</Text>
                <Text style={styles.desc}>Dokter Kucing</Text>
            </View>
            <Image source={DummyDoctor1} style={styles.avatar} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.primary,
        paddingVertical : 30,
        paddingLeft : 20,
        paddingRight : 16,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
        flexDirection : 'row',
        alignItems : 'center'
    },
    wrapper : {
        flex : 1,
    },
    avatar : {
        height : 46,
        width : 46,
        borderRadius : 46/2,
    },
    name : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : 'white',
        textAlign : 'center'
    },
    desc : {
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        color : 'white',
        textAlign : 'center'
    }
})
