import React, {useEffect, useState} from 'react';
import {
  Platform,
  stylesheet,
  Image,
  View,
  FlatList,
  LogBox,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/FontAwesome6';
import { HTWrapper, HTAlertWithIcon, HTButton, HTText,
} from '../../../components';
import {Images} from '../../../utils/media';
import {useNavigation} from '@react-navigation/native';

import {getDeviceInformation} from '../../../services/notifications/FirebaseNotifications';
import messaging from '@react-native-firebase/messaging';
import {Colors, Fonts} from '../../../theme';

import styles from '../../Search/RoundTripStyles/Styles';
import { GlobalStyles,Dimensions } from '../../../utils/constants';



const renderAdventureImages = ({item}) => {
  return (
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.flatlist} />
      <View style={{marginHorizontal: 12}}>
        <HTText size={Fonts.size.font14} text={item.description} />
        <HTText
          size={Fonts.size.font14}
          text={item.additionalText}
          style={[styles.additionalText, {}]}
        />
      </View>
    </View>
  );
};

const Dashboard = () => {

  const navigation = useNavigation();

  const getDeviceInfo = async () => {
    const {fcmToken, deviceType, deviceName} = await getDeviceInformation();
    console.log(fcmToken, deviceType, deviceName);
  };
  const handleLearnMore = () => {
    navigation.navigate('SearchScreen'); // Navigate to the SignUp screen
  };
  const handleSearchScreen = () => {
    navigation.navigate('TopTabScreens');
  };
  const renderSeparator = () => {
    return <View style={{width: 10}} />;
  };

  return (
    <ScrollView>
      <HTWrapper translucent={false}>
        <View
          style={[
           styles.marginVerticalExtraSmall,
            {paddingHorizontal: 10},
          ]}>
          <View style={styles.headerContainer}>
            <HTText
              size={Fonts.size.font16}
              text="Hello Ali,"
              bold
              styles={[{fontWeight: 800, marginTop: 20, marginRight: 'auto'}]}
            />

            <TouchableOpacity>
              <Icon1
                name="user-large"
                size={20}
                style={{
                  marginTop: 20,
                  color: Colors.Black,
                  backgroundColor: 'grey',
                  width: 30,
                  marginLeft: 30,
                  height: 30,
                  borderRadius: 20,
                  paddingLeft: 5,
                  paddingVertical: 5,
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 30}}>
            <HTText
              size={Fonts.size.font14}
              text="Welcome to Sahan Air"
              style={{color: Colors.LightBlack, paddingTop: 50}} // Add marginBottom
            />
          </View>

          <TouchableOpacity
            style={[
              styles.departure,
              {
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                marginVertical: 40,
                borderRadius: 10,
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              },
            ]}>
            <Icon name="search" size={20} style={{color: Colors.Black}} />
            <View style={{marginLeft: 10}}>
              <HTText
                size={Fonts.size.font14}
                text="Find a Flight"
                textColor={Colors.LightBlue}
                bold
                style={{
                  ...styles.customText,
                  fontWeight: 800,
                  textAlign: 'center',
                }}
              />
            </View>
          </TouchableOpacity>
          <HTText
           
            size={Fonts.size.font16}
            text="Your Wishlist starts here"
            bold
          />
          <HTText
        
            size={Fonts.size.font16}
            text="Save destinations all in one place"
          />
          <Image
            source={Images.appImages.Adventure}
            style={styles.Adventure}
          />
          <HTText
            styles={[{marginVertical: 5, color: Colors.LittleBlack}]}
            bold
            size={Fonts.size.font16}
            text="Adventure Achievements"
          />
          <HTText
            size={Fonts.size.font16}
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, Lorem ipsum dolor sit amet, consectetuer adipiscing elit,"
          />
          <HTButton
          onClick={handleLearnMore}
            buttonType="fill"
            text="Learn more"
            backgroundColor={Colors.LightPrimary}
            textColor={Colors.White}
            height={Dimensions.Height * 0.05}
            width={Dimensions.Width * 0.6}
            style={[
              GlobalStyles.marginVerticalLarge,
              GlobalStyles.marginHorizontalLarge,
              {marginVertical: 50},
            ]}
          />
          <HTText
            bold
            size={Fonts.size.font16}
            text="Get inspired"
            styles={{color: Colors.Blue}}
          />
          <HTText
            size={Fonts.size.font16}
            text="Discover your next adventure"
          />
        </View>
        <FlatList
          data={[
            {key: '1', image: Images.appImages.NewYork, description: 'NewYork'},
            {key: '2', image: Images.appImages.Dubai, description: 'Dubai'},
            {key: '3', image: Images.appImages.NewYork, description: 'NewYork'},
          ]}
          renderItem={renderAdventureImages}
          keyExtractor={item => item.key}
          horizontal
          ItemSeparatorComponent={renderSeparator}
          showsHorizontalScrollIndicator={false}
        />
        <View style={{marginHorizontal: 12}}>
          <HTText
            bold
            style={{marginHorizontal: 12}}
            size={Fonts.size.font16}
            text="Get ready to go in 2024."
          />
          <HTText
            size={Fonts.size.font16}
            text="Our tools and advice will help you search for our next flight."
          />
        </View>
        <FlatList
        contentContainerStyle={GlobalStyles.marginBottomLarge}
          
          data={[
            {
              key: '1',
              image: Images.appImages.lorem1,
              description: 'Lorem ipsum',
              additionalText: 'Lorem ipsm Lorem ipsm',
            },
            {
              key: '2',
              image: Images.appImages.lorem1,
              description: 'Lorem ipsum',
              additionalText: 'Lorem ipsm',
            },
          ]}
          renderItem={renderAdventureImages}
          keyExtractor={item => item.key}
          horizontal
          ItemSeparatorComponent={renderSeparator}
          showsHorizontalScrollIndicator={false}
        />
      </HTWrapper>
    </ScrollView>
  );
};



export default Dashboard;
