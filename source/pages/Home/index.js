import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../component/molecul';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

export default function Home() {
    return (
        <View style={styles.page}>
            <HomeProfile/>
                <Text style={styles.welcome}>Mau Konsultansi dengan siapa hari ini ?</Text>
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
        paddingLeft : 16,
        paddingTop : 30,
    },
    welcome : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 30,
        marginBottom : 16,
        maxWidth : 240,
    }
})
