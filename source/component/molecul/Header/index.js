import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils/colors'
import { fonts } from '../../../utils/fonts'
import { Button, Gap, } from '../../atom'

export default function Header({onPress, title, type}) {
    return (
        <View style={styles.container(type)}>
            <Button type="icon-only" icon={type === 'homeapp' ? 'back-light' : 'back-dark'} onPress={onPress} />
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24} />
        </View>
    )
}

const styles = StyleSheet.create({
    container : type => ( {
        paddingHorizontal : 16,
        paddingVertical : 30,
        backgroundColor : type === 'homeapp' ? colors.primary : colors.white,
        flexDirection : 'row',
        alignItems : 'center',
        borderBottomLeftRadius : type === 'homeapp' ? 20 : 0,
        borderBottomRightRadius : type === 'homeapp' ? 20 : 0,
    }),
    text : type =>  ({
        textAlign : 'center',
        flex : 1,
        fontSize : 20,
        fontFamily : fonts.primary[600] ,
        color : type === 'homeapp' ? colors.white : colors.text.primary,
    }),
})
