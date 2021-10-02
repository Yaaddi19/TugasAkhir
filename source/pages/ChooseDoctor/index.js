import React from 'react';
import { StyleSheet, View } from 'react-native';
import { DummyDoctor1 } from '../../assets';
import { Header, ListMessages, } from '../../component/molecul';
import { colors } from '../../utils/colors';

export default function ChooseDoctor({navigation}) {
    return (
        <View style={styles.container}>
            <Header title="Pilih Dokter Kucing"
            type='homeapp'
            onPress={() => navigation.goBack() }/>
            <ListMessages 
            type = "next" 
            profile={DummyDoctor1}
            name="Dicky"
            desc="Pria" />
            <ListMessages 
            type = "next" 
            profile={DummyDoctor1}
            name="Dicky"
            desc="Pria" />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundColor : colors.white,
    flex : 1,
})
