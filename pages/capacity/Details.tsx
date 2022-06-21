import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Spherepage from './Spherepage';
import LeftIcon from '../../assets/icons/LeftIcon';
import {t} from 'react-native-tailwindcss';

const Details = () => {
  return (
    <View>
      <Spherepage animeCat={2}>
        <View style={[t.pX8, t.pY4, t.mY4]}>
          <LeftIcon />
        </View>
        <View
          style={[
            t.mX8,
            t.p4,
            t.border2,
            t.borderGreen500,
            t.roundedLg,
            t.bgGreen100,
          ]}>
          <Text style={[t.text2xl, t.fontBold, t.textGreen500]}>Welcome</Text>
          <Text style={[t.textXs, t.textBlack]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad qui
            ipsam exercitationem repudiandae? Minima aut beatae facilis non
          </Text>
          <Text style={[t.underline, t.mT2, t.textGreen600, t.textXs]}>
            Dismiss
          </Text>
        </View>
        <View
          style={[
            t.mX8,
            t.pT4,
            t.flex,
            t.flexRow,
            t.justifyBetween,
            t.itemsCenter,
          ]}>
          <View>
            <Text style={[t.text6xl, t.fontBold, t.textBlack]}>80%</Text>
          </View>
          <View style={[t.flex, t.justifyEnd]}>
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
            <Text style={[t.text2xl, t.fontSemibold, t.textBlack]}>
              Capacity
            </Text>
          </View>
        </View>
        <View style={[t.mX8, t.flex, t.flexRow]}>
          <View style={[t.flex1, t.bgGreen500, t.h8, t.mX1, t.roundedLLg]} />
          <View style={[t.flex1, t.bgGreen500, t.h8, t.mX1]} />
          <View style={[t.flex1, t.bgGreen500, t.h8, t.mX1]} />
          <View style={[t.flex1, t.bgGreen500, t.h8, t.mX1]} />
          <View style={[t.flex1, t.bgGray300, t.h8, t.mX1, t.roundedRLg]} />
        </View>
        <Text
          style={[
            t.mX8,
            t.mT2,
            t.textCenter,
            t.textBase,
            t.textBlack,
            t.fontSemibold,
          ]}>
          The number represents your remainings income after debt
        </Text>
        <View style={[t.mX8, t.mT6]}>
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
        </View>
      </Spherepage>
    </View>
  );
};

export default Details;
