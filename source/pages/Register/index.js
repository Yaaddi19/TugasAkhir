import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input } from '../../component/atom'
import Header from '../../component/molecul/Header'
import { colors } from '../../utils/colors'

export default function Register({navigation}) {
    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.container}>
            <Input title="Full Name" />
            <Gap height={24} />
            <Input title="Pekerjaan" />
            <Gap height={24} />
            <Input title="Email Address" />
            <Gap height={24} />
            <Input title="Password" />
            <Gap height={55} />
            <Button title="Continue"
            onPress={() => navigation.navigate('UploadFoto')} />
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
