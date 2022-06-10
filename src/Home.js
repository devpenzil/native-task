import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React, {useRef} from 'react';
import {styles} from './Home.style';
import ViewShot from 'react-native-view-shot';
import Share from 'react-native-share';
import data from './data.json';
const Home = () => {
  const viewRef = useRef();
  const onShare = async () => {
    viewRef.current
      .capture()
      .then(uri => {
        Share.open({
          url: uri,
          message: 'Sent via react native app',
        })
          .then(res => {
            console.log('Success => ', res);
          })
          .catch(err => {
            console.log('Error => ', err);
          });
      })
      .catch(err => {
        console.error('Error  => ', err);
      });
  };
  return (
    <View style={styles.container}>
      <ViewShot ref={viewRef}>
        <View style={styles.card}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View>
                  <Text>
                    {item.id} - {item.name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </ViewShot>
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
