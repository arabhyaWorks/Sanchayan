import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../Text/Text';

export default class HeaderTitle extends React.Component {
  render() {
    return (
      <View style={styles.logoCont}>
        <Text fontFamily="Baloo" fontWeight="700" style={styles.logoHeading}>
          Lab Mitra
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoHeading: {
    color: 'white', // Updated color to white
    fontSize: 30,
    marginLeft: 5,
  },
  logoCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
