import React, {useEffect, useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import Navigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_SUCCESS} from '../store/actions/ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image , View} from 'react-native';
import { Images } from '../utils/media';
import { Dimensions } from '../utils/constants';
const Container = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
    },
  };

  useEffect(() => {
    AsyncStorage.getItem('userInfo').then(userInfo => {
      if (userInfo != null) {
        dispatch({type: LOGIN_SUCCESS, payload: JSON.parse(userInfo)});
      }
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
    return () => {};
  }, [dispatch]);

  if (loading) {
   
    return (
      <View style={{flex:1, justifyContent:"center" , alignItems : "center"}}>

      <Image
  source={Images.appImages.logo}
  style={{ width:Dimensions.Width*0.8}} // Adjust width as needed
  resizeMode="contain"
/>
      </View>
    );
  }

  
  return (
    <NavigationContainer theme={MyTheme}>
      {user ? <Navigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default Container;
