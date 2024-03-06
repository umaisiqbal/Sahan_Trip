import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Colors, Fonts} from '../../../theme';
import {Dimensions} from '../../../utils/constants';
import styles from './styles';

const HTButton = ({
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
}) => {
  const textStyle = {
    fontFamily: bold ? Fonts.family.bold : Fonts.family.semiBold,
    color: textColor,
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
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default HTButton;
