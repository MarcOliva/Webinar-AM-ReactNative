/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';


import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DetailFood from './src/views/DetailFood';
import Home from './src/views/Home';
import images from './src/utils/images';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ScreenDrawer = ({ route, navigation }) => {
  return (
    <Stack.Navigator screenOptions={{
      headerLeft: () => <TouchableOpacity style={{ paddingHorizontal: 15 }}
        onPress={() => navigation.openDrawer()}>
        <Image source={images.menu} style={{ width: 30, height: 30, resizeMode: 'contain' }}></Image>
      </TouchableOpacity>,
      headerTitle: () => null,
      headerRight: () => <TouchableOpacity style={{
        paddingHorizontal: 15,
        alignItems: 'center'
      }}>
        <Image source={images.cesta} style={{ width: 30, height: 30, resizeMode: 'contain' }}></Image>
        <Text style={{ fontSize: 13 }}>My basket</Text>
      </TouchableOpacity>,
      headerTransparent: true
    }}>
      <Stack.Screen name="Home">{props => <Home {...props} />}</Stack.Screen>
    </Stack.Navigator>
  )
}
const DrawerNavigator = () => {
  return <Drawer.Navigator>
    <Drawer.Screen name="Home">
      {props => <ScreenDrawer {...props} />}
    </Drawer.Screen>
  </Drawer.Navigator>
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  >
        <Stack.Screen name="Home" component={DrawerNavigator} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name="DetailFood" component={DetailFood} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
