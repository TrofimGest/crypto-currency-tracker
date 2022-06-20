import { View, Dimensions } from 'react-native';
import React from 'react';
import { LineChart } from 'react-native-wagmi-charts';

import Coin from '../../../assets/data/crypto.json';
import CoinHeader from '../../components/CoinHeader/CoinHeader';
import Price from '../../components/Price/Price';
import styles from '../../components/Price/styles';

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

  const currencyFormat = ({ formatted }) => {
    'worklet';
    if (formatted === '') {
      return `$${current_price.usd.toFixed(2)}`;
    } else {
      return `$${formatted}`;
    }
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{ width: '100%', paddingHorizontal: 10 }}>
      <LineChart.Provider
        data={prices.map((price) => ({
          timestamp: price[0],
          value: price[1],
        }))}
      >
        <CoinHeader
          image={small}
          symbol={symbol}
          marketCapRank={market_cap_rank}
        />
        <Price
          name={name}
          currentPrice={current_price}
          priceChange={price_change_percentage_24h}
        >
          <LineChart.PriceText
            format={currencyFormat}
            style={styles.currentPrice}
          />
        </Price>
        <LineChart width={screenWidth} height={screenWidth / 2}>
          <LineChart.Path color='yellow' width={2} />
          <LineChart.CursorCrosshair />
        </LineChart>
      </LineChart.Provider>
    </View>
  );
};

export default CoinDetails;
