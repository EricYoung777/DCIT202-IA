import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity,ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const imgbgd: source={uri: 'https://images.unsplash.com/photo-1548783300-70b41bc84f56?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c3VpdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'};
export default function Cart({navigation}) {

  const [Name, onChangeName] = React.useState(null)
  const [Location, onChangeLocation] = React.useState(null)
  const [email, setemail] = React.useState(null)


  return (

    <ImageBackground style={{flex: 1}} source= {imgbgd}>
    <View style={{justifyContent:'center', alignItems: 'center', flex: 1}}>
      


       <TextInput
        style={styles.all}
        placeholder={'Name'}
        onChangeText={onChangeName}
      />

      <TextInput
        style={styles.all}
        placeholder={' Tell us Your Location'}
        onChangeText={onChangeLocation}
         />

         <TextInput
        style={styles.all}
        placeholder={' Email'}
        onChangeText={setemail}
         />
         

          <TouchableOpacity
        style={{
          backgroundColor: 'black',
          borderRadius: 20,
          marginTop: 20,
          paddingHorizontal: 32,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',

        }}
        onPress={() => {
          navigation.navigate('ThankYou')
        }}
      >
         <AntDesign name="shoppingcart" size={20} color="black" />
        <Text style={{ color: 'white', fontSize: 17, marginLeft: 20 }}>
         Complete Your Order-CheckOut
        </Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
      
   
  )
}

const styles= StyleSheet.create({
  all:{
    borderTopLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    height: 40,
    color: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
  }

})