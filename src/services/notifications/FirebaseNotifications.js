import {Platform} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';

export const getDeviceInformation = async () => {
  try {
    let fcmToken = await AsyncStorage.getItem('FCMToken');
    let deviceType = Platform.OS;
    let deviceName = await DeviceInfo.getDeviceName();

    if (!fcmToken) {
      if (Platform.OS === 'ios') {
        const authStatus = await messaging().requestPermission();
        if (authStatus === messaging.AuthorizationStatus.AUTHORIZED) {
          await messaging().registerDeviceForRemoteMessages();
        } else {
          throw new Error('User has declined permissions');
        }
      }

      fcmToken = await messaging().getToken();

      console.log('token from fcm', fcmToken);

      if (fcmToken) {
        await AsyncStorage.setItem('FCMToken', fcmToken);
      }
    }

    return {fcmToken, deviceType, deviceName};
  } catch (error) {
    console.error('Device information retrieval error:', error);
    throw error;
  }
};
