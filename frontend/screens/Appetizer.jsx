import React from 'react';
import { View, Text, Image } from 'react-native'; 

const Appetizer = () => {
  return (
    <View>
       <Image 
        source={require("../assets/image/salmon-tataki.jpeg")}
        style={{width: 100, height: 100}}
        contentFit='cover'
        transition={1000}
       />
         <Text>Salmon Tataki</Text>
    </View>
  )
}

export default Appetizer;