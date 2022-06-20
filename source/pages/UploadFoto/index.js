import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { ICPlus, ICRemovePhoto, ILNullFoto } from '../../assets'
import { Button, Gap, Link } from '../../component/atom'
import { Header } from '../../component/molecul'
import { colors } from '../../utils/colors'
import { fonts } from '../../utils/fonts'
import * as ImagePicker from 'react-native-image-picker';

export default function UploadFoto({navigation}) {
    const  [setPlus, setRemove] = useState(false);
    const [foto, setFoto] = useState(ILNullFoto); 
    const getImage = () => {
        ImagePicker.launchImageLibrary({}, response => {            
            console.log('response: ', response)
            const source = {uri: response.uri}
            setFoto(source)
            setRemove(true)
        });
    }
    return (
        <View style={styles.page}>
            <Header title="Upload Foto"
            onPress={() => navigation.goBack() } />
            <View style={styles.container}> 
                <View style={styles.containerprofile}>
                    <TouchableOpacity style={styles.containerfoto} onPress={getImage} >
                        <Image source={foto}
                        style={styles.nullfoto} />
                        {setPlus && <ICRemovePhoto style={styles.addplus} />}
                        {!setPlus && <ICPlus style={styles.addplus} /> }
                    </TouchableOpacity>
                    <Text style={styles.textnama}>Yadi</Text>
                    <Text style={styles.textprofesi}>Mahasiswa</Text>
                </View>
                <View>
                    <Button 
                    disable={!setPlus}
                    title="Upload and Continue"
                    onPress={() => navigation.replace('HomeApp') } />
                        <Gap height={30}/>
                    <Link title="Skip for this" 
                    align='center'
                    size={16}
                    onPress={() => navigation.replace('HomeApp')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        backgroundColor : colors.white,
        flex : 1,
    },
    container : {
        paddingHorizontal :  40,
        flex : 1,
        justifyContent : 'space-between',
        paddingBottom : 64,

    },
    containerprofile : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    containerfoto : {
        height : 130,
        width : 130,
        borderColor : colors.border,
        borderWidth : 1,
        borderRadius : 130 / 2,
        alignItems : 'center',
        justifyContent : 'center',
    },
    nullfoto : {
        width : 110,
        height : 110,
        borderRadius : 110/2,
    },
    addplus : {
        position : 'absolute',
        bottom : 0,
        right : 0,
    },
    textnama : {
        fontSize : 24,
        color : colors.text.primary,
        fontFamily : fonts.primary[600],
    },
    textprofesi : {
        fontSize : 18,
        color : colors.text.secondary,
        fontFamily : fonts.primary[400]
    }
})
