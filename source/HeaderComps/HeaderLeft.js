import * as React from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default class HeaderLeft extends React.Component {
  render() {
    return (
      <View style={styles.logoCont}>
        <Image
          source={{
            uri: 'https://seeklogo.com/images/U/uttar-pradesh-government-logo-1FA161CB94-seeklogo.com.png',
          }}
          style={styles.govLogo}
        />
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
    color: 'black',
    fontSize: 25,
    marginLeft: 5,
  },
  logoCont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
});
