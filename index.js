/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Router from './src/config/router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
