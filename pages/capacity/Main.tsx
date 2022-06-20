import {View, Text} from 'react-native';
import React from 'react';
import {style} from './main.style';
import Spherepage from './Spherepage';
const Main = () => {
  return (
    <>
      <Spherepage>
        <View style={style.container}>
          <View style={style.card}>
            <Text>Hello</Text>
          </View>
          <View style={style.card}>
            <Text>Hello</Text>
          </View>
          <View style={style.card}>
            <Text>Hello</Text>
          </View>
        </View>
      </Spherepage>
    </>
  );
};

export default Main;
