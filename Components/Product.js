import {View, Text, Image, Button} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {addToCart} from './redux/Action';

export default function Product(props) {
  const item = props.item;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.warn('called', item);
    dispatch(addToCart(item));
  };
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
      <Image
        style={{width: 200, height: 200, marginBottom: 10}}
        source={{uri: item.image}}
      />
      <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
    </View>
  );
}
