import { View, Text, Image } from 'react-native';
import React from 'react';
import Coin from '../../../assets/data/crypto.json';
import CoinHeader from '../../components/CoinHeader/CoinHeader';
import Price from '../../components/Price/Price';

const CoinDetails = () => {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = Coin;

  return (
    <View style={{ width: '100%', paddingHorizontal: 10 }}>
      <CoinHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <Price
        name={name}
        currentPrice={current_price}
        priceChange={price_change_percentage_24h}
      />
    </View>
  );
};

export default CoinDetails;
