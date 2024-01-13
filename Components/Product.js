import {View, Text, Image, Button} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart} from './redux/action';

export default function Product(props) {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const handleAddToCart = () => {
    console.warn('called', item);
    dispatch(addToCart(item));
  };

  useEffect(() => {
    if (cartItems && cartItems.length) {
      cartItems.forEach(element => {
        console.warn('-----------------', element);
      });
    }
  }, [cartItems]);
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
