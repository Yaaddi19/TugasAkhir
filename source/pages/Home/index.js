import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListHome from '../../component/molecul/ListHome'
import { colors } from '../../utils/colors'

export default function Home() {
    return (
        <View style={styles.page}>
            <ListHome />
            <ListHome />
            <ListHome />
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1,
    }
})
