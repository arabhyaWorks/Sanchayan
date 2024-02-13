import * as React from 'react';
import {View, TouchableOpacity, StyleSheet, ToastAndroid} from 'react-native';
import Icon, {Icons} from '../Icons/Icons';

const showToast = () => {
  ToastAndroid.showWithGravity(
    'We are still working on some features.',
    ToastAndroid.LONG,
    ToastAndroid.BOTTOM,
  );
};

export default class HeaderRight extends React.Component {
  render() {
    return (
      <View style={{marginRight: 12, flexDirection: 'row', gap: 10}}>
        <TouchableOpacity
          onPress={() => {
            // showToast();
          }}>
          <Icon
            type={Icons.Ionicons}
            name={'language-outline'}
            color="black"
            size={27}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // showToast();
          }}>
          <Icon
            type={Icons.Ionicons}
            name={'notifications-outline'}
            color="black"
            size={27}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
