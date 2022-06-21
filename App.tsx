/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Main from './pages/capacity/Main';
import Details from './pages/capacity/Details';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View>
        {/* <Main /> */}
        <Details />
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
