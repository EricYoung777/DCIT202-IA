import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'

const imgbd: source={uri: 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VpdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'};

export default function thankyou() {
    return(
        <ImageBackground style={{flex: 1}} source={imgbd}>
            <View style={{alignItems: 'center', justifyContent: 'center', flex: 1, marginLeft: 40}}>
               <TouchableOpacity>
                    <Text style={{color: '#edf5ef', fontSize: 30, fontWeight: 'Bold' }}>THANK YOU FOR SHOPPING WITH US</Text>
                    <Text style={{color: '#c46231', fontSize: 30, fontWeight: 'Bold'   }}>WE WOULD LOVE TO SEE YOU AGAIN</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}