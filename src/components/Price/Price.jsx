import { View, Text } from 'react-native';
import React from 'react';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const Price = (props) => {
  const { priceChange, currentPrice, name } = props;

  const percentageColor = priceChange < 0 ? '#ea3943' : '#16c784';
  return (
    <View style={styles.priceContainer}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.currentPrice}>${currentPrice.usd}</Text>
      </View>
      <View
        style={{
          backgroundColor: percentageColor,
          paddingHorizontal: 3,
          paddingVertical: 8,
          borderRadius: 5,
          flexDirection: 'row',
        }}
      >
        <AntDesign
          name={priceChange < 0 ? 'caretdown' : 'caretup'}
          size={12}
          color={'white'}
          style={{ alignSelf: 'center', marginRight: 5 }}
        />
        <Text style={styles.priceChange}>{priceChange.toFixed(2)}%</Text>
      </View>
    </View>
  );
};

export default Price;
