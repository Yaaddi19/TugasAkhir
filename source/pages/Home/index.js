import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gap } from '../../component/atom';
import { DoctorCategory, HomeProfile, NewsItem, RatedDoctor } from '../../component/molecul';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { JSONCategoryDoctor, DummyDoctor1 } from '../../assets';

export default function Home({navigation}) {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.wrapperSection}>
                        <Gap height={30} />
                        <HomeProfile onPress={() => navigation.navigate('UserProfile')}/>
                        <Text style={styles.welcome}>Mau Konsultansi dengan siapa hari ini ?</Text>
                    </View>
                <View style={styles.wrapper}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <View style={styles.category}>
                            <Gap width={32} />
                            {
                                JSONCategoryDoctor.data.map(item => {
                                    return (
                                        <DoctorCategory 
                                        key={item.id}
                                        category={item.category}
                                        onPress={() => navigation.navigate('Chatting')}/>
                                    )
                                })
                            }
                            <Gap width={21} />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.wrapperSection}>
                    <Text style={styles.label}>Top Rated Doctor</Text>
                    <RatedDoctor 
                    name="Dicky"
                    profesion="Dokter Kucing"
                    avatar={DummyDoctor1}
                    onPress={() => navigation.navigate('DoctorProfile') }/>
                    {/* <RatedDoctor 
                    name="Saiful"
                    profesion="Dokter Anjing"
                    avatar={DummyDoctor1}
                    onPress={() => navigation.navigate('DoctorProfile') }/>
                    <RatedDoctor 
                    name="Santuy"
                    profesion="Dokter Capung"
                    avatar={DummyDoctor1}
                    onPress={() => navigation.navigate('DoctorProfile') }/> */}
                    <Text style={styles.label} >Good News</Text>
                </View>
                <NewsItem/>
                <NewsItem/>
                <NewsItem/>
                <Gap height={30} />
            </ScrollView>
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
        backgroundColor : 'white',
        flex : 1,
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
    wrapperSection : {
        paddingHorizontal : 16,
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
