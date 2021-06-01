
import React,{useState} from 'react';
import { StyleSheet,Text, View,ScrollView, TextInput,Button, Alert} from 'react-native';
import ChatItem from './chatItem';
import { RNCamera } from 'react-native-camera';
import { NavigationContainer } from '@react-navigation/native';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

const chat = () => {
    
    const [camera, setCamera] = useState([]);
    function onPressLearnMore() {
        console.log("aaa");
        return (
            <RNCamera
            style={{width: 200, height: 200}}
            type={RNCamera.Constants.Type.back}
            captureAudio={false}
            />
        )
    }
    var showCamera :Boolean= false;
    function showCameraButton() {
        
        showCamera = true
     };
      return (
        <>
            <ScrollView contentContainerStyle={styles.listContainer}>
              <TextInput style={styles.input}></TextInput>
              <ChatItem></ChatItem>
              </ScrollView>
              <Button
                onPress={() => console.log("?")}
                title="카메라"
                color="#841584"
              />
              
        </>
    );
  };

const styles = StyleSheet.create({
  listContainer: {
    alignItems: 'center',
  },
  input: {
    width:'80%',
    height: 40,
    margin: 12,
    borderWidth: 1,
    },
    camera: {
        width: '100%',
        height: 40,
        margin: 12,
        borderWidth: 1,
    }
});

  export default chat;