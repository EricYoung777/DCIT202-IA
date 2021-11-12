import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity,SafeAreaView } from 'react-native'

export default function Home({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '##d9b6b6',
        margin: 20,
      }}
    >
    <View>

    
    </View>
      <View
        style={{
          flexDirection: 'row',
          // width: '100%',
          justifyContent: 'space-evenly',
        }}
      >
        <View style={{ width: '48%' }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Cart')
            }}
            style={{
              backgroundColor: 'lightgreen',
              padding: 15,
              borderRadius: 20,
              margin: 4,
            }}
          >
            <Image
              fadeDuration={2000}
              style={styles.img1}
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

        <View style={{ width: '48%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgreen',
              padding: 15,
              borderRadius: 20,
              margin: 4,
            }}
          >
            <Image
              fadeDuration={2000}
              style={styles.img1}
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
      </View>
      <View>
      <TouchableOpacity>
        <Image
          fadeDuration={2000}
          style={styles.img1}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfA95yT7kYhg9h0gjpW8U8aN7Exo591hc3g&usqp=CAU',
          }}
        />
        <Text
          style={{
            // backgroundColor: 'black',
            color: 'red',
            paddingHorizontal: 10,
          }}
        >
          Price: $ 15000.00
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img1: {
    height: 250,
    width: '100%',
    borderRadius: 20,
  },
})

// import React, {useEffect, useState} from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';
// import { Product } from '../mycomponent/product.js';
// import { getProducts } from '../myservice/productservice.js';

// export function ProductsList({ navigation }) {
// function renderProduct({item: product}) {
//     return (
//       <product {...product}
//       onPress={() => {
//         navigation.navigate('ProductDetails', {
//           productId: product.id,
//         });
//       }}
//       />
//     );
//   }

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     setProducts(getProducts());
//   });

//   return (
//     <FlatList
//       style={styles.productsList}
//       contentContainerStyle={styles.productsListContainer}
//       keyExtractor={(item) => item.id.toString()}
//       data={products}
//       renderItem={renderProduct}
//     />
//   );
// }
// const styles = StyleSheet.create({
//   productsList: {
//     backgroundColor: '#eeeeee',
//   },
//   productsListContainer: {
//     backgroundColor: '#eeeeee',
//     paddingVertical: 8,
//     marginHorizontal: 8,
//   },
// });
