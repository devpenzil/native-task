import {View, Text, FlatList, TouchableOpacity, Share} from 'react-native';
// import {Share} from 'react-native-share';
import React from 'react';
import {styles} from './Home.style';
import ViewShot from 'react-native-view-shot';
import data from './data.json';
const Home = () => {
  const viewShotRef = React.useRef(null);
  //   const options = {
  //     title: 'Share via',
  //     messgae: 'shgsjh',
  //   };
  const shareSnap = () => {
    viewShotRef.current.capture().then(uri => {
      console.log(uri);
      //   Share.open(options)
      //     .then(res => {
      //       console.log(res);
      //     })
      //     .catch(err => {
      //       err && console.log(err);
      //     });
      Share.share({
        message: uri,
        url: uri,
        title: 'Share via',
      });
    });
    error => {
      console.log(error);
    };
  };
  return (
    <View style={styles.container}>
      <ViewShot ref={viewShotRef}>
        <View style={styles.card}>
          <FlatList
            data={data}
            renderItem={({item}) => {
              return (
                <View style={styles.element}>
                  <Text style={styles.elementText}>
                    {item.id} - {item.name}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </ViewShot>
      <TouchableOpacity style={styles.shareButton} onPress={shareSnap}>
        <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
