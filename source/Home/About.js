import React from 'react';
import {View, Image, StyleSheet, Dimensions, StatusBar} from 'react-native';
import Icon, {Icons} from '../Icons/Icons';
import Text from '../Text/Text';
const font = 'RozhaOne';

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#FDFAE7'} />
      <Text style={styles.text} fontFamiliy={font} fontWeight="400">
        {'React Native starter \n kit with custom fonts and icons.'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 100,
  },
  text: {
    fontSize: 30,
    color: '#000A50',
    textAlign: 'center',
  },
});
