import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import BlogScreen from './screens/BlogScreen';
import BlogDetailScreen from './screens/BlogDetail';
import ProductDetailScreen from './screens/ProductDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="Products" component={ProductScreen}></Stack.Screen>
        <Stack.Screen name="Blogs" component={BlogScreen}></Stack.Screen>

        {/*DETAILS PAGE*/}
        <Stack.Screen name="BlogDetail" component={BlogDetailScreen}></Stack.Screen>
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});