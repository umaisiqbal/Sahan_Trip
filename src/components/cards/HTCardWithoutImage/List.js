import React from 'react';
import {FlatList, View} from 'react-native';
import GlobalStyles from '../../../utils/constants/styles/GlobalStyles';
import {HTCardWithoutImage} from '../../../components';
import {Colors} from '../../../theme';

const HTCardWithoutImageList = ({data, isHorizontal = false, handlePress}) => {
  return (
    <FlatList
      horizontal={isHorizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({item: cardItem, index}) => (
        <View style={GlobalStyles.marginVerticalMedium}>
          <HTCardWithoutImage
            cardSize="large"
            onPress={handlePress}
            isPressable={true}
            buttonText={'Logout'}
            backgroundColor={Colors.White}
            title={cardItem.title}
            titleColor={Colors.Primary}
            description={cardItem.description}
            descriptionColor={Colors.DarkerGray}
            primaryIcon="mail"
            primaryIconData="Icon 1 Data Long"
            secondaryIcon="call"
            secondaryIconData="Icon 2 Data Long"
            buttonColor={Colors.LightPrimary}
            buttonTextColor={Colors.White}
          />
        </View>
      )}
    />
  );
};

export default HTCardWithoutImageList;
