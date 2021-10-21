import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser, ICRemovePhoto } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function Profile({name, profesi}) {
    return (
        <View style={styles.container}>
            <View style={styles.borderavatar}>
                <Image source={DummyUser} style={styles.avatar} />
                <ICRemovePhoto style={styles.removePhoto}/>
            </View>
            { name && (
                <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.profesi}>{profesi}</Text>
                </View>
            )}
            
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
        textAlign : 'center',
    },
    profesi : {
        fontSize : 16,
        textAlign : 'center',
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 2,
    },
    removePhoto : {
        position : 'absolute',
        right : 8,
        bottom : 8,
    }
})
