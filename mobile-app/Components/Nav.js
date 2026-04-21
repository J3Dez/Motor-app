import { StyleSheet, View, TouchableOpacity  } from 'react-native';

//import for the icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

const NavBar = ( {navigation} ) => {
  return (
    <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home" size={35} color="#fff" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
          <AntDesign name="product" size={35} color="#fff" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
          <FontAwesome name="newspaper-o" size={35} color="#fff" />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#36007c",
    position: 'absolute',
    paddingTop: 10,
    paddingRight: 50,
    paddingLeft: 50,
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  }
});

export default NavBar;