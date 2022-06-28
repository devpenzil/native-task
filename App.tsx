/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import JumbingText from './pages/splashscreen/JumbingText';
import TouchGesture from './pages/touch/TouchGesture';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {/* <TouchGesture /> */}
      <JumbingText />
    </GestureHandlerRootView>
  );
};

export default App;
