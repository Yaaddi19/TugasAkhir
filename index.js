/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './source/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
// import firebase from '@react-native-firebase/app';
// import { Platform } from 'react-native';

// Your secondary Firebase project credentials for Android...
// const androidCredentials = {
//   clientId: '',
//   appId: '',
//   apiKey: '',
//   databaseURL: '',
//   storageBucket: '',
//   messagingSenderId: '',
//   projectId: '',
// };

// await firebase.initializeApp(credentials);

AppRegistry.registerComponent(appName, () => App);
