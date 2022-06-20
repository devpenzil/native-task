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
    ...t.rounded,
    ...t.border,
    ...t.borderGray200,
    ...t.p2,
    ...t.mX2,
  },
});
