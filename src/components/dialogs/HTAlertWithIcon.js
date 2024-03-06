import React from 'react';
import {View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HTButton, HTText} from '../../components';
import Dimensions from '../../utils/constants/dimensions/Dimensions';
import {Colors, Fonts} from '../../theme';
const HTAlertWithIcon = ({
  heading = 'Alert Heading',
  description = 'Alert Description',
  isVisible,
  button = 'Ok',
  button2,
  onCancel,
  iconName = 'help-circle-outline',
  iconColor = Colors.Black,
  onConfirm,
}) => {
  return (
    <Modal isVisible={isVisible} backdropOpacity={0.8}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.icon}>
            <Ionicons name={iconName} size={35} color={iconColor} />
          </View>
          <HTText
            text={heading}
            bold
            size={Fonts.size.font14}
            textColor={Colors.Primary}
          />
          <HTText
            text={description}
            size={Fonts.size.font12}
            textColor={Colors.Gray}
            styles={styles.description}
          />
          <View style={styles.buttonContainer}>
            {button && (
              <HTButton
                onClick={onCancel}
                buttonType="fill"
                text={button}
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
    height: Dimensions.Height * 0.28,
    width: Dimensions.Width * 0.9,
    justifyContent: 'center',
    borderRadius: 8,
  },
  content: {
    margin: 10,
    alignItems: 'center',
  },
  icon: {
    alignSelf: 'center',
    height: Dimensions.Height * 0.08,
    width: Dimensions.Height * 0.08,
    borderRadius: Dimensions.Height * 0.2,
    backgroundColor: Colors.SoftMint,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
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
  description: {textAlign: 'center', margin: 2},
});
export default HTAlertWithIcon;
