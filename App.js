import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CoinCard from './src/components/CoinCard/CoinCard';

export default function App() {
  return (
    <View style={styles.container}>
      <CoinCard />
      <CoinCard />
      <CoinCard />
      <StatusBar style='light' />
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
