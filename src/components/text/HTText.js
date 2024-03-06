import React from 'react';
import {Text} from 'react-native';
import Fonts from '../../theme/fonts/Fonts';
import Colors from '../../theme/colors/Colors';

const HTText = ({text, textColor = Colors.Black, bold, size, styles}) => {
  const textStyle = {
    fontFamily: bold ? Fonts.family.bold : Fonts.family.regular,
    fontSize: size,
    color: textColor,
  };

  return <Text style={[styles, textStyle]}>{text}</Text>;
};

export default HTText;
