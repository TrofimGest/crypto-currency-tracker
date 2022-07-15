import {
  View,
  Dimensions,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { LineChart } from 'react-native-wagmi-charts';
import { useNavigation, useRoute } from '@react-navigation/native';

import CoinHeader from '../../components/CoinHeader/CoinHeader';
import { getDetailedCoinData, getCoinMarketChart } from '../../services/api';
import Price from '../../components/Price/Price';
import styles from './styles';

const CoinDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    params: { coinId },
  } = route;

  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coinValue, setCoinValue] = useState('1');
  const [moneyValue, setMoneyValue] = useState('');

  const fetchCoinData = async () => {
    setLoading(true);
    const fetchedCoinData = await getDetailedCoinData(coinId);
    const fetchedCoinMarketData = await getCoinMarketChart(coinId);
    setCoin(fetchedCoinData);
    setCoinMarketData(fetchedCoinMarketData);
    setMoneyValue(fetchedCoinData.market_data.current_price.usd.toString());
    setLoading(false);
  };

  useEffect(() => {
    fetchCoinData();
  }, []);

  if (loading || !coin || !coinMarketData) {
    return <ActivityIndicator size='large' />;
  }

  const {
    id,
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = coin;

  const { prices } = coinMarketData;

  const currencyFormat = ({ formatted }) => {
    'worklet';
    if (formatted === '') {
      return `$${current_price.usd.toFixed(2)}`;
    } else {
      return `$${formatted.replace(/[\s,%]/g, '')}`;
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
          coinId={id}
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
