import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {HTText} from '../../components';
import {Colors} from '../../theme';
import {GlobalStyles} from '../../utils/constants';
import {Images} from '../../utils/media';

const HTPictureOption = ({onCancel, onSelect, isVisible}) => {
  const backDropPress = () => {
    onCancel('');
  };

  const handleOptionSelect = selectedOption => {
    onSelect(selectedOption);
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
      <View style={styles.modalContent}>
        <View
          style={[
            GlobalStyles.bottomSheetHeader,
            GlobalStyles.marginVerticalLarge,
          ]}
        />
        <View
          style={[
            GlobalStyles.row,
            GlobalStyles.marginVerticalLarge,
            styles.optionContainer,
          ]}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleOptionSelect('Camera')}>
            <Image
              source={Images.appImages.Camera}
              style={[GlobalStyles.roundXSmall, GlobalStyles.imageContain]}
            />
            <HTText text="Camera" bold textColor={Colors.Black} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => handleOptionSelect('Gallery')}>
            <Image
              source={Images.appImages.Gallery}
              style={[GlobalStyles.roundXSmall, GlobalStyles.imageContain]}
            />
            <HTText text="Gallery" bold textColor={Colors.Black} />
          </TouchableOpacity>
        </View>
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
    backgroundColor: Colors.White,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  optionContainer: {
    justifyContent: 'space-evenly',
  },
  option: {
    alignItems: 'center',
  },
});

export default HTPictureOption;
