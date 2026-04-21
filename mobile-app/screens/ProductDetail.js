import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const ProductDetailScreen = ({ route }) => {
  const { title, description, image, price, onPress } = route.params;

  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => setQuantity(quantity + 1);
        const decreaseQuantity = () => {
            if (quantity > 1) {
                setQuantity(quantity - 1);
            }
        };

  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
      
    {/* plus min button */}
      <View style={styles.QuantityContainer}>
          <TouchableOpacity style={styles.buttonMi} onPress={decreaseQuantity}>
              <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.totalPrice}>
            Aantal: {quantity} - Totale prijs: €{(price * quantity).toFixed(2)}</Text>
          <TouchableOpacity style={styles.buttonMa} onPress={increaseQuantity}>
              <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10
  },
  description: {
    fontSize: 16,
    marginTop: 10
  },

  QuantityContainer: {
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: 10,
  borderRadius: 5,
  marginTop: 20,
},

  buttonMi: {
  width: 40,
  height: 40,
  backgroundColor:'#249CED',
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 5,
},

  buttonMa: {
  width: 40,
  height: 40,
  backgroundColor:'#ed2724',
  alignItems:'center',
  justifyContent:'center',
  borderRadius: 5,
},

  buttonText: {
  fontSize: 22,
  fontWeight:'bold',
  color: 'white',
}
});

export default ProductDetailScreen;
