import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Gap } from '../../component/atom'
import { Header, List, Profile } from '../../component/molecul'

export default function UserProfile({navigation}) {
    return (
        <View style={styles.container}>
            <Header title="Profile"
            onPress={() => navigation.goBack() } />
            <Gap height={10} />
            <Profile/>
            <Gap height={14} />
            <List name="Edit Profile"
            desc="Last Update Yesterday"
            type="next"
            icon="edit-profile" />
            <List name="Edit Profile"
            desc="Last Update Yesterday"
            type="next"
            icon="language" />
            <List name="Edit Profile"
            desc="Last Update Yesterday"
            type="next"
            icon="rate" />
            <List name="Edit Profile"
            desc="Last Update Yesterday"
            type="next"
            icon="help-center" />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : 'white',
        flex : 1,
    }
})
