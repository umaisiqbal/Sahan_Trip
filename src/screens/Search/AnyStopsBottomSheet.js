import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {HTText, HTWrapper, HTButton, HTBottomSheet} from '../../components';
import {Colors, Fonts} from '../../theme';
import {Dimensions, GlobalStyles} from '../../utils/constants';
import RoundTripStyles from './RoundTripStyles/Styles';
const AnyStopsBottomSheet = ({isVisible, onCancel}) => {
  const [selectedStopsOption, setSelectedStopsOption] = useState(null);
  const stopsOptions = ['Any stops', '1 stop or nonstop', 'Nonstop only'];

  const BottomSheetStopsItem = ({text, selected, onPress, isLast}) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            borderBottomColor: 'gray',
            justifyContent: 'space-between',
            paddingVertical: 5,
            width: '85%',
            marginVertical: 10,
          }}
          onPress={onPress}>
          <HTText text={text} bold styles={RoundTripStyles.bottomsheet} />
          <View
            style={[
              GlobalStyles.marginLeftMedium,
              GlobalStyles.contentCenter,

              {
                width: Dimensions.Width * 0.04,
                height: Dimensions.Height * 0.018,
                borderWidth: 0.5,
                marginHorizontal: 40,
                borderRadius: 9,
                borderColor: '#575656',
                flexDirection: 'row',
              },
            ]}>
            <View
              style={{
                width: Dimensions.Width * 0.025,
                height: Dimensions.Height * 0.012,
                borderRadius: 5,
                backgroundColor: selected ? Colors.Primary : 'transparent',
              }}></View>
          </View>
        </TouchableOpacity>
        {isLast ? null : (
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: Colors.LightGray,
              width: '74%',
              marginLeft: 10,
            }}></View>
        )}
      </View>
    );
  };

  return (
    <HTBottomSheet isVisible={isVisible} onCancel={onCancel}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <HTText
          text="Stops"
          bold
          styles={{paddingVertical: 10, marginRight: 250}}
        />
        <HTText
          text="Cancel"
          textColor={Colors.Primary}
          bold
          styles={{paddingVertical: 10}}
        />
      </View>
      <FlatList
        data={stopsOptions}
        keyExtractor={item => item.toString()}
        renderItem={({item, index}) => (
          <BottomSheetStopsItem
            text={item}
            selected={selectedStopsOption === item}
            onPress={() => {
              setSelectedStopsOption(item);
              console.log('Selected stops value:', item);
            }}
            isLast={index === stopsOptions.length - 1}
          />
        )}
      />

      <HTButton
        onClick={() => {
          console.log('Apply stops button pressed');
          onCancel();
        }}
        buttonType="fill"
        text="Apply"
        backgroundColor={Colors.Primary}
        textColor={Colors.White}
        height={Dimensions.Height * 0.05}
        width={Dimensions.Width * 0.9}
        style={[GlobalStyles.marginVerticalMedium]}
      />
    </HTBottomSheet>
  );
};

export default AnyStopsBottomSheet;
