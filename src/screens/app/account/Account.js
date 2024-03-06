import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import { Alert } from 'react-native';
import {LOGOUT} from '../../../store/actions/ActionTypes';
import {
  HTWrapper,
  HTAccountCard,
  HTPictureOption,
  HTText,
} from '../../../components';
import {Images} from '../../../utils/media';
import {GlobalStyles, Data, Dimensions} from '../../../utils/constants';
import {Colors, Fonts} from '../../../theme';
import RoundTripStyles from '../../Search/RoundTripStyles/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  uploadFromCamera,
  selectFromGallery,
} from '../../../services/media_upload';

const Account = () => {
  const dispatch = useDispatch();
  const [pictureModal, setPictureModal] = useState(false);

  const handleNavigation = navigate => {
    if (navigate !== false) {
      Alert.alert(
        'Sahan Air',
        'Are you sure you want to  your account?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
            textColor: 'black' ,
          },
          {
            text: 'Yes',
            onPress: () => {
              AsyncStorage.removeItem('userInfo').then(() => {
                dispatch({ type: LOGOUT, payload: null });
              });
            },
          },
        ],
        { cancelable: false }
      );
    }
  };

  const handlePictureUpload = async pictureOption => {
    let picture = '';
    setPictureModal(false);
    if (pictureOption === 'Camera') {
      picture = await uploadFromCamera();
    } else {
      picture = await selectFromGallery();
    }
    console.log(picture);
  };

  return (
    <HTWrapper>
      <View>
        <HTText
          styles={[
            GlobalStyles.marginTopLarge,
            {textAlign: 'center', marginVertical: 50},
          ]}
          size={Fonts.size.font18}
          text="Profile"
          bold
        />

        <Image
          source={Images.appImages.User}
          style={[
            GlobalStyles.roundMedium,
            styles.image,
            GlobalStyles.marginBottomSmall,
          ]}
        />

        <TouchableOpacity onPress={() => setPictureModal(true)}>
          <MaterialIcons name="edit" size={16} style={RoundTripStyles.edit} />
        </TouchableOpacity>
        <HTText
          styles={[GlobalStyles.marginBottomSmall, {textAlign: 'center'}]}
          size={Fonts.size.font16}
          text="Adam Smith"
          bold
        />
        <HTText
          styles={[
            GlobalStyles.marginBottomLarge,
            {textAlign: 'center', color: Colors.NormalWhite},
          ]}
          size={Fonts.size.font14}
          text="adam.smith@gmail.com"
        />
      </View>
      <View style={styles.card}>
        <HTAccountCard
          data={Data.Account}
          onClick={handleNavigation}
          backgroundColor={Colors.BackgroundColor}
          color={Colors.Primary}
        />
      </View>
      <HTPictureOption
        isVisible={pictureModal}
        onCancel={() => setPictureModal(false)}
        onSelect={handlePictureUpload}
      />
    </HTWrapper>
  );
};

export default Account;

const styles = StyleSheet.create({
  header: {
    marginVertical: Dimensions.Height * 0.05,
  },
  image: {
    resizeMode: 'contain',
    alignSelf: 'center',
    borderColor: Colors.LightPrimary,
    borderWidth: 5,
  },
  editButton: {
    position: 'absolute',
    right: 140,
    bottom: 10,
  },
});
