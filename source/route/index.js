import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { GetStarted, 
    Splash,
    Register, 
    Login,
    UploadFoto,
    } from '../pages';

const Stack = createStackNavigator();

const Route = () => {
    return (
        <Stack.Navigator initialRouteName="GetStarted">
            <Stack.Screen name="Splash" 
            component={Splash}
            options={{headerShown: false}}/>
            <Stack.Screen name="GetStarted" 
            component={GetStarted}
            options={{headerShown: false}}/>
            <Stack.Screen name="Register" 
            component={Register}
            options={{headerShown: false}}/>
            <Stack.Screen name="Login" 
            component={Login}
            options={{headerShown: false}}/>
            <Stack.Screen name="UploadFoto" 
            component={UploadFoto}
            options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Route;