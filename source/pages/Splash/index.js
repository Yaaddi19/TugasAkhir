import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ICTimbangan } from '../../assets/icon';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 3000)
  }, [navigation])
    return (
    <View style={styles.container}>
        <ICTimbangan />
        <Text style={styles.judul}> Konsultansi </Text>
    </View>
    )}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        flex : 1,
      },
      
      judul:{
        fontSize: 20,
        fontWeight: '600',
        color: '#112340',
        textAlign: 'center'
      }
    })
