import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {GlobalStyles} from '../../utils/constants';
import {Colors} from '../../theme';

const HTBottomSheet = ({
  onCancel,
  isVisible,
  children,
  backgroundColor = Colors.White,
}) => {
  const backDropPress = () => {
    onCancel('');
  };
  const modalBackground = {
    backgroundColor,
  };

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={backDropPress}
      onSwipeComplete={backDropPress}
      swipeDirection="down"
      animationIn="slideInUp"
      animationOut="slideOutDown"
      backdropOpacity={0.8}
      transparent={true}
      style={styles.modalContainer}>
      <View style={[modalBackground, styles.modalContent]}>
        <View
          style={[
           
            GlobalStyles.marginVerticalMedium,
          ]}
        />
        {children}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    alignItems: 'center',
  },
  optionContainer: {
    justifyContent: 'space-evenly',
  },
  option: {
    alignItems: 'center',
  },
});

export default HTBottomSheet;
