import React from 'react';
import {Canvas, Circle, Group, useCanvasRef} from '@shopify/react-native-skia';
import {Text, View} from 'react-native';

const Home = () => {
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Canvas style={{flex: 1}}>
        <Group blendMode={'multiply'}>
          <Circle r={128} cx={250} cy={200} color="cyan " />
          <Circle r={128} cx={150} cy={100} color="yellow" />
          <Circle r={128} cx={150} cy={300} color="magenta" />
        </Group>
      </Canvas>
      <Text>Hello</Text>
    </View>
  );
};

export default Home;
