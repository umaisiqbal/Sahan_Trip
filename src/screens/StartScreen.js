
import React from 'react';
import { View, Button,Text,Image } from 'react-native';
import { Images } from '../utils/media';
import { HTText } from '../components';
import {Colors, Fonts} from '../theme';
const StartScreen = ({ navigation }) => {
  return (
    <><View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: Colors.LightPrimary, paddingBottom: 390 }}>
      <Image
        source={Images.appImages.Flight}
        style={{ width: 200, height: 200, resizeMode: 'contain', marginBottom: -60, marginTop: 170 }} />
        <HTText
          size={Fonts.size.font12}
          text="Discover your dream flight easily"
          bold
          textColor='black'
          styles={{ paddingTop:230 }} />
          </View><View>
        
        <Button title="Login" onPress={() => navigation.navigate('Auth')} />
        <Button title="Signup" onPress={() => navigation.navigate('Auth', { screen: 'Signup' })} /></View></>
  );
};

export default StartScreen;
