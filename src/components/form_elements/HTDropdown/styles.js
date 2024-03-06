import {StyleSheet} from 'react-native';
import {Colors} from '../../../theme';
import Dimensions from '../../../utils/constants/dimensions/Dimensions';
const styles = StyleSheet.create({
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

    width: Dimensions.Width * 0.9,
  },
  dropdownContainer: {
    backgroundColor: Colors.DialogColor,
  },
  dropdownItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.Width * 0.9,
    margin: 8,
    borderBottomColor: Colors.SoftMint,
    borderBottomWidth: 1,
  },
  activeItem: {
    height: 10,
    width: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.DangerColor,
  },
  confirmButton: {
    alignSelf: 'flex-end',
    margin: 10,
  },
});

export default styles;
