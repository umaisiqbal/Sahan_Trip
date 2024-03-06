import React from 'react';
import { View, TouchableOpacity, ImageBackground, Image,} from 'react-native';
import { HTInput,HTText, HTWrapper,} from '../../../components';
import {Colors, Fonts} from '../../../theme';
import {Dimensions, GlobalStyles} from '../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {LOGIN_SUCCESS} from '../../../store/actions/ActionTypes';
import {Images} from '../../../utils/media';
import {HTButton} from '../../../components';
import {useNavigation} from '@react-navigation/native'; 
import Styles from '../Styles';
const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation(); // Get the navigation object
  const handleLogin = () => {
    let info = {name: 'John', email: 'john@example.com'};
    AsyncStorage.setItem('userInfo', JSON.stringify(info)).then(() => {
      dispatch({type: LOGIN_SUCCESS, payload: info});
    });
  };
  const handleSignUp = () => {
    navigation.navigate('SignUp'); // Navigate to the SignUp screen
  };
  const handleChange = () => {
    console.log('User is typing something');
  };
  return (
    <HTWrapper>
      <ImageBackground
        source={Images.appImages.AuthBackGround}
        style={{flex: 1}}>
        <View
          style={[
         Styles.card
          ]}>
          <View
            style={[
              GlobalStyles.marginHorizontalLarge,
             Styles.card1
            ]}>
            <Image
              source={Images.appImages.Rectangle}
              style={[Styles.image]}
            />
            <View style={{flexDirection: 'column', width: 300}}>
              <HTText
                size={Fonts.size.font12}
                text="Email"
              
                bold
                textColor={Colors.LightestGray}
                styles={Styles.email}
              />
              <HTInput
                fieldType="email"
                placeholder="Enter your email"
                textColor="rgba(255, 255, 255, 0.9)"
                styles={[
                 
                  GlobalStyles.marginVerticalMedium,
                 Styles.emailInput
                ]}
                onChangeText={() => handleChange()}
              />
              <HTText
                size={Fonts.size.font12}
                text="Password"
                bold
                textColor={Colors.LightestGray}
                styles={Styles.password}
              />
              <HTInput
                fieldType="password"
                placeholder="Enter your password"
                textColor="rgba(255, 255, 255, 0.9)"
                styles={[
                  GlobalStyles.marginVerticalMedium,
                  Styles.passwordInput,
                ]}
                onChangeText={() => handleChange()}
              />
            </View>
            <HTButton
              onClick={handleLogin}
              buttonType="fill"
              text="Login"
              backgroundColor={Colors.Primary}
              textColor={Colors.White}
              bold
              height={Dimensions.Height * 0.05}
              width={Dimensions.Width * 0.5}
              style={[GlobalStyles.marginVerticalSmall]}
              iconName="mail"
            />

            <View style={Styles.loginButton}>
              <HTText
                size={Fonts.size.fontt18}
                text="Don't have an account? "
                textColor={Colors.White}
              />
              <TouchableOpacity onPress={handleSignUp}>
                <HTText
                  size={Fonts.size.font14}
                  text="SignUp"
                  bold
                  textColor={Colors.White}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </HTWrapper>
  );
};
export default Login;
