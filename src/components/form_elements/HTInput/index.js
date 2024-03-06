import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import style from './styles';
import {Colors} from '../../../theme';
import Dimensions from '../../../utils/constants/dimensions/Dimensions';
const HTInput = ({
  onChangeText,
  fieldType,
  height = Dimensions.Height * 0.06,
  width = Dimensions.Width * 0.9,
  backgroundColor,
  textColor = Colors.Black,
  placeholder,
  styles, 
}) => {
  //States defined
  const [text, setText] = useState('');
  const [secureText, setSecureText] = useState(fieldType === 'password');

  //Callback function
  const handleTextChange = inputText => {
    setText(inputText);
    onChangeText(inputText, fieldType);
  };
  //Password Visibility
  const togglePasswordVisibility = () => {
    setSecureText(!secureText);
  };
  const renderIcon = () => {
    if (fieldType === 'password') {
      if (secureText) {
        //return (
          //<TouchableOpacity
            //onPress={() => togglePasswordVisibility()}
            //style={style.icon}>
            //<Ionicons name="eye-off-outline" size={20} color={textColor} />
          //</TouchableOpacity>
        //);
      } else {
        return (
          <TouchableOpacity
            onPress={() => togglePasswordVisibility()}
            style={style.icon}>
            <Ionicons name="eye-outline" size={20} color={textColor} />
          </TouchableOpacity>
        );
      }
    }
    return null;
  };
  //Dynamic style
  const containerStyle = {
    height,
    width,
    backgroundColor,
    borderColor: backgroundColor ? backgroundColor : Colors.Primary,
  };
  const inputStyle = {
    height: height * 0.85,
    width: width * 0.85,
    color: textColor,
  };
  return (
    <View style={[containerStyle, styles, style.container]}>
      <TextInput
        style={[style.input, inputStyle]}
        onChangeText={handleTextChange}
        secureTextEntry={secureText}
        placeholderTextColor={textColor}
        value={text}
        placeholder={placeholder}
      />
      {renderIcon()}
    </View>
  );
};

export default HTInput;
