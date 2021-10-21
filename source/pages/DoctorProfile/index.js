import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap } from '../../component/atom'
import { Header, Profile, ProfileItem } from '../../component/molecul'

export default function DoctorProfile() {
    return (
        <View style={styles.page}>
            <Header title="Profile" />
            <Profile 
            name="Dicky"
            profesi="Dokter Kucing"
            />
            <Gap height={10} />
            <ProfileItem 
            label="Alumnus"
            value="Univesitas Mercu Buana"
            />
            <ProfileItem 
            label="Tempat Praktik"
            value="Klinik Hewan Tomang Raya"
            />
            <ProfileItem 
            label="No STR"
            value="29749223"
            />
            <Gap height={24}/>
            <View style={styles.container}>
                <Button title="Mulai Konsultasi" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : 'white',
        flex : 1,
    },
    container : {
        paddingHorizontal : 40,
    }
})
