import {View, Text, Image, Button} from 'react-native';
import React from 'react';

export default function Product(props) {
  const item = props.item;
  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
      }}>
      <Text style={{fontSize: 24, margin: 4}}>{item.name}</Text>
      <Text style={{fontSize: 24, margin: 4}}>{item.price}</Text>
      <Text style={{fontSize: 24, margin: 4}}>{item.color}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      <Button title="Add to cart" />
    </View>
  );
}
