import React from 'react';
import {View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import styles from './styles'
import { Colors, Fonts } from '../../../theme';
import { Images } from '../../../utils/media';
import { HTButton,HTText } from '../../../components';
import { Dimensions ,GlobalStyles} from '../../../utils/constants';

const StartScreen = () => {
  const navigation = useNavigation();
  const handleLogin = () => {
    console.log('running');
    navigation.navigate('Login');
  };
  const handleSignUp = () => {
    console.log('running');
    navigation.navigate('SignUp');
  };

  return (
    <>
      <View
        style={styles.wrapper}>
        <Image
          source={Images.appImages.Flight}
          style={styles.flight}
        />
        <HTText
          size={Fonts.size.font28}
          text="Discover your dream flight easily"
          bold
          textColor={Colors.White}
          styles={[styles.heading , GlobalStyles.marginBottomLarge]}
        />

        <HTButton
          onClick={handleLogin}
          buttonType="fill"
          text="Login"
          backgroundColor={Colors.LightestGray}
          textColor={Colors.Black}
          bold
          height={Dimensions.Height * 0.05}
          width={Dimensions.Width * 0.6}
          style={[
            GlobalStyles.marginBottomMedium,
            GlobalStyles.marginTopLarge,
            styles.buttons
          ]}
        />
        <HTButton
          onClick={handleSignUp}
          buttonType="fill"
          text="SignUp"
          backgroundColor={Colors.LightestPrimary}
          textColor={Colors.White}
          bold
          height={Dimensions.Height * 0.05}
          width={Dimensions.Width * 0.6}
          style={[
            GlobalStyles.marginVerticalExtraSmall,
            styles.buttons,
          ]}
        />
      </View>
    </>
  );
};

export default StartScreen;
