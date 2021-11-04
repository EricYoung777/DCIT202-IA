import React from 'react';
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native';


export default function Welcome({navigation}){
    
    return(
      <View style={styles.container}>       
        <Text style={styles.msg}>WELCOME TO GLORY LIFE  </Text>
         <TouchableOpacity>
          <Text style={{color: "#3fe5e8",fontWeight: "italic", fontSize: 15}}
                     >DRESS-UP-FOR-THE-WORK </Text>
             </TouchableOpacity>
             <TouchableOpacity>
            <Image
              fadeDuration={2000}
              style={styles.img}
                source=
                {{uri: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VpdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60" }} />
               </TouchableOpacity>
               <Button
                 onPress={()=>{navigation.navigate('Login')}}
                    title= "Let's begin to Shop"
                    color= "#cf0c2d"/>

    </View>
    );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    backgroundColor: '#03071c',
    alignItems: 'center',
    justifyContent: '',
  },

  img:{
        // flex: 2,
        height: 350,
        width: 250,
        //  transform: [{rotate:"3deg"}],
        //  padding: 20,
         marginTop: 5,
         borderRadius: 30,
         marginBottom: 10,
        
  },
  msg:{
    color: "blue",
    fontWeight: 25,
    fontWeight: 25,
    alignItems:"center",
    fontSize: 30,
    
    

  }
});