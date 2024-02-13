# React Native Starter Package

This starter package is designed to save you time setting up a new React Native project. It comes with several commonly used dependencies pre-integrated, so you can clone the repository and get started right away.


## Features

This project comes with the following pre-integrated features:

- **React Navigation**: For managing your app's navigation stack.
- **Stack Navigation**: A simple way to implement stack navigation in your app.
- **Bottom Tab Navigation**: Easily implement bottom tab navigation in your app.
- **React Native Vector Icons**: All icon libraries supported by React Native Vector Icons are included.
- **React Native SVG**: Allows you to create custom SVG icons for your app.
- **Custom Fonts**: This package includes support for several Devanagari and Roman script fonts. 

## Run Locally

Clone the project

```bash
  git clone https://github.com/Arabhya07092007/React-Native-Starter-Package.git
```

Go to the project directory

```bash
  cd react-native-starter-package
```

Install dependencies

```bash
  npm install
```

Start the metro bundler

```bash
  npx react-native start
```

## Custom Fonts
Supports 
- Poppins (Default)
- Baloo2
- Roboto
- Playfair Display
- Laila
- Vesper Libre
- Tiro Devanagri
- Sura
- Sahitya
- Rozha One

```javascript
import Text from '../Text/Text';

<Text style={styles.text} fontFamiliy={"Poppins"} fontWeight="500">
        React Native Starter Package
</Text>
```

## Vector Icons
Supports 
- Iconicons (Recommended)
- Feather (Recommended)
- Foundation
- Entypo
- AntDesign
- FontAwesome5
- FontAwesome
- MaterialIcons
- MaterialCommunityIcons
- SimpleLineIcons
```javascript
import Icon, {Icons} from '../Icons/Icons';

<Icon type={Icons.Iconicons} name="home" 
color="black" style={styles.icon} />
```
## React Native SVG (Icons or any svg...)

```javascript
import React from 'react';
import {Svg, Path, G} from 'react-native-svg';
import {StyleSheet, View} from 'react-native';

const TouristTemple = ({color}) => {
  return (
    <View style={styles.container}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none">
        <Path
          d="M14.6666 14.1667H1.33331C1.05998 14.1667 0.833313 14.3934 0.833313 14.6667C0.833313 14.9401 1.05998 15.1667 1.33331 15.1667H14.6666C14.94 15.1667 15.1666 14.9401 15.1666 14.6667C15.1666 14.3934 14.94 14.1667 14.6666 14.1667Z"
          fill={color}
        />
        <Path
          d="M11.3333 1.33325H4.66667C2.66667 1.33325 2 2.52659 2 3.99992V14.6666H6V10.6266C6 10.2799 6.28 9.99992 6.62667 9.99992H9.38C9.72 9.99992 10.0067 10.2799 10.0067 10.6266V14.6666H14.0067V3.99992C14 2.52659 13.3333 1.33325 11.3333 1.33325ZM9.66667 6.16659H8.5V7.33325C8.5 7.60659 8.27333 7.83325 8 7.83325C7.72667 7.83325 7.5 7.60659 7.5 7.33325V6.16659H6.33333C6.06 6.16659 5.83333 5.93992 5.83333 5.66659C5.83333 5.39325 6.06 5.16659 6.33333 5.16659H7.5V3.99992C7.5 3.72659 7.72667 3.49992 8 3.49992C8.27333 3.49992 8.5 3.72659 8.5 3.99992V5.16659H9.66667C9.94 5.16659 10.1667 5.39325 10.1667 5.66659C10.1667 5.93992 9.94 6.16659 9.66667 6.16659Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

export {TouristTemple}
```


```javascript
<Tab.Screen
  name="Home"
  component={Home}
  options={{
    tabBarLabel: 'Home',
    tabBarIcon: ({color, size}) => <TouristTemple color={color} />,
    title: 'Home',
  }}
/>
```

## Changing the Package Name

The default Android package name is `com.divyaqr`. To change this to your desired package name, follow the instructions in this [article](https://dev.to/karanpratapsingh/quick-guide-for-updating-package-name-in-react-native-3ei3).

## Changing the Display Name

To change the display name of the app, go to `android/app/src/main/res/values/strings.xml` and change the display name to your desired name.

## Changing the Splash Screen

The splash screen image is stored as `splash.jpg` in `android/app/src/main/res/drawable`. To change the splash screen, replace this image with your desired splash image.

## Changing the App Icon

To change the app icon, upload your desired logo to this [website](https://www.appicon.co/#app-icon) to generate the app icons for Android. Then, store them in the `android/app/src/main/res` directory, replacing the existing icons in `mipmap-hdpi`, `mipmap-mdpi`, `mipmap-xhdpi`, `mipmap-xxhdpi`, and `mipmap-xxxhdpi`.
## Important Links and Documentations

- React Navigation : [Navigation Container](https://reactnavigation.org/docs/getting-started/), [Stack Nav](https://reactnavigation.org/docs/stack-navigator/), [Bottom Tab Nav](https://reactnavigation.org/docs/bottom-tab-navigator/)

- Essential Components : [react-native-svg](https://www.npmjs.com/package/react-native-svg), [Vector Icons](https://www.npmjs.com/package/react-native-vector-icons), [Ionicons](https://ionic.io/ionicons), [Feather icons](https://feathericons.com/)
- App Icon : [Generating app icon](https://www.appicon.co/#app-icon), [Making app icon](https://www.canva.com/design/DAFx50eOBi8/M7SAVM1nlNJC2oHaoXiWZQ/edit), [App icons Documentation](https://medium.com/@ansonmathew/app-icon-in-react-native-ios-and-android-6165757e3fdb)
- Splash Screen : [Making Splash Screen](https://www.canva.com/design/DAFydbI3hXw/xyEZQ47ztCEIRWwgm5Ra0g/edit), [Splash Screen Documentation](https://blog.logrocket.com/building-splash-screens-react-native/#what-splash-screen)
- Changing Package Name & Display Name: [Android Package Name](https://dev.to/karanpratapsingh/quick-guide-for-updating-package-name-in-react-native-3ei3), [Display Name](https://hemanthkollanur.medium.com/how-to-change-rename-the-app-name-in-react-native-in-android-and-ios-7486653b3362#:~:text=React%20Native%20series&text=To%20change%20the%20display%20name,with%20your%20desired%20app%20name.)
- Integrating Custom Fonts : [Documentation](https://blog.logrocket.com/adding-custom-fonts-react-native/), [Google Fonts](https://fonts.google.com/)
- Deployment and Production : [Building Android APK](https://medium.com/geekculture/react-native-generate-apk-debug-and-release-apk-4e9981a2ea51)


## Authors

- [@Arabhya07092007](https://github.com/Arabhya07092007?tab=overview&from=2024-02-01&to=2024-02-13e)
