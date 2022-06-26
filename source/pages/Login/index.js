import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICTimbangan} from '../../assets';
import {Button, Gap, Input, Link} from '../../component/atom';
import {colors} from '../../utils/colors';
import {BaseUrl} from '../../Data/Config';

export default function Login({navigation}) {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")


  const onLogin = () => {

    console.log("email", email);
    console.log("pass", password)

     fetch(BaseUrl +'/login', {
         method: 'POST',
         headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             email: email,
             password : password,
         }),
       })
         .then(response => response.json())
         .then(json => {
           if(json == "gagal") {
               alert("gagal")
           } else {
               //alert("success")
                navigation.replace('HomeApp');
           }
  
           console.log('ini', json);
         })
         .catch(error => {
           console.log('error', error);
         });
  }

  return (
    <View style={styles.page}>
      <Input title="Email Address"
       changeData={(text) => setEmail(text)}/>
      <Gap height={24} />
      <Input changeData={(text) => setPassword(text)} title="Password" />
      <Gap height={23} />
      <Link title="Forgot My Password" size={12} />
      <Gap height={65} />
      <Button title="Sign In" onPress={() => onLogin()} />
      <Gap height={110} />
      <Link
        title="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    paddingTop: 100,
    backgroundColor: colors.white,
    flex: 1,
  },
});
