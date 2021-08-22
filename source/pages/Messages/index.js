import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListMessages from '../../component/molecul/ListMessages'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

export default function Messages() {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text style={styles.title}>Messages</Text>
                <ListMessages/>
                <ListMessages/>
                <ListMessages/>
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
        flex : 1,
        backgroundColor : colors.white,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20
    },
    title : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginLeft : 16,
        marginTop : 30,
    }
})
