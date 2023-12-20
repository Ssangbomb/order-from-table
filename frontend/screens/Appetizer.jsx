import React, { useState } from 'react';
import { View, Text, Image } from 'react-native'; 

const IMAGES = {
  image1: require('../assets/image/edamame.jpeg'),
  image2: require('../assets/image/ebi-sunomono.jpeg'),
  image3: require('../assets/image/yam-fries.jpeg'),
  image4: require('../assets/image/tuna-tataki.jpeg'),
  image5: require('../assets/image/salmon-tataki.jpeg'),
}

const Appetizer = () => {
  const [ images, setImages ] = usestate([
    { id: '1', image: IMAGES.image1 },
    { id: '2', image: IMAGES.image2 },
    { id: '3', image: IMAGES.image3 },
    { id: '4', image: IMAGES.image4 },
    { id: '5', image: IMAGES.image5 },
  ])
  return (
    <View style={{}}>

         <Text>Salmon Tataki</Text>
    </View>
  )
}

export default Appetizer;