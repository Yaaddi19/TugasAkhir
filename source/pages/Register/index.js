import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input } from '../../component/atom'
import Header from '../../component/molecul/Header'
import { colors } from '../../utils/colors'

export default function Register() {
    return (
        <View style={styles.page}>
            <Header />
            <View style={styles.container}>
            <Input title="Full Name" />
            <Gap height={24} />
            <Input title="Pekerjaan" />
            <Gap height={24} />
            <Input title="Email Address" />
            <Gap height={24} />
            <Input title="Password" />
            <Gap height={55} />
            <Button title="Continue" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.white
    },

    container : {
        padding : 40,
        paddingTop : 0,
    }
})
