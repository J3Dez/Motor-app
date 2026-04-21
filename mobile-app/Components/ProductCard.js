import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ title, description, image, price, onPress }) => {
  return (
    <View style={cardStyles.card}>
      <Image source={image} style={cardStyles.image}/>
      <View style={cardStyles.headerRow}>
        <Text style={cardStyles.title}>{title}</Text>
        <Text style={cardStyles.price}>€{price}</Text>
      </View>
      <Text style={cardStyles.description} numberOfLines={5}>{description}</Text>
      <TouchableOpacity
        style={cardStyles.btn}
        onPress={onPress}      >
        <Text style={cardStyles.btnText}>Koop nu</Text>
      </TouchableOpacity>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  card: {
    width: 'auto',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  price: {
    paddingRight: 10,
    fontSize: 20,
    fontWeight: '600'
  },
  headerRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 10,
  paddingBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  description: {
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#5305ba',
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
  },
});

export default ProductCard;