import { View, Dimensions, Text, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LineChart } from 'react-native-wagmi-charts';
import { useNavigation } from '@react-navigation/native';

import Coin from '../../../assets/data/crypto.json';
import CoinHeader from '../../components/CoinHeader/CoinHeader';
import Price from '../../components/Price/Price';
import styles from './styles';

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

  const navigation = useNavigation();

  const [coinValue, setCoinValue] = useState('1');
  const [moneyValue, setMoneyValue] = useState(current_price.usd.toString());

  const currencyFormat = ({ formatted }) => {
    'worklet';
    if (formatted === '') {
      return `$${current_price.usd.toFixed(2)}`;
    } else {
      return `$${formatted}`;
    }
  };

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(',', '.')) || 0;
    setMoneyValue((floatValue * current_price.usd).toString());
  };

  const changeMoneyValue = (value) => {
    setMoneyValue(value);
    const floatValue = parseFloat(value.replace(',', '.')) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
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
          navigation={navigation}
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
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              style={styles.input}
              value={coinValue}
              keyboardType='numeric'
              onChangeText={changeCoinValue}
            />
          </View>

          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>USD</Text>
            <TextInput
              style={styles.input}
              value={moneyValue}
              keyboardType='numeric'
              onChangeText={changeMoneyValue}
            />
          </View>
        </View>
      </LineChart.Provider>
    </View>
  );
};

export default CoinDetails;
