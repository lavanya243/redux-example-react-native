import {View, Text} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View>
      <Text
        style={{
          textAlign: 'right',
          fontSize: 30,
          padding: 10,
          backgroundColor: 'pink',
        }}>
        Header
      </Text>
    </View>
  );
}
