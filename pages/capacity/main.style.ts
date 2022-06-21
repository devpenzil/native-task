import {StyleSheet} from 'react-native';
import {t} from 'react-native-tailwindcss';
export const style = StyleSheet.create({
  container: {
    ...t.wFull,
    ...t.hFull,
    ...t.p3,
    ...t.flex,
    ...t.flexRow,
    ...t.justifyAround,
  },
  card: {
    ...t.bgWhite,
    ...t.shadow2xl,
    ...t.flex1,
    ...t.h32,
    ...t.roundedL,
    ...t.border,
    ...t.borderGray200,
    ...t.p4,
    ...t.mX2,
    ...t.flex,
    ...t.justifyBetween,
  },
  textcontent: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '900',
    color: 'black',
  },
  scalecontainer: {
    borderColor: 'gray',
    width: '100%',
    height: 30,
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
  },
  scaleblocks: {
    backgroundColor: 'red',
    height: '100%',
    marginVertical: 1,
    flexDirection: 'row',
    width: '15%',
  },
});
