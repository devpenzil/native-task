/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Splash from './pages/splashscreen/Splash';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View>
        <Splash />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
