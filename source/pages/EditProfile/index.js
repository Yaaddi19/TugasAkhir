import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input } from '../../component/atom'
import { Header, Profile } from '../../component/molecul'

export default function EditProfile({navigation}) {
    return (
        <View style={styles.page}>
            <Header title="Edit Profile"
            onPress={() => navigation.goBack() } />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <Profile
                    isRemove />
                    <Gap height={26} />
                    <Input title="Full Name" />
                    <Gap height={24} />
                    <Input title="Pekerjaan" />
                    <Gap height={24} />
                    <Input title="Email Adress" />
                    <Gap height={24} />
                    <Input title="Password" />
                    <Gap height={40} />
                    <Button title="Save Profile"
                    onPress={() => navigation.goBack('UserProfile')} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : 'white', 
        flex : 1,
    },
    container : {
        padding : 40,
        paddingTop : 0,
    }
})
