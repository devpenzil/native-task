import {View, Text, TouchableOpacity} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './Home.style';
import ViewShot from 'react-native-view-shot';
import {Share} from 'react-native-share';

const Home = () => {
  const viewRef = useRef();
  const onShare = async () => {
    viewRef.current
      .capture()
      .then(uri => {
        console.log(uri);
        Share.open({message: 'Hello'});
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <View style={styles.container}>
      <ViewShot ref={viewRef}>
        <View style={styles.card}>
          <Text>Hello</Text>
        </View>
      </ViewShot>
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
