import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from 'react-native';
import Card from '../Components/Card';

//import for the icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>Thit is the Home</Text>

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>

      <View style={styles.navbar}>
          {/*style/div for the nav*/}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/*goBack to come to the previous page*/}
          <Ionicons name="home" size={35} color="#fff" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
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
    backgroundColor: "#1a003c",
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

export default HomeScreen;