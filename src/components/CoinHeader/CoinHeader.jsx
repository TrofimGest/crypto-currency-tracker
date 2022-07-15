import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ionicons, EvilIcons, FontAwesome } from '@expo/vector-icons';
import { useWatchlist } from '../../contexts/WatchlistContext';
import styles from './styles';

const CoinHeader = (props) => {
  const { coinId, image, symbol, marketCapRank, navigation } = props;
  const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } =
    useWatchlist();

  const checkCoinState = () => {
    return Object.values(watchlistCoinIds).some(
      (coinIdValue) => coinIdValue === coinId
    );
  };

  const handlePress = () => {
    if (checkCoinState()) {
      return removeWatchlistCoinId(coinId);
    }
    return storeWatchlistCoinId(coinId);
  };

  return (
    <View style={styles.headerContainer}>
      <Ionicons
        name='chevron-back-sharp'
        size={30}
        color='white'
        onPress={() => navigation.goBack()}
      />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <FontAwesome
        name={checkCoinState() ? 'star' : 'star-o'}
        size={25}
        color={checkCoinState() ? '#ffbf00' : 'white'}
        onPress={handlePress}
      />
    </View>
  );
};

export default CoinHeader;
