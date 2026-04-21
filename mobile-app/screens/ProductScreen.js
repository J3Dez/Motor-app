import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import ProductCard from '../Components/ProductCard';

//import for the icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Thit is the Product pages</Text>

        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ScrollView>

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={35} color="#fff" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="product" size={35} color="#fff" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
          <FontAwesome name="newspaper-o" size={35} color="#fff" />
        </TouchableOpacity> 
      </View>
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