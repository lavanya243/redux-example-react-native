import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

export default function Header() {
  const cartData = useSelector(state => state.reducer);
  const [cartItems, setCartItems] = useState(0);
  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);
  return (
    <View>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 30,
          padding: 10,
          backgroundColor: 'pink',
        }}>
        {cartItems}
      </Text>
    </View>
  );
}
