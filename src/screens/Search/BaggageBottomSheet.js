// BaggageBottomSheet.js

import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {HTText, HTWrapper, HTButton, HTBottomSheet} from '../../components';
import {Colors, Fonts} from '../../theme';
import {Dimensions, GlobalStyles} from '../../utils/constants';
import RoundTripStyles from './RoundTripStyles/Styles';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BaggageBottomSheet = ({isVisible, onCancel}) => {
  const [carryOnCount, setCarryOnCount] = useState(0);
  const [checkedBagsCount, setCheckedBagsCount] = useState(0);
  const [carryOnCount1, setCarryOnCount1] = useState(0);
  const [checkedBagsCount1, setCheckedBagsCount1] = useState(0);

  const incrementCarryOn = () => {
    setCarryOnCount(carryOnCount + 1);
  };

  const decrementCarryOn = () => {
    if (carryOnCount > 0) {
      setCarryOnCount(carryOnCount - 1);
    }
  };

  const incrementCarryOn1 = () => {
    setCarryOnCount1(carryOnCount1 + 1);
  };

  const decrementCarryOn1 = () => {
    if (carryOnCount1 > 0) {
      setCarryOnCount1(carryOnCount1 - 1);
    }
  };

  const incrementCheckedBags = () => {
    setCheckedBagsCount(checkedBagsCount + 1);
  };

  const decrementCheckedBags = () => {
    if (checkedBagsCount > 0) {
      setCheckedBagsCount(checkedBagsCount - 1);
    }
  };

  const incrementCheckedBags1 = () => {
    setCheckedBagsCount1(checkedBagsCount1 + 1);
  };

  const decrementCheckedBags1 = () => {
    if (checkedBagsCount > 0) {
      setCheckedBagsCount1(checkedBagsCount1 - 1);
    }
  };

  return (
    <HTBottomSheet isVisible={isVisible} onCancel={onCancel}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <HTText
          text="Baggage"
          bold
          styles={{paddingVertical: 10, marginRight: 190}}
        />
        <HTText
          text="Cancel"
          textColor={Colors.Primary}
          bold
          styles={{paddingVertical: 10}}
        />
      </View>

      <View
        style={[
          RoundTripStyles.bottomSheetOption,
          {flexDirection: 'row', alignItems: 'center'},
        ]}>
        <Text style={[RoundTripStyles.bottomsheet, {color: Colors.Black}]}>
          Carry-on Baggage
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 120}}>
          <TouchableOpacity
            onPress={decrementCarryOn}
            style={[GlobalStyles.contentCenter, RoundTripStyles.decButton]}>
            <Feather
              name="minus"
              size={10}
              style={[RoundTripStyles.FontAwesomeICons, {color: Colors.Black}]}
            />
          </TouchableOpacity>
          <Text style={RoundTripStyles.bottomsheet}>{carryOnCount}</Text>
          <TouchableOpacity
            onPress={incrementCarryOn}
            style={[
              GlobalStyles.contentCenter,
              RoundTripStyles.decButton,
              {
                backgroundColor: Colors.Primary,
              },
            ]}>
            <Feather name="plus" size={14} style={{color: Colors.White}} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: Colors.LightGray,
          marginTop: 10,
          width: 340,
        }}
      />
      <View
        style={[
          RoundTripStyles.bottomSheetOption,
          {flexDirection: 'row', alignItems: 'center', paddingTop: 10},
        ]}>
        <Text style={[RoundTripStyles.bottomsheet, {color: Colors.Black}]}>
          Checked bags
        </Text>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 145}}>
          <TouchableOpacity
            onPress={decrementCarryOn1}
            style={[GlobalStyles.contentCenter, RoundTripStyles.decButton]}>
            <Feather
              name="minus"
              size={10}
              style={[RoundTripStyles.FontAwesomeICons, {color: Colors.Black}]}
            />
          </TouchableOpacity>
          <Text style={RoundTripStyles.bottomsheet}>{carryOnCount1}</Text>
          <TouchableOpacity
            onPress={incrementCarryOn1}
            style={[
              GlobalStyles.contentCenter,
              RoundTripStyles.decButton,
              {
                backgroundColor: Colors.Primary,
              },
            ]}>
            <Feather name="plus" size={14} style={{color: Colors.White}} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={[
          GlobalStyles.marginLeftSmall,
          GlobalStyles.marginBottomMedium,
          GlobalStyles.marginTopMedium,
          {flexDirection: 'row', marginHorizontal: 150, alignItems: 'center'},
        ]}>
        <View
          style={{
            backgroundColor: Colors.Primary,
            borderRadius: 20,
            paddingHorizontal: 7,
            paddingVertical: 4,
            width: Dimensions.Width * 0.05,
            height: Dimensions.Width * 0.05,
            flexDirection: 'row',
          }}>
          <FontAwesome5
            name="exclamation"
            size={8}
            style={{color: Colors.White}}
          />
        </View>
        <HTText
          text=" Baggage per passenger"
          style={{
            color: Colors.White,
            fontSize: Fonts.size.font20,
          }}></HTText>
      </View>
      <View>
        <HTButton
          onClick={() => {
            console.log('Apply baggage button pressed');
            onCancel();
          }}
          buttonType="fill"
          text="Apply"
          backgroundColor={Colors.Primary}
          textColor={Colors.White}
          height={Dimensions.Height * 0.05}
          width={Dimensions.Width * 0.9}
          style={[
            GlobalStyles.marginVerticalSmall,
            GlobalStyles.marginLeftMedium,
          ]}
        />
      </View>
    </HTBottomSheet>
  );
};

export default BaggageBottomSheet;
