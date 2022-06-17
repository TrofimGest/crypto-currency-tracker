import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinCard = () => {
  return (
    <View style={styles.coinContainer}>
      <Image
        source={{uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'}}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: 'center',

        }}
      />
      <View>
        <Text style={styles.title}>Bitcoin</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>1</Text>
          </View>
          <Text style={styles.text}>BTC</Text>
          <AntDesign
            name='caretdown'
            size={12}
            color='white'
            style={{ alignSelf: 'center', marginRight: 5 }}
          />
          <Text style={{ color: 'white' }}>0,23%</Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        <Text style={styles.title}>24223.029</Text>
        <Text style={{ color: 'white' }}>MCap 1.003 T</Text>
      </View>
    </View>
  );
};

export default CoinCard;
