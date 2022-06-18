import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CoinDetails from './src/screens/CoinDetails/CoinDetails';
import Home from './src/screens/Home/Home';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <CoinDetails />
    </View>
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
