import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'

export default function ListMessages() {
    return (
        <View style={styles.container}>
            <Text>List Messages</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        borderBottomWidth : 1,
        color : colors.secondary
    }
})
