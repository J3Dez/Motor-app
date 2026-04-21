import { StyleSheet, ScrollView } from 'react-native';
import ProductCard from './card';

const Products = ({navigation}) => {
  return (
    <ScrollView style={productStyles.container}
    contentContainerStyle={productStyles.content}
    >
    <ProductCard
      title="Moto Cross de 450 cm³"
      image={{ uri: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZ250F/2026-Yamaha-YZ250F-EU-Icon_Blue-Studio-001-03_Mobile.jpg' }}
      description="Quel que soit votre niveau de course, la YZ450F dispose de la puissance de feu pour vous voir gagner. Le nouveau moteur offre la même puissance gagnante en course, mais désormais avec une plus grande facilité d’utilisation à bas et moyen régime et une plus grande sensation de puissance à haut régime. Le nouveau système d’échappement respecte les dernières réglementations en matière de bruit, et le nouvel embrayage hydraulique offre une meilleure sensation du point d'engagement ainsi qu'un fonctionnement plus léger."
      price="10599"
      onPress={() =>
            navigation.navigate("Product", {
                title: "Moto Cross de 450 cm³",
                description: "Quel que soit votre niveau de course, la YZ450F dispose de la puissance de feu pour vous voir gagner. Le nouveau moteur offre la même puissance gagnante en course, mais désormais avec une plus grande facilité d’utilisation à bas et moyen régime et une plus grande sensation de puissance à haut régime. Le nouveau système d’échappement respecte les dernières réglementations en matière de bruit, et le nouvel embrayage hydraulique offre une meilleure sensation du point d'engagement ainsi qu'un fonctionnement plus léger.",
                price: "10599",
                image: {uri: "https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZ250F/2026-Yamaha-YZ250F-EU-Icon_Blue-Studio-001-03_Mobile.jpg"},
            })
        }/>
    <ProductCard
      title="R6 GYTR"
      image={{ uri: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2022/YZF600R6RGYTR/2022-Yamaha-YZF600R6RGYTR-EU-Primer_White-Studio-001-03.jpg' }}
      description="La Yamaha R6 domine le Championnat du monde Supersport depuis des années. La nouvelle R6 GYTR va compliquer encore davantage la tâche de la concurrence. Équipée de composants racing signés GYTR®, les experts de l'usine Yamaha en matière de compétition, la R6 GYTR a été créée pour briller sur piste."
      price="21499"
      onPress={() =>
            navigation.navigate("Product", {
                title: "R6 GYTR",
                description: "La Yamaha R6 domine le Championnat du monde Supersport depuis des années. La nouvelle R6 GYTR va compliquer encore davantage la tâche de la concurrence. Équipée de composants racing signés GYTR®, les experts de l'usine Yamaha en matière de compétition, la R6 GYTR a été créée pour briller sur piste.",
                price: "21499",
                image: {uri: "https://cdn2.yamaha-motor.eu/prod/product-assets/2022/YZF600R6RGYTR/2022-Yamaha-YZF600R6RGYTR-EU-Primer_White-Studio-001-03.jpg"},
            })
        }/>
    <ProductCard
      title="Moto Cross de 450 cm³"
      image={{ uri: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZ450FSV/2026-Yamaha-YZ450FSV-EU-Anniversary_White-360-Degrees-001-03.jpg' }}
      description="Tous les pilotes cherchent une machine qui leur confère une avance sur leurs concurrents et les meilleures chances de gagner. C’est précisément ce que promet la YZ450F 70ᵉ anniversaire grâce à ses performances haut de gamme. Elle est également proposée avec l’emblématique livrée spéciale blanc et rouge spéciale 70ᵉ anniversaire, qui rend hommage à la longue lignée de modèles victorieux produits par Yamaha."
      price="10799"
      onPress={() =>
            navigation.navigate("Product", {
                title: "Moto Cross de 450 cm³",
                description: "Tous les pilotes cherchent une machine qui leur confère une avance sur leurs concurrents et les meilleures chances de gagner. C’est précisément ce que promet la YZ450F 70ᵉ anniversaire grâce à ses performances haut de gamme. Elle est également proposée avec l’emblématique livrée spéciale blanc et rouge spéciale 70ᵉ anniversaire, qui rend hommage à la longue lignée de modèles victorieux produits par Yamaha.",
                price: "10799",
                image: {uri: "https://cdn2.yamaha-motor.eu/prod/product-assets/2026/YZ450FSV/2026-Yamaha-YZ450FSV-EU-Anniversary_White-360-Degrees-001-03.jpg"},
            })
        }/>
    <ProductCard
      title="R1 RACE"
      image={{ uri: 'https://cdn2.yamaha-motor.eu/prod/product-assets/2025/YZF1000R1COMP/2025-Yamaha-YZF1000R1COMP-EU-Tech_Black-360-Degrees-001-03.jpg' }}
      description="La R1 est une icône. Éprouvée sur piste, elle a remporté au cours des dix dernières années un championnat du monde SBK, deux titres de champion du monde d’endurance et de nombreux championnats nationaux. Inspirée par la YZR-M1 de MotoGP, la R1 RACE atteint des niveaux encore plus élevés de performances sur piste grâce à de nouvelles ailettes aérodynamiques, une suspension améliorée et un système de freinage Brembo."
      price="20999"
      onPress={() =>
            navigation.navigate("Product", {
                title: "R1 RACE",
                description: "La R1 est une icône. Éprouvée sur piste, elle a remporté au cours des dix dernières années un championnat du monde SBK, deux titres de champion du monde d’endurance et de nombreux championnats nationaux. Inspirée par la YZR-M1 de MotoGP, la R1 RACE atteint des niveaux encore plus élevés de performances sur piste grâce à de nouvelles ailettes aérodynamiques, une suspension améliorée et un système de freinage Brembo.",
                price: "20999",
                image: {uri: "https://cdn2.yamaha-motor.eu/prod/product-assets/2025/YZF1000R1COMP/2025-Yamaha-YZF1000R1COMP-EU-Tech_Black-360-Degrees-001-03.jpg"},
            })
        }/>
    </ScrollView>
  );
}

const productStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  content: {
    paddingBottom: 40,
    paddingHorizontal: 10
  }
});


export default Products;