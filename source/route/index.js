import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GetStarted, 
    Splash,
    Register, 
    Login,
    UploadFoto,
    Lawyers,
    Messages,
    } from '../pages';
import { BottomNavigator } from '../component/molecul';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeApp = () => {
    return (
        <BottomTab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <BottomTab.Screen name="Lawyers"
            component={Lawyers} />
             <BottomTab.Screen name="Messages"
            component={Messages} />
        </BottomTab.Navigator>
    )
}

const Route = () => {
    return (
        <Stack.Navigator initialRouteName="HomeApp">
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
            <Stack.Screen name="HomeApp" 
            component={HomeApp}
            options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Route;