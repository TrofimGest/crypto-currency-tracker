import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import CoinCard from '../../components/CoinCard/CoinCard';
import { getMarketData } from '../../services/api';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async () => {
    setLoading(true);
    const coinsData = await getMarketData();
    setCoins(coinsData);
    setLoading(false);
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinCard marketCoin={item} />}
    />
  );
};

export default Home;
