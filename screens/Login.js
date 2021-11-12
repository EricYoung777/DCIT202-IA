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
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Login({ navigation }) {
  const [Username, onChangeUsername] = React.useState(null)
  const [password, onChangepassword] = React.useState(null)
  const [email, setemail] = React.useState(null)

  return (
    <View style={styles.lg}>
      <Text style={styles.signup}>Sign In</Text>

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

      <Text style={{ color: 'black', fontSize: 14, marginTop: 10 }}>
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
        <Text style={{ color: '#c8c9cf', fontSize: 15, marginLeft: 15 }}>
          SignUp with Apple
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  lg: {
    backgroundColor: '#edeff2',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  signup: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
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
