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

      <View style={styles.navbar}>  {/*style/div for the nav*/}
        <TouchableOpacity onPress={() => navigation.goBack()}> {/*goBack to come to the previous page*/}
            <Ionicons name="home" size={40} color="black" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Products')}>
            <AntDesign name="product" size={40} color="black" />
        </TouchableOpacity> 
        <TouchableOpacity onPress={() => navigation.navigate('Blogs')}>
            <FontAwesome name="newspaper-o" size={40} color="black" />
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
    backgroundColor: "#f3f0f6",
    position: 'absolute',
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%'
  }
});

export default HomeScreen;