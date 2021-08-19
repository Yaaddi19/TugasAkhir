import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gap } from '../../component/atom';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../component/molecul';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';

export default function Home() {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
            <HomeProfile/>
                <Text style={styles.welcome}>Mau Konsultansi dengan siapa hari ini ?</Text>
                <View style={styles.wrapper}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                    <View style={styles.category}>
                        <Gap width={16} />
                        <DoctorCategory/>
                        <DoctorCategory/>
                        <DoctorCategory/>
                        <DoctorCategory/>
                        <Gap width={5} />
                    </View>
                </ScrollView>
                </View>
                <Text style={styles.label}>Top Rated Doctor</Text>
                <RatedDoctor/>
                <RatedDoctor/>
                <Text style={styles.label} >Good News</Text>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.primary,
        flex : 1,
    },
    container : {
        backgroundColor : colors.white,
        flex : 1,
        paddingHorizontal : 16,
        paddingVertical : 30,
        borderBottomLeftRadius : 20,
        borderBottomRightRadius : 20,
    },
    welcome : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 30,
        marginBottom : 16,
        maxWidth : 240,
    },
    category : {
        flexDirection : 'row',
    },
    wrapper : {
        marginHorizontal : -15
    },
    label : {
        fontSize : 16,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
        marginTop : 30,
        marginBottom : 16,
    }
})
