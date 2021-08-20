import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyNews1 } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function NewsItem() {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>6 Tips Menjaga Kesehatan Kucing Peliharaan</Text>
                <Text style={styles.date}>Today</Text>
            </View>
            <Image source={DummyNews1} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
        borderBottomWidth : 1,
        borderBottomColor : colors.border,
        paddingBottom : 12,
        paddingTop : 16,
        paddingHorizontal : 16,
    },
    wrapper : {
        flex : 1,
    },
    title: {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        maxWidth : '90%',
    },
    date : {
        fontSize : 12,
        fontFamily : fonts.primary.normal,
        marginTop : 4
    },
    image : {
        width : 80,
        height : 60,
        borderRadius : 10,
    }
})
