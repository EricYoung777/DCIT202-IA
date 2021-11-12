import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native'

export default function Home({ navigation }) {
  return (

    <View  style={{backgroundColor: 'white',}}>
    <View
      style={{
        flex: 1,
        // margin: 20,
      }}
    >
      <View>

      </View>

    
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        {/* first image here with its own view and style */}

        <View style={{ width: '48%' }}>
          <TouchableOpacity
           style={styles.img1}
          //  navigation to the cart screen
            onPress={() => {
              navigation.navigate('Cart')
            }}
          >
            <Image
              fadeDuration={2000}
              style={styles.img}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJtBoOJZukde1b6NKbPQhXkugBWIBC8d79A&usqp=CAU',
              }}
            />
            <Text
              style={{
                // backgroundColor: 'black',
                color: 'blue',
                paddingHorizontal: 10,
              }}
            >
              Price: $ 5000.00
            </Text>
          </TouchableOpacity> 
        </View>
         {/* first image ends here */}



            {/* second image begins here with its own style and view */}

        <View style={{ width: '48%' }}>
          <TouchableOpacity
           style={styles.img2}
          onPress={() => {
              navigation.navigate('Cart')
            }}
           
          >
            <Image
              fadeDuration={2000}
              style={styles.img}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZnFc7S5LDTeDa1XcZ1YLnXds9JeHXs8IbQ&usqp=CAU',
              }}
            />
            <Text
              style={{
                // backgroundColor: 'black',
                color: 'black',
                paddingHorizontal: 10,
              }}
            >
              Price: $ 3000.00
            </Text>
          </TouchableOpacity>
        </View> 
         {/* second image ends here */}
      </View>

       {/* third image begins here with its own style and view */}
      <View>
      <TouchableOpacity
       style={styles.img3}
      onPress={() => {
              navigation.navigate('Cart')
            }}
      >
        <Image
          fadeDuration={2000}
          style={styles.img}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfA95yT7kYhg9h0gjpW8U8aN7Exo591hc3g&usqp=CAU',
          }}
        />
        <Text
          style={{
            // backgroundColor: 'black',
            color: 'white',
            paddingHorizontal: 10,
          }}
        >
          Price: $ 15000.00
        </Text>
      </TouchableOpacity>
      </View>

       
        <View 
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }} >    {/* outer view tag for image 4  and 5 */}

        {/* fourth image begins here */}
       <View style={{ width: '48%' }}>
          <TouchableOpacity
           style={styles.img1}
          //  navigation to the cart screen
            onPress={() => {
              navigation.navigate('Cart')
            }}
          >
            <Image
              fadeDuration={2000}
              style={styles.img}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJtBoOJZukde1b6NKbPQhXkugBWIBC8d79A&usqp=CAU',
              }}
            />
            <Text
              style={{
                // backgroundColor: 'black',
              color: 'blue',
                paddingHorizontal: 10,
              }}
            >
              Price: $ 5000.00
            </Text>
          </TouchableOpacity> 
        </View>
         {/* fouth image ends here */}


          {/* fifth image begins here */}
       <View style={{ width: '48%' }}>
          <TouchableOpacity
           style={styles.img1}
          //  navigation to the cart screen
            onPress={() => {
              navigation.navigate('Cart')
            }}
          >
            <Image
              fadeDuration={2000}
              style={styles.img}
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJtBoOJZukde1b6NKbPQhXkugBWIBC8d79A&usqp=CAU',
              }}
            />
            <Text
              style={{
                // backgroundColor: 'black',
              color: 'blue',
                paddingHorizontal: 10,
              }}
            >
              Price: $ 5000.00
            </Text>
          </TouchableOpacity> 

        </View> {/* fifth image ends here */}
        
        </View>  {/* closing view tag for image 4 and 5 */}
        
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 250,
    width: '100%',
    borderRadius: 20,
  },
  img1:{
    backgroundColor: 'lightgreen',
    padding: 15,
    borderRadius: 20,
    margin: 4,


  },
  img2: {
    backgroundColor: 'lightblue',
    padding: 15,
    borderRadius: 20,
    margin: 4,


  },
  img3: {
    backgroundColor: '#55edde',
    padding: 15,
    borderRadius: 20,
    margin: 4,

  },

})
