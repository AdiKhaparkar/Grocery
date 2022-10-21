import {StyleSheet} from 'react-native';
import color from '../../constant/color';

export const styles = StyleSheet.create({
  headerText: {
    fontSize: 25,
    fontWeight: '800',
    marginTop: 30,
    marginLeft: 20,
  },
  loginText: {
    color: color.primary,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    padding: 10,
  },
  textStyle: {
    fontSize: 18,
  },
  accountText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: '8%',
    marginHorizontal: '13%',
    paddingTop: '20%',
  },
});
