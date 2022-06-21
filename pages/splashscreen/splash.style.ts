import {StyleSheet} from 'react-native';
import {t} from 'react-native-tailwindcss';
export const styles = StyleSheet.create({
  container: {
    ...t.wFull,
    ...t.hFull,
    ...t.p3,
    ...t.flex,
    ...t.flexRow,
    ...t.justifyAround,
    ...t.itemsCenter,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoTwo: {
    width: 100,
    height: 100,
  },
  textpla: {
    display: 'flex',
    flexDirection: 'row',
  },
  inditext: {
    fontSize: 60,
    fontWeight: '900',
    fontStyle: 'italic',
  },
});
