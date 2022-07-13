import { FlatList, RefreshControl } from 'react-native';
import React, { useEffect, useState } from 'react';
import CoinCard from '../../components/CoinCard/CoinCard';
import { getMarketData } from '../../services/api';
import { combineTransition } from 'react-native-reanimated';

const Home = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCoins = async (page) => {
    if (loading) {
      return;
    }
    setLoading(true);
    const coinsData = await getMarketData(page);
    setCoins((existingCoins) => [...existingCoins, ...coinsData]);
    setLoading(false);
  };

  const refetchCoins = async () => {
    if (loading) {
      return;
    }
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
      onEndReached={() => fetchCoins(coins.length / 50 + 1)}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor='white'
          onRefresh={refetchCoins}
        />
      }
    />
  );
};

export default Home;
