
import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet, FlatList} from 'react-native';
import {HTText, HTWrapper, HTButton, HTBottomSheet} from '../../components';
import {Colors, Fonts} from '../../theme';
import {Dimensions, GlobalStyles} from '../../utils/constants';
import Styles from './RoundTripStyles/Styles';
const CabinClassBottomSheet = ({isVisible, onCancel}) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [cabinClassModal, setCabinClassModal] = useState(false);
    const cabinClassOptions = ['Economy', 'Premium Economy', 'Business', 'First'];
    const handleOptionClick = index => {
        setSelectedOption(index);
      };
const BottomSheetItem = ({text, selected, onPress, isLast}) => {
    return (
      <View>
        <TouchableOpacity style={Styles.cabinClass} onPress={onPress}>
          <HTText text={text} bold styles={Styles.bottomsheet} />
          <View
            style={[
              GlobalStyles.marginLeftMedium,
              GlobalStyles.contentCenter,
              Styles.cabinClassView,
            ]}>
            <View
              style={[
                Styles.selectedView,      {
                  backgroundColor: selected ? Colors.Primary : 'transparent',
                },
              ]}></View>
          </View>
        </TouchableOpacity>
        {isLast ? null : <View style={Styles.bordersLine}></View>}
      </View>
    );
  };
  return (
    <HTBottomSheet isVisible={isVisible} onCancel={onCancel}>
<View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
  <HTText
    text="Cabin Class"
    bold
    styles={{paddingVertical: 10, marginRight: 210}}
  />
  <HTText
    text="Cancel"
    textColor={Colors.Primary}
    bold
    styles={{paddingVertical: 10}}
  />
</View>
<FlatList
  data={cabinClassOptions}
  keyExtractor={item => item.toString()}
  renderItem={({item, index}) => (
    <BottomSheetItem
      text={item}
      selected={selectedOption === item}
      onPress={() => {
        handleOptionClick(item);
        setCabinClassModal(item);
        console.log('Selected value:', item);
      }}
      isLast={index === cabinClassOptions.length - 1}
    />
  )}
/>

<HTButton
  onClick={() => {
    console.log('Apply button pressed');
    setCabinClassModal(false);
  }}
  buttonType="fill"
  text="Apply"
  backgroundColor={Colors.Primary}
  textColor={Colors.White}
  height={Dimensions.Height * 0.05}
  width={Dimensions.Width * 0.9}
  style={[GlobalStyles.marginVerticalSmall]}
/>
</HTBottomSheet>)}
export default CabinClassBottomSheet