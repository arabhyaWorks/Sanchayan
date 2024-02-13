import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import About from '../Home/About';
import BottomTabNav from './BottomTab';
import HeaderRight from '../HeaderComps/HeaderRight';
import HeaderTitle from '../HeaderComps/HeaderTitle';
import HeaderLeft from '../HeaderComps/HeaderLeft';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShadowVisible: true,
        headerTintColor: 'black',
        headerShown: false,
        headerTitleAlign: 'center',
        headerTitleStyle: {fontSize: 20},
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          backgroundColor: '#FDFAE7',
        },
      }}>
      <Stack.Screen
        name="BottomTabNav"
        component={BottomTabNav}
        options={{
          headerShown: true,
          headerRight: () => <HeaderRight />,
          headerTitle: () => <HeaderTitle />,
          headerLeft: () => <HeaderLeft />,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
