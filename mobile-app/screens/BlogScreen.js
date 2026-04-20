import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
//import for the icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

const BlogScreen = ( {navigation} ) => {
  return (
    <View style={styles.container}>
      <Text>Thit is the Blog page</Text>

      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
            <AntDesign name="product" size={24} color="black" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="newspaper-o" size={24} color="black" />
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
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '70%'
  }
});

export default BlogScreen;