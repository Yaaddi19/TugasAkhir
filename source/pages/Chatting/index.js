import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../component/molecul'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

export default function Chatting() {
    return (
        <View style={styles.page}>
            <Header  title="Dicky" type="homeapp"/>
            <View style={styles.content}>
            <Text style={styles.chatdate}>Minggu, 3 Oktober 2021</Text>
            <ChatItem isMe/>
            <ChatItem/>
            <ChatItem isMe/>
            </View>
            <InputChat/>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : 'white',
        flex : 1,
    },
    content : {
        flex : 1,
    },
    chatdate : {
        fontSize : 11,
        fontFamily : fonts.primary.normal,
        marginVertical : 30,
        textAlign : 'center',
        color : colors.text.secondary,
    }
})
