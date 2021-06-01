/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Chat from './chat';
import Rooms from './rooms';
import Camera from './camera';


const TabNavigator = createMaterialTopTabNavigator(
  {
    채팅: {
      screen: Chat,
    },
    룸스: {
      screen: Rooms,
    },
    camera: {
      screen: Camera,
    }
  },

)

export default createAppContainer(TabNavigator);
