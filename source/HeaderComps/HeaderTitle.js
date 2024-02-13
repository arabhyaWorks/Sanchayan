import * as React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Text from '../Text/Text';

export default class HeaderTitle extends React.Component {
  render() {
    return (
      <View style={styles.logoCont}>
        <Text fontFamiliy="Baloo" fontWeight="700" style={styles.logoHeading}>
          संचयन
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  govLogo: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 2,
  },
  logoHeading: {
    color: '#F1781E',
    fontSize: 30,
    marginLeft: 5,
  },
  logoCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
