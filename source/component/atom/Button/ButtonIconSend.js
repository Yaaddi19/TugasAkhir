import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICSend, ICSendActive } from '../../../assets'
import { colors } from '../../../utils/colors'

export default function ButtonIconSend({disable}) {
    return (
        <View style={styles.container(disable)}>
            {disable && <ICSend/>}
            {!disable && <ICSendActive/>}
        </View>
    )
}

const styles = StyleSheet.create({
    container : (disable) => ( {
        backgroundColor : disable ? colors.disable : colors.nondisable,
        width : 45,
        height : 45,
        borderRadius : 10,
        paddingTop : 3,
        paddingRight : 3,
        paddingLeft : 8,
        paddingBottom : 8,
    })
})
