import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Card from '../Components/Card';

//import for the icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

const ProductScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Thit is the Product page</Text>

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home" size={40} color="black" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="product" size={40} color="black" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
            <FontAwesome name="newspaper-o" size={40} color="black" />
        </TouchableOpacity> 
      </View>


      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
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
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%'
  }
});

export default ProductScreen;