import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1 } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function Other() {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor1} style={styles.avatar} />
            <View>
                <View style={styles.contentChat}>
                    <Text style={styles.contentText}>Ibu  dokter, mau nanya tentang kucing boleh?</Text>    
                </View>
                    <Text style={styles.contentDate}>16.00</Text>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        marginBottom : 20,
        alignItems : 'flex-end',
        paddingLeft : 16,
        flexDirection : 'row',
    },
    avatar : {
        width : 30,
        height : 30, 
        borderRadius : 30/2,
        marginRight : 12,
    },
    contentChat : {
        padding : 12,
        paddingRight : 18,
        backgroundColor : colors.cardText,
        maxWidth : '80%',
        borderRadius : 10,
        borderBottomLeftRadius : 0,
    },
    contentText : {
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        color : 'white',
    },
    contentDate : {
        fontSize : 11,
        fontFamily : fonts.primary.normal,
        color : colors.text.secondary,
        marginTop : 8,
    }
})
