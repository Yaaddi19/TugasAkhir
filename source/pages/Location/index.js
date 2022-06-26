import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Platform, Linking } from 'react-native'
import { DummyHospital1, ILHospitalBG } from '../../assets'
import ListLocation from '../../component/molecul/ListLocation'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'

export default function Location() {

    const preLock = () => {
        const url = Platform.select({
            ios: `comgooglemaps://?center=-6.181411,106.806402&q=-6.181411,106.806402&zoom=14&views=traffic"`,
            android: `geo://?q=-6.181411,106.806402`,
        });
        Linking.canOpenURL(url)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(url);
                } else {
                    const browser_url = `https://www.google.de/maps/@-6.181411,106.806402`;
                    return Linking.openURL(browser_url);
                }
            })
            .catch(() => {
                if (Platform.OS === 'ios') {
                    Linking.openURL(
                        `maps://?q=-6.181411,106.806402`,
                    );
                }
            });
    }

    return (
        <View style={styles.page}>
            <ImageBackground source={ILHospitalBG} style={styles.avatar}>
                <Text style={styles.title}>Rumah Sakit Tersedia</Text>
            </ImageBackground>
            <View style={styles.container}>
                <ListLocation
                hospital="Klinik Hewan"
                onPress={preLock}
                name="Tomang Pulo" 
                address="Jln. Tomang Raya"
                pic={DummyHospital1} />
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
        borderRadius : 20,
        marginTop : -20,
        paddingTop : 14,
    },
    avatar : {
        height : 240,
        paddingTop : 30,
    },
    title : {
        fontSize : 20,
        fontFamily : fonts.primary[600],
        color : colors.white,
        textAlign : 'center',
    },
})
