import React from 'react';
import {TouchableOpacity} from 'react-native';
import {HTText} from '../../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors, Fonts} from '../../../theme';
import {Dimensions, GlobalStyles} from '../../../utils/constants';
import styles from './styles';

const HTButtonWithIcon = ({
  onClick,
  text,
  textSize,
  buttonType = 'border',
  borderColor = Colors.Primary,
  backgroundColor,
  textColor = Colors.Black,
  bold,
  height = Dimensions.Height * 0.05,
  width = Dimensions.Width * 0.8,
  style,
  iconName = 'help-circle-outline',
}) => {
  const textStyle = {
    fontFamily: bold ? Fonts.family.bold : Fonts.family.semiBold,
    fontSize: textSize ? textSize : Fonts.size.font14,
  };
  const containerStyle = {
    backgroundColor,
    height,
    width,
    ...(buttonType === 'border' && {borderColor, borderWidth: 1}),
    ...(buttonType === 'fill' && {backgroundColor}),
  };
  return (
    <TouchableOpacity
      style={[style, styles.container, containerStyle]}
      onPress={() => onClick()}>
      <Ionicons
        name={iconName}
        color={textColor}
        size={18}
        style={GlobalStyles.marginHorizontalSmall}
      />
      {bold ? (
        <HTText
          bold
          style={styles.text}
          text={text}
          textColor={textColor}
          size={textSize ? textSize : Fonts.size.font14}
        />
      ) : (
        <HTText
          style={[styles.text, textStyle]}
          text={text}
          textColor={textColor}
          size={textSize ? textSize : Fonts.size.font14}
        />
      )}
    </TouchableOpacity>
  );
};

export default HTButtonWithIcon;
