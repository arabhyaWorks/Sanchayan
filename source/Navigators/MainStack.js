import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import BottomTabNav from './BottomTab';
import HeaderRight from '../HeaderComps/HeaderRight';
import HeaderTitle from '../HeaderComps/HeaderTitle';
import HeaderLeft from '../HeaderComps/HeaderLeft';
import WebViewUtil from '../utils/WebViewUtil';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShadowVisible: true,
        headerTintColor: 'black',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontSize: 20 },
        headerStyle: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 5,
          backgroundColor: '#2874F0', // Match the image background color
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

      <Stack.Screen
        name="LabMitra"
        options={{
          headerShown: true,
          headerTitle: 'Lab Mitra',
        }}
      >
        {() => <WebViewUtil url="https://labmitravns.com/" />}
      </Stack.Screen>

      <Stack.Screen
        name="LabReports"
        options={{
          headerShown: true,
          headerTitle: 'Lab Reports',
        }}
      >
        {() => <WebViewUtil url="https://labmitravns.com/reports/downloadReportByUser" />}
      </Stack.Screen>

      {/* TB EP Screen */}
      <Stack.Screen
        name="TbEp"
        options={{
          headerShown: true,
          headerTitle: 'TB EP',
        }}
      >
        {() => <WebViewUtil url="https://nikshay.in/" />}
      </Stack.Screen>

      {/* ABHA ID Screen */}
      <Stack.Screen
        name="AbhaID"
        options={{
          headerShown: true,
          headerTitle: 'ABHA ID',
        }}
      >
        {() => <WebViewUtil url="https://abha.abdm.gov.in/abha/v3/" />}
      </Stack.Screen>

    </Stack.Navigator>
  );
}

export default MainStack;
