/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from './pages/skia/Home';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View>
        <Home />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
