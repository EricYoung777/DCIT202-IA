import React, { useState } from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const imgbg: source={uri: 'https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29uJTIwaW4lMjBzdWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' };

export default function Login({ navigation }) {
  const [Username, onChangeUsername] = React.useState(null)
  const [password, onChangepassword] = React.useState(null)
  const [email, setemail] = React.useState(null)

  return (
    <ImageBackground style= {{flex: 1}}source ={imgbg}>
     <View style={styles.lg}>
     
      <Text style={styles.signin}>Sign In</Text>

      <TextInput
        style={styles.username}
        placeholder={'UserName'}
        onChangeText={onChangeUsername}
      />

      <TextInput
        style={styles.password}
        placeholder={'Password'}
        onChangeText={onChangepassword}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          width: '60%',
          alignItems: 'center',
          paddingVertical: 10,
          borderRadius: 20,
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: '400',
          }}
        >
          Login
        </Text>
      </TouchableOpacity>

      <Text style={{ color: 'white', fontSize: 14, marginTop: 10 }}>
        -OR-{'\n'}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#5257e3',
          borderRadius: 20,
          marginTop: 20,
          paddingHorizontal: 40,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <AntDesign name="google" size={24} color="white" />
        <Text style={{ fontSize: 15, color: '#050508f', marginLeft: 15 }}>
          SignIn with Gmail
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#070708',
          borderRadius: 20,
          marginTop: 20,
          paddingHorizontal: 32,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <AntDesign name="apple1" size={24} color="white" />
        <Text style={{ color: '#6b56ba', fontSize: 15, marginLeft: 15 }}>
          SignIn with Apple
        </Text>
      </TouchableOpacity>
    </View>
   </ImageBackground>
  )
}

const styles = StyleSheet.create({
  lg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  signin: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  username: {
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 35,
    color: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },

  password: {
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 35,
    color: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    fontWeight: 'bold',
    margin: 20,
    fontSize: 16,
  },
})
