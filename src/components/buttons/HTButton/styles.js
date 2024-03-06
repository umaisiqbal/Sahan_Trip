import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../theme';

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.Primary,
  },
  text: {
    fontSize: Fonts.size.font14,
    color: Colors.Black,
    textAlign: 'center',
  },
});

export default styles;
