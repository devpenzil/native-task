import {View, Text} from 'react-native';
import React from 'react';
import {style} from './main.style';
import Spherepage from './Spherepage';
const Main = () => {
  return (
    <>
      <Spherepage animeCat={1}>
        <View style={style.container}>
          <View style={style.card}>
            <View>
              <Text style={style.textcontent}>Charecter</Text>
              <Text style={style.textcontent}>38 %</Text>
            </View>
            <View style={style.scalecontainer}>
              <View style={style.scaleblocks} />
              <View style={style.scaleblocks} />
              <View style={style.scaleblocks} />
              <View style={style.scaleblocks} />
              <View style={style.scaleblocks} />
            </View>
          </View>
          <View style={style.card}>
            <View>
              <Text style={style.textcontent}>Capacity</Text>
              <Text style={style.textcontent}>350</Text>
            </View>
          </View>
          <View style={style.card}>
            <View>
              <Text style={style.textcontent}>Capital</Text>
              <Text style={style.textcontent}>$ 9k</Text>
            </View>
          </View>
        </View>
      </Spherepage>
    </>
  );
};

export default Main;
