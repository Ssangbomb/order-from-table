import React, { useState } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'; 

const IMAGES = {
  image1: require('../assets/image/edamame.jpeg'),
  image2: require('../assets/image/ebi-sunomono.jpeg'),
  image3: require('../assets/image/yam-fries.jpeg'),
  image4: require('../assets/image/tuna-tataki.jpeg'),
  image5: require('../assets/image/salmon-tataki.jpeg'),
}

const Item = ({image, title}) => (
  <View>
    <Image 
      style={{
        width: 200,
        height: 200,
        borderRadius: 20
      }}
      source={image}/>
    <Text>{title}</Text>
  </View>
);

const Appetizer = () => {
  const [ images, setImages ] = useState([
    { id: '1', title: 'edamame', image: IMAGES.image1 },
    { id: '2', title: 'ebi sunomono', image: IMAGES.image2 },
    { id: '3', title: 'yam fries', image: IMAGES.image3 },
    { id: '4', title: 'tuna tataki',image: IMAGES.image4 },
    { id: '5', title: 'salmon tataki', image: IMAGES.image5 },
  ]) 
  return (
    <View style={styles.container}>
      <FlatList 
        data={images}
        renderItem={({item}) => <Item image={item.image} title={item.title}/>}
        keyExtractor={item => item.id}
        horizontal
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  }
})

export default Appetizer;