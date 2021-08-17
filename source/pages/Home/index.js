import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../component/molecul';
import { colors } from '../../utils/colors';

export default function Home() {
    return (
        <View style={styles.page}>
            <HomeProfile/>
                <Text>Mau Konsultansi dengan siapa hari ini ?</Text>
                <DoctorCategory/>
                <DoctorCategory/>
                <Text>Top Rated Doctor</Text>
                <RatedDoctor/>
                <RatedDoctor/>
                <Text>Good News</Text>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1,
    }
})
