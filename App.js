import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import Welcome from "./screens/Welcome";
import Login from "./screens/Login";
import Home from "./screens/Home";


export default function App() {
  const Navigation =createNativeStackNavigator();
  return (
    <View style={{flex:1}}>
        <NavigationContainer>
          <Navigation.Navigator>
            <Navigation.Screen name="Welcome" component={Welcome}/>
            <Navigation.Screen name="Login" component={Login}/>
            <Navigation.Screen name="Home" component={Home}/>
          </Navigation.Navigator>
        </NavigationContainer>
     <StatusBar style="auto" />
    </View>
  );
}


