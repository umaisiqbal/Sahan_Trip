import React from 'react';
import {FlatList, TouchableOpacity, StyleSheet, View} from 'react-native';
import {HTText} from '../..';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../../../utils/constants';
import {Colors, Fonts} from '../../../theme';

const HTAccountCard = ({
  data,
  onClick,
  backgroundColor = Colors.DialogColor,
  color = Colors.Black,
}) => {
  const background = {
    backgroundColor: backgroundColor,
  };
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      style={[
        styles.list,
        background,
        GlobalStyles.shadow,
        GlobalStyles.marginHorizontalLarge,
      ]}
      data={data}
      ItemSeparatorComponent={<View style={styles.seperator} />}
      renderItem={({item: item}) => (
        <TouchableOpacity
          onPress={() => onClick(item.navigate)}
          style={[GlobalStyles.marginMedium, GlobalStyles.row, styles.content]}>
          <View style={[GlobalStyles.row, GlobalStyles.marginMedium,GlobalStyles.marginLeftSmall]}>
            <Ionicons name={item.icon} size={18} color={color}  />
            <HTText
              text={item.title}
              bold
              size={Fonts.size.font13}
              textColor={color}
              styles={GlobalStyles.marginLeftLarge}
            />
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={20}
            color={Colors.Gray}
          />
        </TouchableOpacity>
      )}
    />
  );
};
export default HTAccountCard;

const styles = StyleSheet.create({
  content: {
    justifyContent: 'space-between',
  },
  list: {
    borderRadius: 10,
  },
  seperator: {
    height: 2,
    width: '100%',
    backgroundColor: Colors.White,
  },
});
