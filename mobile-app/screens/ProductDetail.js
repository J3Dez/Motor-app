import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProductDetailScreen = ({ route }) => {
  const { title, description, image } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
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
  }
});

export default ProductDetailScreen;
