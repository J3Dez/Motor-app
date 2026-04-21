import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const BlogCard = ( {onPress} ) => {
  return (
    <View style={cardStyles.card}>
      <Text style={cardStyles.title}>R1 RACE</Text>
      <Image
        source={{
          uri: "https://cdn2.yamaha-motor.eu/prod/product-assets/2025/YZF1000R1COMP/2025-Yamaha-YZF1000R1COMP-EU-Tech_Black-360-Degrees-001-03.jpg"
        }}
        style={cardStyles.image}
      />
      <Text style={cardStyles.description} numberOfLines={5}>
        La R1 est une icône. Éprouvée sur piste, elle a remporté au cours des dix dernières années un championnat du monde SBK, deux titres de champion du monde d’endurance et de nombreux championnats nationaux. Inspirée par la YZR-M1 de MotoGP, la R1 RACE atteint des niveaux encore plus élevés de performances sur piste grâce à de nouvelles ailettes aérodynamiques, une suspension améliorée et un système de freinage Brembo.
      </Text>

      <TouchableOpacity
        style={cardStyles.btn}
        onPress={() =>
          navigation.navigate("Product", {
            title: "R1 RACE",
            description:
              "La R1 est une icône. Éprouvée sur piste, elle a remporté au cours des dix dernières années un championnat du monde SBK, deux titres de champion du monde d’endurance et de nombreux championnats nationaux. Inspirée par la YZR-M1 de MotoGP, la R1 RACE atteint des niveaux encore plus élevés de performances sur piste grâce à de nouvelles ailettes aérodynamiques, une suspension améliorée et un système de freinage Brembo.",
            price: "20999",
            image: {
              uri: "https://cdn2.yamaha-motor.eu/prod/product-assets/2025/YZF1000R1COMP/2025-Yamaha-YZF1000R1COMP-EU-Tech_Black-360-Degrees-001-03.jpg"
            }
          })
        }
      >
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