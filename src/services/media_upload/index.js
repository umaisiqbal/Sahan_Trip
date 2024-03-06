import {Platform, Linking, NativeModules} from 'react-native';
import {PERMISSIONS, request} from 'react-native-permissions';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ImageCropPicker = NativeModules.ImageCropPicker;

export const selectFromGallery = async () => {
  try {
    const androidVersion = Platform.constants.Release;
    let permissionToRequest;
    if (androidVersion >= 13) {
      permissionToRequest = PERMISSIONS.ANDROID.READ_MEDIA_IMAGES;
    } else {
      permissionToRequest = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE;
    }
    const permissionResult = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : permissionToRequest,
    );

    if (permissionResult === 'granted') {
      try {
        const response = await ImageCropPicker.openPicker({
          mediaType: 'photo',
          cropping: true,
          cropperCircleOverlay: true,
          forceJpg: true,
          width: 300,
          height: 300,
        });
        if (!response.didCancel && !response.error) {
          return response;
        } else {
          return 'User cancelled Image Selection';
        }
      } catch (error) {
        return error;
      }
    } else if (
      permissionResult === 'denied' ||
      permissionResult === 'blocked'
    ) {
      const previouslyDenied = await AsyncStorage.getItem(
        'galleryPermissionDenied',
      );
      if (previouslyDenied === 'true') {
        if (Platform.OS === 'ios') {
          Linking.openURL('app-settings:');
        } else {
          Linking.openSettings();
        }
      } else {
        await AsyncStorage.setItem('galleryPermissionDenied', 'true');
      }
    }
  } catch (error) {
    return error;
  }
};

export const uploadFromCamera = async () => {
  try {
    const permissionResult = await request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    );
    if (permissionResult === 'granted') {
      const response = await ImageCropPicker.openCamera({
        mediaType: 'photo',
        cropping: true,
        cropperCircleOverlay: true,
        forceJpg: true,
        width: 300,
        height: 300,
      });

      if (!response.didCancel && !response.error) {
        return response;
      } else {
        return 'Camera launch cancelled or error occurred.';
      }
    } else if (
      permissionResult === 'denied' ||
      permissionResult === 'blocked'
    ) {
      const previouslyDenied = await AsyncStorage.getItem(
        'cameraPermissionDenied',
      );
      if (previouslyDenied === 'true') {
        if (Platform.OS === 'ios') {
          Linking.openURL('app-settings:');
        } else {
          Linking.openSettings();
        }
      } else {
        await AsyncStorage.setItem('cameraPermissionDenied', 'true');
      }
    }
  } catch (error) {
    return error;
  }
};
