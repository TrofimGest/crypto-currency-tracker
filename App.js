import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, View } from 'react-native';
import CoinCard from './src/components/CoinCard/CoinCard';
import cryptocurrencies from './assets/data/cryptocurrencies.json';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => <CoinCard marketCoin={item} />}
      />
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
