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
 import {useTheme} from 'react-native-paper';
 import {
   StyleSheet,
  Text,
   useColorScheme,
   View,
 } from 'react-native';
 import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();



 const myHeader = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const theme = useTheme()


   return (
       <View style={[styles.topBar, {backgroundColor: theme.colors.placeholder}]}><Text>instagram</Text><Icon name="home"></Icon></View>
   );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   topBar: {
     flexDirection: 'row',
     padding: 5
   }
 });

 export default myHeader;
