import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import ProductCard from '../Components/ProductCard';
import NavBar from '../Components/Nav';

//import for the icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text>Thit is the Product pages</Text>
      <ScrollView>
        <ProductCard 
        onPress={() =>
          navigation.navigate('BlogDetail', {
            title: "BLOGS",
            description:
              "La R1 est une icône. Éprouvée sur piste, elle a remporté au cours des dix dernières années un championnat du monde SBK, deux titres de champion du monde d’endurance et de nombreux championnats nationaux. Inspirée par la YZR-M1 de MotoGP, la R1 RACE atteint des niveaux encore plus élevés de performances sur piste grâce à de nouvelles ailettes aérodynamiques, une suspension améliorée et un système de freinage Brembo.",
            price: "20999",
            image: {
              uri: "https://cdn2.yamaha-motor.eu/prod/product-assets/2025/YZF1000R1COMP/2025-Yamaha-YZF1000R1COMP-EU-Tech_Black-360-Degrees-001-03.jpg"
            }
          })
        }/>
      </ScrollView>

      <NavBar navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navbar: {
    backgroundColor: "#36007c",
    position: 'absolute',
    paddingTop: 10,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 30,
    borderRadius: 20,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default ProductScreen;