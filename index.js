/**
 * @format
 */

import React from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import store from './src/redux/store';


// Provider makes the Redux store available to any nested component
const WithProvider = ()=>(

    <Provider store={store}>
        <App/>
    </Provider>

)

AppRegistry.registerComponent(appName, () => WithProvider);
