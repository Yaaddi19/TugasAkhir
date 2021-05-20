import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICTimbangan } from '../../assets'
import { Button, Gap, Input, Link } from '../../component/atom'
import { colors } from '../../utils/colors'

export default function Login({navigation}) {
    return (
        <View style={styles.page}>
            <ICTimbangan />
            <Gap height={66} />
            <Input title="Email Address"/>
            <Gap height={24} />
            <Input title="Password" />
            <Gap height={23} />
            <Link title="Forgot My Password" 
            size={12} />
            <Gap height={65} />
            <Button title="Sign In" 
            onPress={() => navigation.replace('HomeApp')} />
            <Gap height={110} />
            <Link title="Create New Account" 
            size={16}
            align="center" />
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        padding : 40,
        paddingTop: 100,
        backgroundColor : colors.white ,
        flex : 1,
    }
})
