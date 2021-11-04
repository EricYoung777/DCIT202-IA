import React,{useState} from 'react';
import {
    View, 
    Text, 
    Button,
    StyleSheet,
    SafeAreaView,  
    Image,
   TextInput, 
   TouchableOpacity,
  } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Login({navigation}){

        const [Username, onChangeUsername] = React.useState(null);
        const [password, onChangepassword] = React.useState(null);
        const [email, setemail] = React.useState(null);


    return(

       
       <View style={styles.lg}>
        <Text
        style={styles.signup}>SIGN IN</Text>

        <TextInput 
        style={styles.username}
        placeholder={'UserName'}
        onChangeText={onChangeUsername}
        // keyboardType="default"
        // textContentType="username"
        />

        <TextInput 
        style={styles.password}
        placeholder={'Password'}
        onChangeText={onChangepassword}
        />

        <Button
                 onPress={()=>{navigation.navigate('Home')}}
                    title= "Login"
                    color= "#cf0c2d"/>






        <Text style={{color: "red", fontSize: 15,}}>OR{'\n'}</Text>

        <TouchableOpacity
        style={{
                backgroundColor: "#5257e3",
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: "row",
                alignItems:"center",
             }}
            onPress= {()=> {navigation.navigate("Home")}}
          >
               <AntDesign name="google" size={24} color="white" />
            <Text  style={{ fontSize: 15, color: "#050508f", marginLeft: 15 }}>SignIn with Gmail</Text>
         </TouchableOpacity>

        <TouchableOpacity
         style={{
                backgroundColor: "#070708",
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: "row",
                alignItems:"center",
                
            }}

            onPress= {()=> {navigation.navigate("Home")}}
        
            >
              <AntDesign name="apple1" size={24} color="white" />
              <Text  style={{color: "#c8c9cf",  fontSize: 15, marginLeft: 15}}>SignUp with Apple</Text>
        </TouchableOpacity>

 


       </View>
    );
}

const styles = StyleSheet.create({
    lg:{
        backgroundColor: "#db8f8f",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,

    },
    signup:{
             alignItems: "center",
            justifyContent: "center",
            color: "#d41313",
            fontSize: 30,
            fontWeight: "bold",
    },
    username: {
            borderRadius: 20,
            paddingHorizontal: 40, 
            height: 35,
            color: "black",
            backgroundColor: "white",
            justifyContent:"center",
            textAlign:"center",
            fontWeight: "bold"
            },

            password: {
            borderRadius: 20,
            paddingHorizontal: 40, 
            height: 35,
            color: "black",
            backgroundColor: "white",
            justifyContent:"center",
            textAlign:"center",
            fontWeight: "bold",
            margin: 20,
            }   
    



});