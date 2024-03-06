import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import {HTButton, HTInput, HTText, HTWrapper} from '../../../components';
import {Colors, Fonts} from '../../../theme';
import CountryPicker from 'react-native-country-picker-modal';
import {Dimensions, GlobalStyles} from '../../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux';
import {LOGIN_SUCCESS} from '../../../store/actions/ActionTypes';
import {Images} from '../../../utils/media';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import Styles from '../Styles';
const SignUp = ({}) => {
  const [Country, setCountry] = useState('PK');
  const [Code, setCode] = useState('92');
  const [ShowCountryList, setShowCountryList] = useState(false);
  const dispatch = useDispatch();
  const handleLogin = () => {
    let info = {name: 'John', email: 'john@example.com'};
    AsyncStorage.setItem('userInfo', JSON.stringify(info)).then(() => {
      dispatch({type: LOGIN_SUCCESS, payload: info});
    });
  };
  const handleSignUp = () => {
    let info = {name: 'John', email: 'john@example.com'};
    AsyncStorage.setItem('userInfo', JSON.stringify(info)).then(() => {
      dispatch({type: LOGIN_SUCCESS, payload: info});
    });
  };
  const handleChange = () => {
    console.log('User is typing something');
  };
  return (
    <HTWrapper>
      <ImageBackground
        source={Images.appImages.AuthBackGround}
        style={{flex: 1}}>
        <View style={[Styles.card]}>
          <View style={[GlobalStyles.marginHorizontalLarge, Styles.card1]}>
            <Image source={Images.appImages.Rectangle} style={Styles.image} />
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
                backgroundColor="#FFFFFF"
                textColor={Colors.LightestGray}
                width={Dimensions.Width * 0.8}
                styles={[
                  GlobalStyles.marginVerticalMedium,
                  {opacity: 0.59, alignSelf: 'center'},
                ]}
                onChangeText={() => handleChange()}
              />
              <HTText
                size={Fonts.size.font12}
                text="Phone Number"
                bold
                textColor={Colors.LightestGray}
                styles={{marginHorizontal: 10, marginTop: 10}}
              />
              <View style={[GlobalStyles.row]}>
                <TouchableOpacity
                  onPress={e => setShowCountryList(true)}
                  style={[
                    {
                      marginLeft: 21,

                      paddingHorizontal: Dimensions.Width * 0.01,
                      height: Dimensions.Height * 0.06,
                      opacity: 0.59,
                      width: Dimensions.Width * 0.2,
                      borderRadius: Dimensions.Width * 0.05,
                      paddingVertical: Dimensions.Width * 0.02,
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginRight: 5,
                      marginLeft: 3,
                      backgroundColor: Colors.LightestGray,
                    },
                  ]}>
                  <CountryPicker
                    withFilter
                    withFlag
                    withCallingCode
                    withAlphaFilter={false}
                    withCurrencyButton={false}
                    countryCode={Country}
                    modalProps={{presentationStyle: 'pageSheet'}}
                    onSelect={country => {
                      const {callingCode, cca2} = country;
                      setCountry(cca2);
                      setCode(callingCode);
                      setShowCountryList(false);
                    }}
                    visible={ShowCountryList}
                  />
                  <HTText
                    text={'+' + Code}
                    textColor={Colors.LightestGray}
                    size={Fonts.size.font10}
                    styles={{marginLeft: -7}}
                  />
                </TouchableOpacity>
                <HTInput
                  width={Dimensions.Width * 0.6}
                  styles={[
                    GlobalStyles.marginVerticalMedium,
                    Styles.phoneInput,
                  ]}
                  backgroundColor={Colors.DialogColor}
                  textColor={Colors.LightestGray}
                  keyboardType="numeric"
                  style={[GlobalStyles, styles.numberInput]}
                  placeholder="Enter your number"
                  onChangeText={() => handleChange()}
                />
              </View>
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
              text="Register"
              backgroundColor={Colors.Primary}
              textColor={Colors.White}
              bold
              height={Dimensions.Height * 0.05}
              width={Dimensions.Width * 0.5}
              style={GlobalStyles.marginVerticalSmall}
              iconName="mail"
            />

            <View style={Styles.loginButton}>
              <HTText
                size={Fonts.size.font14}
                text="Already have an account? "
                textColor={Colors.White}
              />
              <TouchableOpacity onPress={handleSignUp}>
                <HTText
                  size={Fonts.size.font14}
                  text="Login"
                  bold
                  textColor={Colors.White}
                  style={[{marginBottom: -20}]}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </HTWrapper>
  );
};
export default SignUp;
