import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header } from '../../component/molecul'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

export default function Chatting() {
    return (
        <View>
            <Header title="Dicky" type="dark-homeapp"/>
            <Text style={styles.chatdate}>Minggu, 3 Oktober 2021</Text>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
        </View>
    )
}

const styles = StyleSheet.create({
    chatdate : {
        fontSize : 11,
        fontFamily : fonts.primary.normal,
        marginVertical : 30,
        textAlign : 'center',
        color : colors.text.secondary,
    }
})
