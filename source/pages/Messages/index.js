import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListMessages from '../../component/molecul/ListMessages'
import { colors } from '../../utils/colors'

export default function Messages() {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <Text>Pages messages</Text>
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
    }
})
