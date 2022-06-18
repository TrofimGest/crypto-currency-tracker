import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CoinCard from '../../components/CoinCard/CoinCard';
import cryptocurrencies from '../../../assets/data/cryptocurrencies.json';

const Home = () => {
  return (
    <FlatList
      data={cryptocurrencies}
      renderItem={({ item }) => <CoinCard marketCoin={item} />}
    />
  );
};

export default Home;
