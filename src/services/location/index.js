import {Linking, Platform} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GetLocation from 'react-native-get-location';

export const fetchLocation = async () => {
  try {
    const permissionResult = await request(
      Platform.OS === 'android'
        ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION
        : PERMISSIONS.IOS.ACCESS_FINE_LOCATION,
      {
        title:
          "The app needs a 'Location' permission to work properly, please grant permission",
        message: 'Allow App to send access location?',
        buttonPositive: 'OK',
      },
    );

    if (permissionResult === 'granted') {
      try {
        const loc = await GetLocation.getCurrentPosition({
          enableHighAccuracy: true,
          timeout: 60000,
        });
        if (loc) {
          return {
            longitude: loc.longitude,
            latitude: loc.latitude,
            distance: 10,
          };
        } else {
          return 'Call function again';
        }
      } catch (error) {
        console.log(error, 'here now');
        return 'Call function again';
      }
    } else if (
      permissionResult === 'denied' ||
      permissionResult === 'blocked'
    ) {
      const previouslyDenied = await AsyncStorage.getItem(
        'locationPermissionDenied',
      );
      if (previouslyDenied === 'true') {
        if (Platform.OS === 'ios') {
          Linking.openURL('app-settings:');
        } else {
          Linking.openSettings();
        }
      } else {
        await AsyncStorage.setItem('locationPermissionDenied', 'true');
      }
    }
  } catch (error) {
    console.log('Error:', error.message);
  }
};
