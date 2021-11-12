import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native'

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.msg}> Welcome to GloryLife</Text>
      <TouchableOpacity style={{ marginBottom: 10 }}>
        <Text style={{ color: 'grey', fontWeight: 'italic', fontSize: 15 }}>
          Dress up for the Work{' '}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          fadeDuration={2000}
          style={styles.img}
          source={{
            uri:
              'https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3VpdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          width: '70%',
          alignItems: 'center',
          paddingVertical: 10,
          borderRadius: 20,
          marginTop: 20,
        }}
        onPress={() => {
          navigation.navigate('Login')
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: '400' }}>Let's Begin</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },

  img: {
    // flex: 2,
    height: 350,
    width: 250,
    //  transform: [{rotate:"3deg"}],
    //  padding: 20,
    marginTop: 5,
    borderRadius: 30,
    marginBottom: 10,
  },
  msg: {
    color: 'black',
    fontWeight: 25,
    fontWeight: 25,
    alignItems: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
})
