import { FlatList, RefreshControl } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useWatchlist } from '../../contexts/WatchlistContext';
import { getWatchlistedCoins } from '../../services/api';
import CoinCard from '../../components/CoinCard/CoinCard';

const Watchlist = () => {
  const { watchlistCoinIds } = useWatchlist();

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  const transformCoinIds = () => {
    return Object.values(watchlistCoinIds).join('%2C');
  };

  const fetchWatchlistedCoins = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    if (transformCoinIds() === '') {
      setCoins([]);
    } else {
      const watchlistedCoinsData =
        (await getWatchlistedCoins(1, transformCoinIds())) || [];
      setCoins(watchlistedCoinsData);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchWatchlistedCoins();
  }, [watchlistCoinIds]);

  return (
    <FlatList
      data={coins}
      renderItem={({ item }) => <CoinCard marketCoin={item} />}
      keyExtractor={(item) => item.id}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor='white'
          onRefresh={fetchWatchlistedCoins}
        />
      }
    />
  );
};

export default Watchlist;
