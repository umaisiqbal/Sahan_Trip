// TravelersComponent.js

import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {HTText, HTWrapper, HTButton, HTBottomSheet} from '../../components';
import {Colors, Fonts} from '../../theme';
import {Dimensions, GlobalStyles} from '../../utils/constants';
import RoundTripStyles from './RoundTripStyles/Styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const TravelerBottomSheet = ({isVisible, onCancel}) => {
  const [adultsCount, setAdultsCount] = useState(0);
  const [studentsCount, setStudentsCount] = useState(0);
  const [seniorsCount, setSeniorsCount] = useState(0);
  const [youthsCount, setYouthsCount] = useState(0);
  const [toddlersCount, setToddlersCount] = useState(0);
  const [infantsCount, setInfantsCount] = useState(0);

  const incrementCount = setCount => {
    setCount(prevCount => prevCount + 1);
  };

  const decrementCount = setCount => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  return (
    <HTBottomSheet isVisible={isVisible} onCancel={onCancel}>
      <View>
        <View
          style={[
            GlobalStyles.marginBottomLarge,
            {flexDirection: 'row', justifyContent: 'space-between'},
          ]}>
          <HTText text="Travelers" bold styles={{paddingVertical: 10}} />
          <HTText
            text="Cancel"
            textColor={Colors.Primary}
            bold
            styles={{paddingVertical: 10}}
          />
        </View>

        {[
          {type: 'Adults', count: adultsCount, setCount: setAdultsCount},
          {type: 'Students', count: studentsCount, setCount: setStudentsCount},
          {type: 'Seniors', count: seniorsCount, setCount: setSeniorsCount},
          {type: 'Youths', count: youthsCount, setCount: setYouthsCount},
          {
            type: 'Toddlers in own seat',
            count: toddlersCount,
            setCount: setToddlersCount,
          },
          {
            type: 'Infants on lap',
            count: infantsCount,
            setCount: setInfantsCount,
          },
        ].map((traveler, index, array) => (
          <View key={traveler.type}>
            <View
              style={[
                GlobalStyles.marginTopMedium,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  alignContent: 'center',
                },
              ]}>
              <View
                style={[
                  RoundTripStyles.bottomSheetOption,
                  {flexDirection: 'row'},
                ]}>
                <HTText
                  text={traveler.type}
                  textColor={Colors.Black}
                  bold
                  size={Fonts.size.font14}
                />
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity
                  onPress={() => decrementCount(traveler.setCount)}
                  style={[
                    GlobalStyles.contentCenter,
                    RoundTripStyles.decButton,
                  ]}>
                  <Feather
                    name="minus"
                    size={10}
                    style={[
                      RoundTripStyles.FontAwesomeICons,
                      {color: Colors.Black},
                    ]}
                  />
                </TouchableOpacity>
                <Text style={RoundTripStyles.bottomsheet}>
                  {traveler.count}
                </Text>
                <TouchableOpacity
                  onPress={() => incrementCount(traveler.setCount)}
                  style={[
                    GlobalStyles.contentCenter,
                    RoundTripStyles.decButton,
                    {
                      backgroundColor: Colors.Primary,
                    },
                  ]}>
                  <Feather
                    name="plus"
                    size={14}
                    style={{color: Colors.White}}
                  />
                </TouchableOpacity>
              </View>
            </View>

            {index < array.length - 1 && (
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: Colors.LightGray,
                  paddingVertical: 5,
                }}
              />
            )}
          </View>
        ))}

        <HTButton
          onClick={() => {
            console.log('Apply travelers button pressed');
            onCancel();
          }}
          buttonType="fill"
          text="Apply"
          backgroundColor={Colors.Primary}
          textColor={Colors.White}
          height={Dimensions.Height * 0.05}
          width={Dimensions.Width * 0.9}
          style={[
            GlobalStyles.marginVerticalMedium,
            GlobalStyles.marginLeftMedium,
            GlobalStyles.marginBottomLarge,
            GlobalStyles.marginTopLarge,
            {backgroundColor: 'black'},
          ]}
        />
      </View>
    </HTBottomSheet>
  );
};

export default TravelerBottomSheet;
