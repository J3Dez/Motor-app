import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BlogCard = ( { onPress } ) => {
  return (
    <View style={cardStyles.card}>
      <Text style={cardStyles.title}>R1 RACE</Text>
      <Image
        source={{
          uri: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"}}
        style={cardStyles.image}
      />
      <Text style={cardStyles.description} numberOfLines={5}>
        La R1 est une icône. Éprouvée sur piste, elle a remporté...
      </Text>
      <TouchableOpacity style={cardStyles.btn}
        onPress={onPress}      >
        <Text style={cardStyles.btnText}>Meer informatie</Text>
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
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  price: {
    textAlign: 'right',
    paddingRight: 10,
    paddingBottom: 10,
    fontSize: 18,
    fontWeight: '600'
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

export default BlogCard;