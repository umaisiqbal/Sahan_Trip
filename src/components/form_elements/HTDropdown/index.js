/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HTButton, HTText} from '../../../components';
import {Colors, Fonts} from '../../../theme';
import styles from './styles';
import Dimensions from '../../../utils/constants/dimensions/Dimensions';
import GlobalStyles from '../../../utils/constants/styles/GlobalStyles';

const HTDropdown = ({items, heading, onSelect, onCancel, open}) => {
  const [value, setValue] = useState('');
  const handleSelect = item => {
    if (item !== 'Select option') {
      setValue(item);
    }
  };
  const onConfirm = () => {
    onSelect(value);
    onCancel();
  };

  return (
    <Modal isVisible={open}>
      <View
        style={[styles.dropdownContainer, GlobalStyles.roundedRectangleXLarge]}>
        <View style={styles.dropdownHeader}>
          <HTText
            bold
            text={heading}
            textColor={Colors.Primary}
            size={Fonts.size.font13}
            styles={styles.heading}
          />
          <TouchableOpacity onPress={onCancel}>
            <Ionicons
              name="close-circle-outline"
              color={Colors.Primary}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          data={items}
          contentContainerStyle={{padding: 0}}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => handleSelect(item)}
              style={styles.dropdownItems}>
              <HTText
                bold
                text={item}
                textColor={Colors.DarkerGray}
                size={Fonts.size.font12}
              />
              {item === value && <View style={styles.activeItem} />}
            </TouchableOpacity>
          )}
        />
        <HTButton
          onClick={onConfirm}
          buttonType="filled"
          backgroundColor={Colors.Primary}
          textColor={Colors.White}
          text={'OK'}
          width={Dimensions.Width * 0.1}
          height={Dimensions.Height * 0.04}
          style={styles.confirmButton}
        />
      </View>
    </Modal>
  );
};

export default HTDropdown;
