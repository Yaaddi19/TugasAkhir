import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GetStarted, 
    Splash,
    Register, 
    Login,
    UploadFoto,
    Home,
    Messages,
    Location,
    ChooseDoctor,
    Chatting,
    UserProfile,
    EditProfile,
    DoctorProfile,
    } from '../pages';
import { BottomNavigator } from '../component/molecul';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

const HomeApp = () => {
    return (
        <BottomTab.Navigator tabBar={props => <BottomNavigator {...props}/>}>
            <BottomTab.Screen name="Home"
            component={Home} />
             <BottomTab.Screen name="Messages"
            component={Messages} />
             <BottomTab.Screen name="Location"
            component={Location} />
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
            {/* <Stack.Screen name="UploadFoto" 
            component={UploadFoto}
            options={{headerShown: false}}/> */}
            <Stack.Screen name="HomeApp" 
            component={HomeApp}
            options={{headerShown: false}}/>
            <Stack.Screen name="ChooseDoctor" 
            component={ChooseDoctor}
            options={{headerShown: false}}/>
            <Stack.Screen name="Chatting" 
            component={Chatting}
            options={{headerShown: false}}/>
            <Stack.Screen name="UserProfile" 
            component={UserProfile}
            options={{headerShown: false}}/>
            <Stack.Screen name="EditProfile" 
            component={EditProfile}
            options={{headerShown: false}}/>
            <Stack.Screen name="DoctorProfile" 
            component={DoctorProfile}
            options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default Route;