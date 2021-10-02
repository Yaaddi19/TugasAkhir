import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header } from '../../component/molecul'

export default function Chatting() {
    return (
        <View>
            <Header title="Dicky" type='homeapp'/>
            <Text>Minggu, 3 Oktober 2021</Text>
            <ChatItem/>
            <ChatItem/>
            <ChatItem/>
        </View>
    )
}

const styles = StyleSheet.create({})
