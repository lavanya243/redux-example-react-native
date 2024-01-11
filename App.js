import {View, Text, StyleSheet, Image, ScrollView, Button} from 'react-native';
import React from 'react';
import Header from './Components/Header';
import Product from './Components/Product';

export default function App() {
  const products = [
    {
      name: 'Samsung',
      color: 'Black',
      price: 45000,
      image:
        'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Plus/Pink/Apple-iPhone-15-Plus-Pink-thumbnail.png',
    },
    {
      name: 'Samsung',
      color: 'White',
      price: 45000,
      image:
        'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Plus/Pink/Apple-iPhone-15-Plus-Pink-thumbnail.png',
    },
    {
      name: 'Poco',
      color: 'Black',
      price: 4500,
      image:
        'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Plus/Pink/Apple-iPhone-15-Plus-Pink-thumbnail.png',
    },
    {
      name: 'Vivo',
      color: 'Black',
      price: 15000,
      image:
        'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Plus/Pink/Apple-iPhone-15-Plus-Pink-thumbnail.png',
    },
    {
      name: 'iPhone',
      color: 'Pink',
      price: 100000,
      image:
        'https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-15-Plus/Pink/Apple-iPhone-15-Plus-Pink-thumbnail.png',
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
