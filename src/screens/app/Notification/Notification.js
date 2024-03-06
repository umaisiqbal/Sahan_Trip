import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {HTCardWithImageList, HTText} from '../../../components';
import {Colors, Fonts} from '../../../theme';
import RoundTripStyles from '../../Search/RoundTripStyles/Styles';

import {GlobalStyles} from '../../../utils/constants';
import Styles from './Styles';
const Notification = () => {
  const handleMarkAsRead = () => {
    console.log('Mark as Read button pressed');
  };

  return (
    <View style={Styles.container}>
      <HTText
        size={Fonts.size.font16}
        text="notifications"
        bold
        styles={[GlobalStyles.marginVerticalExtraLarge, {}]}
      />

      <TouchableOpacity
        style={[Styles.notification, {marginVertical: 10}]}>
        <View style={Styles.notificationContent}>
          <View style={Styles.textContainer}>
            <HTText
              size={Fonts.size.font14}
              text="Booking Confirmed"
              bold
              textColor={Colors.Primary}
              style={[{fontWeight: 'bold'}]}
            />
            <HTText
              size={Fonts.size.font12}
              text="Dear Ali, your booking is confirmed for 9P671 (JED-MED) on 25 July at 9:45 PM."
              textColor={Colors.LightBlue}
              
            />
          </View>
          <TouchableOpacity
            style={[
              Styles.markButton,
              {backgroundColor: Colors.Primary},
            ]}
            onPress={handleMarkAsRead}>
            <HTText
              size={Fonts.size.font8}
              text="Mark as read"
              bold
              textColor="white"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>

      {/* Second TouchableOpacity */}
      <TouchableOpacity
        style={[Styles.notification, {marginVertical: 10}]}>
        <View style={Styles.notificationContent}>
          <View style={Styles.textContainer}>
            <HTText
              size={Fonts.size.font14}
              text=" Booking Confirmed"
              bold
              textColor={Colors.Primary}
              style={[RoundTripStyles.customText, {fontWeight: 'bold'}]}
            />
            <HTText
              size={Fonts.size.font12}
              text="Dear Ali, your booking is confirmed for 9P331 (MAK-JED) on 20 July at 3:45 PM."
              textColor={Colors.LightBlue}
              style={[RoundTripStyles.customText]}
            />
          </View>
          <TouchableOpacity
            style={[
              Styles.markButton,
              {backgroundColor: Colors.Primary},
            ]}
            onPress={handleMarkAsRead}>
            <HTText
              size={Fonts.size.font8}
              text="Mark as read"
              bold
              textColor="white"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[Styles.notification, {marginVertical: 10}]}>
        <View style={Styles.notificationContent}>
          <View style={Styles.textContainer}>
            <HTText
              size={Fonts.size.font14}
              text="Booking Cancelled"
              bold
              textColor={Colors.Primary}
              style={[RoundTripStyles.customText, {fontWeight: 'bold'}]}
            />
            <HTText
              size={Fonts.size.font12}
              text="Dear Ali, your booking is cancelled for 9P331 (MAK-JED) on 10 July at 3:45 PM."
              textColor={Colors.LightBlue}
              style={[RoundTripStyles.customText]}
            />
          </View>
          <TouchableOpacity
            style={[
              Styles.markButton,
              {backgroundColor: Colors.Primary},
            ]}
            onPress={handleMarkAsRead}>
            <HTText
              size={Fonts.size.font8}
              text="Mark as read"
              bold
              textColor="white"
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Notification;
