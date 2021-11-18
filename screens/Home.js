import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity,SafeAreaView, TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Home({ navigation }) {
  return (

   <View  style={{backgroundColor: '#dfdfdf',}}>

   {/* outer view for top of screen */}
    <View  style={styles.top} >
      <View>
        <Text   style={{color: '#05051f', fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>You are Welcome to</Text>
        <Text   style={{color: '#1919e0', fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}> GloryLife Suits</Text>
      </View>
       <AntDesign name="shoppingcart" size={24} color="blue" />
    </View>  {/* closing view tag for top of screen */}

    {/* View for search bar */}
    {/* <View style={{height: 50, backgroundColor: 'white', borderRadius: 10, flex: 2, flexDirection: 'row', alignItems: 'center'}}>
      <View>
        <AntDesign name="search1" size={25} style={{marginLeft: 20}} />
        <TextInput placeholder= "search"/>
     </View>
    </View> */}


     <View style={{ flex: 1, }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        {/* first image here with its own view and style */}

        <View style={{ width: '48%'}}>
          <TouchableOpacity style={styles.img1}>
            <Image
              fadeDuration={2000}
              style={styles.img}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1598915850252-fb07ad1e6768?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',}}/>
             </TouchableOpacity> 
            <View style={{ alignItems: 'center'}}>
              <Text style={{color: '#1a1201', fontSize: 15, fontWeight: 'bold'}}> BROWN SUIT</Text>
              <Text style={{ color: 'blue', fontSize: 17}}> Price: $ 5000.00 </Text>
              <Text  style={{color: 'black', fontSize:16, fontWeight: 'bold', fontStyle: 'Italic'}}>  Sizes:</Text>
              <Text  style={{color: '#c2080b', fontSize: 15, fontWeight: 'bold'}}> Small(S) </Text>
              <Text  style={{color: '#ada009', fontSize: 15, fontWeight: 'bold'}}> Medium(M)</Text>
              <Text  style={{color: '#05e30c', fontSize: 15, fontWeight: 'bold'}}> Large(L) </Text>
              <TouchableOpacity fadeDuration={2000} style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'}}
                 //  navigation to the cart screen
                 onPress={() => {navigation.navigate('Cart')}}> Buy </TouchableOpacity>
            </View>
        </View>
         {/* first image ends here */}



            {/* second image begins here with its own style and view */}

        <View style={{ width: '48%' }}>
          <TouchableOpacity style={styles.img2}>
            <Image
              fadeDuration={2000}
              style={styles.img}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1546572797-e8c933a75a1f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',}}/>
          </TouchableOpacity>

              <View style={{ alignItems: 'center'}}>
                <Text style={{color: '#1a1201', fontSize: 15, fontWeight: 'bold'}}> BLACK SUIT</Text>
                <Text style={{ color: 'blue', fontSize: 17}}> Price: $ 20000.00 </Text>
                <Text  style={{color: 'black', fontSize:16, fontWeight: 'bold', fontStyle: 'Italic'}}>  Sizes:</Text>
                <Text  style={{color: '#c2080b', fontSize: 15, fontWeight: 'bold'}}> Small(S) </Text>
                <Text  style={{color: '#ada009', fontSize: 15, fontWeight: 'bold'}}> Medium(M)</Text>
                <Text  style={{color: '#05e30c', fontSize: 15, fontWeight: 'bold'}}> Large(L) </Text>
              <TouchableOpacity fadeDuration={2000} style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'}}
                 //  navigation to the cart screen
                 onPress={() => {navigation.navigate('Cart')}}> Buy </TouchableOpacity>
            </View>

        </View> 
         {/* second image ends here */}
      </View>





       {/* third-1 image begins here with its own style and view */}

      <View>
      <TouchableOpacity
            style={styles.img3}>
              <Image fadeDuration={2000}  style={styles.img}
             source={{ uri: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',}}/>  
      </TouchableOpacity>
      <TouchableOpacity fadeDuration={2000} style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'}}
                 //  navigation to the cart screen
                 onPress={() => {navigation.navigate('Cart')}}> Buy </TouchableOpacity>
      </View>
      {/* third-1 image ends here */}







      {/* third-2 image begins here with its own style and view */}

      <View>
        <TouchableOpacity
          style={styles.img3}>
          <Image fadeDuration={2000}  style={styles.img}
          source={{ uri: 'https://media.istockphoto.com/photos/photo-of-beautiful-dark-skin-business-lady-holding-hands-crossed-picture-id1202762672?b=1&k=20&m=1202762672&s=170667a&w=0&h=bW168dA_JWJLfIC2vp0pHsbshig9pSPwXyfh9770gPM=',}}/>
        </TouchableOpacity>
      <View>
      <TouchableOpacity fadeDuration={2000} style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'}}
                 //  navigation to the cart screen
                 onPress={() => {navigation.navigate('Cart')}}> Buy </TouchableOpacity>
                 </View>
      </View> 
      
      {/* third-2 image ends here */}






           {/* outer view tag for image 4  and 5 */}
      <View  style={{ flexDirection: 'row', justifyContent: 'space-evenly',}}>

        {/* fourth image begins here */}
       <View style={{ width: '48%' }}>
          <TouchableOpacity style={styles.img1}>
            <Image
              fadeDuration={2000}
              style={styles.img}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1593032527598-55649fe534ac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGZlbWFsZXMlMjBpbiUyMHN1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',}}/>
         

            <View style={{ alignItems: 'center'}}>

              <Text style={{color: '#1a1201', fontSize: 15, fontWeight: 'bold', paddingTop: 15}}> WORK SUIT</Text>
              <Text style={{ color: 'blue', fontSize: 17}}> Price: $ 60000.00 </Text>
              <Text  style={{color: 'black', fontSize:16, fontWeight: 'bold', fontStyle: 'Italic'}}>  Sizes:</Text>
              <Text  style={{color: '#c2080b', fontSize: 15, fontWeight: 'bold'}}> Small(S) </Text>
              <Text  style={{color: '#ada009', fontSize: 15, fontWeight: 'bold'}}> Medium(M)</Text>
              <Text  style={{color: '#05e30c', fontSize: 15, fontWeight: 'bold'}}> Large(L) </Text>
              <TouchableOpacity fadeDuration={2000} style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'}}
                 //  navigation to the cart screen
                 onPress={() => {navigation.navigate('Cart')}}> Buy </TouchableOpacity>
            </View>
          </TouchableOpacity> 
        </View>
         {/* fouth image ends here */}





          {/* fifth image begins here */}

       <View style={{ width: '48%' }}>
          <TouchableOpacity 
               style={styles.img1}>
                 
              <Image fadeDuration={2000} style={styles.img}
                  source={{ uri: 'https://media.istockphoto.com/photos/happy-smiling-african-american-woman-in-formal-business-attire-picture-id1153955734?b=1&k=20&m=1153955734&s=170667a&w=0&h=ct5L1Htgwu79KXj36bV6w130NocixJTojleYohse8IU=',}} />
              
           </TouchableOpacity> 
           <View style={{ alignItems: 'center'}}>
              <Text style={{color: '#1a1201', fontSize: 15, fontWeight: 'bold'}}> WORK SUIT</Text>
              <Text style={{ color: 'blue', fontSize: 17}}> Price: $ 10000.00 </Text>
              <Text  style={{color: 'black', fontSize:16, fontWeight: 'bold', fontStyle: 'Italic'}}>  Sizes:</Text>
              <Text  style={{color: '#c2080b', fontSize: 15, fontWeight: 'bold'}}> Small(S) </Text>
              <Text  style={{color: '#ada009', fontSize: 15, fontWeight: 'bold'}}> Medium(M)</Text>
              <Text  style={{color: '#05e30c', fontSize: 15, fontWeight: 'bold'}}> Large(L) </Text>
              <TouchableOpacity fadeDuration={2000} style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'}}
                 //  navigation to the cart screen
                 onPress={() => {navigation.navigate('Cart')}}> Buy </TouchableOpacity>
            </View>
        </View>
        {/* fifth image ends here */}

      </View>  {/* closing view tag for image 4 and 5 */} 


      {/* outer view tag for image 6  and 7 */}
      <View  style={{ flexDirection: 'row', justifyContent: 'space-evenly',}}>




        {/* sixth image begins here */}
       <View style={{ width: '48%' }}>
          <TouchableOpacity style={styles.img1}>
             <Image
              fadeDuration={2000}
              style={styles.img}
              source={{
                uri:
                  'https://media.istockphoto.com/photos/photo-of-beautiful-dark-skin-business-lady-holding-hands-crossed-picture-id1202762672?b=1&k=20&m=1202762672&s=170667a&w=0&h=bW168dA_JWJLfIC2vp0pHsbshig9pSPwXyfh9770gPM=',}}/>
           
          </TouchableOpacity> 

          <View style={{ alignItems: 'center'}}>
              <Text style={{color: '#1a1201', fontSize: 15, fontWeight: 'bold'}}> THE LADY'S SUIT</Text>
              <Text style={{ color: 'blue', fontSize: 17}}> Price: $ 9000.00 </Text>
              <Text  style={{color: 'black', fontSize:16, fontWeight: 'bold', fontStyle: 'Italic'}}>  Sizes:</Text>
              <Text  style={{color: '#c2080b', fontSize: 15, fontWeight: 'bold'}}> Small(S) </Text>
              <Text  style={{color: '#ada009', fontSize: 15, fontWeight: 'bold'}}> Medium(M)</Text>
              <Text  style={{color: '#05e30c', fontSize: 15, fontWeight: 'bold'}}> Large(L) </Text>
              <TouchableOpacity fadeDuration={2000} style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'}}
                 //  navigation to the cart screen
                 onPress={() => {navigation.navigate('Cart')}}> Buy </TouchableOpacity>
            </View>
        </View>
         {/* sixth image ends here */}


          {/* seventh image begins here */}
       <View style={{ width: '48%' }}>
          <TouchableOpacity style={styles.img1}>
                 <Image fadeDuration={2000} style={styles.img}
                  source={{ uri: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHN1aXRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',}} />
           </TouchableOpacity>
           <View style={{ alignItems: 'center'}}>
              <Text style={{color: '#1a1201', fontSize: 15, fontWeight: 'bold'}}> THE SUIT</Text>
              <Text style={{ color: 'blue', fontSize: 17}}> Price: $ 120000.00 </Text>
              <Text  style={{color: 'black', fontSize:16, fontWeight: 'bold', fontStyle: 'Italic'}}>  Sizes:</Text>
              <Text  style={{color: '#c2080b', fontSize: 15, fontWeight: 'bold'}}> Small(S) </Text>
              <Text  style={{color: '#ada009', fontSize: 15, fontWeight: 'bold'}}> Medium(M)</Text>
              <Text  style={{color: '#05e30c', fontSize: 15, fontWeight: 'bold'}}> Large(L) </Text>
              <TouchableOpacity fadeDuration={2000} style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: 20,
                marginTop: 20,
                paddingHorizontal: 40,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center'}}
                 //  navigation to the cart screen
                 onPress={() => {navigation.navigate('Cart')}}> Buy </TouchableOpacity>
            </View> 
        </View>
        {/* seventh image ends here */}
      </View>  
      {/* closing view tag for image 6 and 7 */} 
 
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  top:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  img:{
    height: 250,
    width: '100%',
    borderRadius: 20,
  },
  img1:{
    
    padding: 15,
    borderRadius: 20,
    margin: 4,
  },
  img2:{
   
    padding: 15,
    borderRadius: 20,
  },
  img3:{
    padding: 15,
    borderRadius: 20,
   
  },

})
