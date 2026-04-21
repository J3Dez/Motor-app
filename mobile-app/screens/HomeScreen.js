import { StyleSheet, Text, View, ScrollView, TouchableOpacity  } from 'react-native';
import { useState, useEffect } from 'react';
import BlogCard from '../Components/BlogCard';
import ProductCard from '../Components/ProductCard';
import NavBar from '../Components/Nav';

//import for the icons
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Ionicons } from '@expo/vector-icons';


const HomeScreen = ({ navigation, title, description, image, price, onPress  }) => {
  const [products, setProducts] = useState([]);
  //const [selectCategory, setSelectCategory] = useState("");
  //const [searchQuery, setSearchQuery] = useState("");
  //const [sortOption, setSortOption] = useState("price-asc");

  useEffect (() => {
    fetch('https://api.webflow.com/v2/sites/698c810f6792a508dfb356c7/products',
      {
        headers: {
          Authorization: "Bearer 4285f279544ab6788dc34c52ed6fa9388012cba51b0305dc6bd6938b38bfe6aa",
        },
      },
    )
    .then((res) => res.json())
    .then((data) => {
      setProducts(
        data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData.name,
          description: item.product.fieldData.description,
          price: (item.skus[0]?.fieldData.price.value || 0) / 100,
          image: {uri: item.skus[0]?.fieldData["main-image"]?.url},
        })),
      );
    })
    .catch((error) =>console.error("Error fetching product:", error))
  },[]);

  return (
    <View style={styles.container}>
        <Text>Thit is the Home</Text>

      <ScrollView style={styles.scroll}>
        <BlogCard 
        onPress={() =>
          navigation.navigate('BlogDetail', {
            title: "BLOGS",
            description:
              "La R1 est une icône. Éprouvée sur piste, elle a remporté au cours des dix dernières années un championnat du monde SBK, deux titres de champion du monde d’endurance et de nombreux championnats nationaux. Inspirée par la YZR-M1 de MotoGP, la R1 RACE atteint des niveaux encore plus élevés de performances sur piste grâce à de nouvelles ailettes aérodynamiques, une suspension améliorée et un système de freinage Brembo.",
            image: {
              uri: "https://cdn2.yamaha-motor.eu/prod/product-assets/2025/YZF1000R1COMP/2025-Yamaha-YZF1000R1COMP-EU-Tech_Black-360-Degrees-001-03.jpg"}
          })
        }/>

        {products.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            onPress={() =>
              navigation.navigate('ProductDetail', {
                title: item.title,
                description: item.description,
                price: item.price,
                image: item.image
              })
          }/>
        ))}
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
  scroll: {
    marginBottom: 60,
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