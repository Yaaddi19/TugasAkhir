import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICCat, ICDog } from '../../../assets'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'

export default function DoctorCategory({category, onPress}) {
    const Icon = () => {
    if (category === 'dokter kucing'){
        return <ICCat style={styles.illustration} />
    }
    if (category === 'dokter anjing'){
        return <ICDog style={styles.illustration} />
    }
    return <ICCat style={styles.illustration} />
    }
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon />
            <View>
            <Text style={styles.label}>Saya butuh</Text>
            <Text style={styles.category}>{category}</Text>
            </View>
        </TouchableOpacity>
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
