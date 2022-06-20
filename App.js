import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import Home from './src/screens/Home/Home';
import CoinDetails from './src/screens/CoinDetails/CoinDetails';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer
        theme={{
          colors: { background: '#161618' },
        }}
      >
        <View style={styles.container}>
          <StatusBar style='light' />
          <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='Home'
          >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Details' component={CoinDetails} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161618',
    paddingTop: 50,
  },
});
