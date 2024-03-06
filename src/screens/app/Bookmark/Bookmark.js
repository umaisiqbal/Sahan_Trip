import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HTCardWithImageList, HTText} from '../../../components';
import data from '../../../utils/constants/data';
import {fetchLocation} from '../../../services/location';
import {GlobalStyles} from '../../../utils/constants';
import {Colors, Fonts} from '../../../theme';
const Bookmark = () => {
  return (
    <View style={styles.container}>
      <HTText
        size={Fonts.size.font28}
        text="Favourites Tab"
        bold
        textColor={Colors.White}
      />
      <HTText
        size={Fonts.size.font28}
        text="To be determined"
        bold
        textColor={Colors.White}
        styles={{paddingVertical: 130}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    marginHorizontal: 20,
    flex: 1,
    borderRadius: 20,
    backgroundColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gap: {paddingTop: 10, paddingLeft: 30},
  text: {
    color: 'white',
    fontSize: 12,
    paddingTop: 10,
  },
});

export default Bookmark;
