import React, { useEffect } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import { Button } from '../../atom'
// import firestore from '@react-native-firebase/firestore';

export default function InputChat({ onPressButton, onChange }) {
    return ( 
        <View style={styles.container}>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Tulis Pesan" />
            {/* <Button type="btn-icon-send" disable={false} onPress={onPressButton} /> */}

            <TouchableOpacity onPress={onPressButton} style={{ width: 50, height: 50, backgroundColor: 'red', borderRadius: 10 }}></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        padding : 16,
        flexDirection : 'row'
    },
    input : {
        backgroundColor : colors.disable,
        padding : 14,
        borderRadius : 10,
        marginRight : 10,
        fontSize : 14,
        fontFamily : fonts.primary.normal,
        maxHeight : 45,
        flex : 1,
    }
})
