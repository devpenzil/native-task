import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import Spherepage from './Spherepage';
import LeftIcon from '../../assets/icons/LeftIcon';
import {t} from 'react-native-tailwindcss';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const Details = () => {
  const [detailedView, setdetailedView] = useState<boolean>(false);
  const cardAnimeStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(detailedView ? '100%' : '30%'),
      marginLeft: withSpring(detailedView ? 0 : 24),
      justifyContent: 'space-between',
      paddingHorizontal: withSpring(detailedView ? 40 : 0),
    };
  });
  const cardAnimeHeading = useAnimatedStyle(() => {
    return {
      fontSize: withSpring(detailedView ? 60 : 20),
      textAlign: 'center',
    };
  });
  const cardAnimeDesc = useAnimatedStyle(() => {
    return {
      fontSize: 16,
      textAlign: 'center',
    };
  });
  const measureAnimated = useAnimatedStyle(() => {
    return {
      width: withSpring(detailedView ? '100%' : '33%'),
    };
  });
  return (
    <View>
      <Spherepage animeCat={detailedView ? 2 : 1}>
        <View style={[t.pX8, t.pY4, t.mY4]}>
          <TouchableOpacity
            onPress={() => {
              setdetailedView(false);
            }}>
            <LeftIcon />
          </TouchableOpacity>
        </View>
        {detailedView && (
          <Animated.View
            style={[
              t.mX8,
              t.p4,
              t.border2,
              t.borderGreen500,
              t.roundedLg,
              t.bgGreen100,
            ]}
            entering={FadeIn.duration(500)}>
            <Text style={[t.text2xl, t.fontBold, t.textGreen500]}>Welcome</Text>
            <Text style={[t.textXs, t.textBlack]}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad qui
              ipsam exercitationem repudiandae? Minima aut beatae facilis non
            </Text>
            <Text style={[t.underline, t.mT2, t.textGreen600, t.textXs]}>
              Dismiss
            </Text>
          </Animated.View>
        )}

        <TouchableWithoutFeedback
          onPress={() => {
            setdetailedView(true);
          }}>
          <Animated.View
            style={[
              cardAnimeStyle,
              {display: 'flex'},
              detailedView ? {flexDirection: 'row'} : {flexDirection: 'column'},
            ]}>
            <View>
              <Animated.Text
                style={[cardAnimeHeading, t.fontBold, t.textBlack]}>
                80%
              </Animated.Text>
            </View>
            <View style={[t.flex, t.justifyEnd]}>
              {detailedView && (
                <View style={[t.bgYellow500]}>
                  <Text
                    style={[
                      t.uppercase,
                      t.fontBold,
                      t.textCenter,
                      t.textWhite,
                      t.textXs,
                    ]}>
                    Unverified
                  </Text>
                </View>
              )}
              <Animated.Text
                style={[cardAnimeDesc, t.fontSemibold, t.textBlack]}>
                Capacity
              </Animated.Text>
            </View>
          </Animated.View>
        </TouchableWithoutFeedback>
        <Animated.View
          style={[t.pX8, t.flex, t.flexRow, measureAnimated, t.mXAuto]}>
          <View
            style={[
              t.flex1,
              t.bgGreen500,
              t.h8,
              t.roundedLLg,
              t.borderR2,
              t.borderWhite,
            ]}
          />
          <View
            style={[t.flex1, t.bgGreen500, t.h8, t.borderR2, t.borderWhite]}
          />
          <View
            style={[t.flex1, t.bgGreen500, t.h8, t.borderR2, t.borderWhite]}
          />
          <View
            style={[t.flex1, t.bgGreen500, t.h8, t.borderR2, t.borderWhite]}
          />
          <View
            style={[
              t.flex1,
              t.bgGray300,
              t.h8,
              t.roundedRLg,
              t.borderR2,
              t.borderWhite,
            ]}
          />
        </Animated.View>

        {detailedView && (
          <Animated.Text
            style={[
              t.mX8,
              t.mT2,
              t.textCenter,
              t.textBase,
              t.textBlack,
              t.fontSemibold,
            ]}
            entering={FadeIn.duration(200)}>
            The number represents your remainings income after debt
          </Animated.Text>
        )}
        {detailedView && (
          <Animated.View style={[t.mX8, t.mT6]} entering={FadeIn.duration(200)}>
            <Text style={[t.textLg, t.textBlack, t.fontBold]}>Capacity</Text>
            <View style={[t.bgGray300, t.p3, t.mT2, t.roundedLg]}>
              <Text style={[t.mB3]}>capacity data</Text>
              <View style={[t.flex, t.flexRow, t.justifyBetween]}>
                <Text style={[t.textBlack]}>Estimated debt</Text>
                <Text style={[t.fontBold, t.textBlack]}>$ 1,200</Text>
              </View>
              <View style={[t.flex, t.flexRow, t.justifyBetween]}>
                <Text style={[t.textBlack]}>Estimated Income</Text>
                <Text style={[t.fontBold, t.textBlack]}>$ 4,000</Text>
              </View>
              <TouchableOpacity
                style={[t.mT4, t.bgGreen600, t.w16, t.p1, t.rounded]}>
                <Text style={[t.textCenter, t.textWhite, t.textXs]}>
                  Edit data
                </Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
      </Spherepage>
    </View>
  );
};

export default Details;
