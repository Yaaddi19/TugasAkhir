import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { ICCat, ICDog } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function DoctorCategory() {
    return (
        <View style={styles.container}>
            <ICCat style={styles.illustration}/>
            <View>
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>dokter kucing</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        padding : 25,
        paddingTop : 20,
        backgroundColor : colors.cardLight,
        alignSelf : 'flex-start',
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
        marginRight : 20,
        alignItems : 'center',
    },
    illustration : {
        marginBottom : 12,
    },
    label : {
        fontSize : 12,
        fontFamily : fonts.primary[400],
        color : colors.text.secondary,
    },
    category : {
        fontSize : 12,
        fontFamily : fonts.primary[600],
        color : colors.text.primary,
    }
})
