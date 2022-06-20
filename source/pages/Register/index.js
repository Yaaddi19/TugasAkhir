import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Input } from '../../component/atom'
import Header from '../../component/molecul/Header'
import { colors } from '../../utils/colors'
import {BaseUrl} from '../../Data/Config';

export default function Register({navigation}) {
    
    const [ fullname, setFullname ] = useState("")
    const [ pekerjaan, setPekerjaan ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    

    const onRegister = () => {
        console.log("fullname", fullname)
        console.log("pekerjaan", pekerjaan)
        console.log("email", email)
        console.log("password", password)
        console.log("foto")
    
        fetch(BaseUrl +'/register', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password : password,
                pekerjaan : pekerjaan,
                nama : fullname,
                foto : "",
            }),
          })
            .then(response => response.json())
            .then(json => {
              if(json == "error") {
                  alert("error")
              } else {
                  //alert("success")
                  navigation.navigate('Login');
              }
     
              console.log('ini', json);
            })
            .catch(error => {
              console.log('error', error);
            });
    }

    

    return (
        <View style={styles.page}>
            <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
            <View style={styles.container}>
            <Input changeData={(text) => setFullname(text)} 
            title="Full Name" />
            <Gap height={24} />
            <Input title="Pekerjaan"  changeData={(text) => setPekerjaan(text)}  />
            <Gap height={24} />
            <Input title="Email Address"  changeData={(text) => setEmail(text)}  />
            <Gap height={24} />
            <Input title="Password"  changeData={(text) => setPassword(text)}  />
            <Gap height={55} />
            <Button title="Continue"
            onPress={() => onRegister()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    page : {
        flex : 1,
        backgroundColor : colors.white
    },

    container : {
        padding : 40,
        paddingTop : 0,
    }
})
