import {StyleSheet} from 'react-native';
import {Fonts} from '../../../theme';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  input: {
    fontFamily: Fonts.family.regular,
    fontSize: Fonts.size.font12,
    marginHorizontal: 2,
  },
  icon: {
    marginHorizontal: 10,
    marginRight:60
  },
});
export default styles;
