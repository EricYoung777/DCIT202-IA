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
          Suit up for the Work{' '}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          fadeDuration={2000}
          style={styles.img}
          source={{
            uri:
              'https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=',
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
