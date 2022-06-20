import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CoinDetails from './src/screens/CoinDetails/CoinDetails';
import Home from './src/screens/Home/Home';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style='light' />
        <CoinDetails />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161618',
    alignItems: 'center',
    paddingTop: 50,
  },
});
