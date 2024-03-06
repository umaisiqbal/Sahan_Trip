import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {HTButton, HTText} from '../../components';
import {Colors, Fonts} from '../../theme';
import Dimensions from '../../utils/constants/dimensions/Dimensions';

const HTAlert = ({
  heading = 'Alert Heading',
  description = 'Alert Description',
  isVisible,
  button = 'Ok',
  button2,
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.content}>
          <HTText
            text={heading}
            bold
            size={Fonts.size.font16}
            textColor={Colors.Primary}
          />
          <HTText
            text={description}
            size={Fonts.size.font12}
            textColor={Colors.Secondary}
            styles={styles.description}
          />
          <View style={styles.buttonContainer}>
            {button && (
              <HTButton
                onClick={onCancel}
                buttonType="fill"
                text={button ? button : 'Button 1 Text'}
                backgroundColor={Colors.SuccessColor}
                textColor={Colors.White}
                height={Dimensions.Height * 0.04}
                width={Dimensions.Width * 0.2}
                bold
                style={styles.button1}
              />
            )}
            {button2 && (
              <HTButton
                onClick={onConfirm}
                buttonType="fill"
                text={button2 ? button2 : 'Button 2 Text'}
                backgroundColor={Colors.DangerColor}
                textColor={Colors.White}
                height={Dimensions.Height * 0.04}
                width={Dimensions.Width * 0.2}
                bold
                style={styles.button1}
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DialogColor,
    height: Dimensions.Height * 0.25,
    width: Dimensions.Width * 0.9,
    justifyContent: 'center',
    borderRadius: 8,
  },
  content: {
    margin: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  button1: {
    marginHorizontal: 5,
  },
  description: {textAlign: 'center', margin: 5},
});
export default HTAlert;
