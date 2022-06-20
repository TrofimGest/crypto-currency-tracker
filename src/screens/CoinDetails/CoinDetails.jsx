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

  const chartColor = current_price.usd > prices[0][1] ? '#16c784' : '#ea3943';

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
        <Price name={name} priceChange={price_change_percentage_24h}>
          <LineChart.PriceText
            format={currencyFormat}
            style={styles.currentPrice}
          />
        </Price>
        <LineChart width={screenWidth} height={screenWidth / 2}>
          <LineChart.Path color={chartColor} width={2} />
          <LineChart.CursorCrosshair color={chartColor} />
        </LineChart>
      </LineChart.Provider>
    </View>
  );
};

export default CoinDetails;
