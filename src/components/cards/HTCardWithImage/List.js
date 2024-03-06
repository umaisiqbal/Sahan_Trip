import React from 'react';
import {FlatList, View} from 'react-native';
import GlobalStyles from '../../../utils/constants/styles/GlobalStyles';
import {HTCardWithImage} from '../..';
import {Colors} from '../../../theme';

const HTCardWithImageList = ({data, isHorizontal = false, handlePress}) => {
  return (
    <FlatList
      horizontal={isHorizontal}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({item: cardItem, index}) => (
        <View style={GlobalStyles.marginVerticalMedium}>
          <HTCardWithImage
            cardSize="large"
            onPress={handlePress}
            isPressable={cardItem.isPressable}
            buttonText={cardItem.pressableText}
            backgroundColor={Colors.White}
            imageSource={cardItem.imageSource}
            title={cardItem.title}
            titleColor={Colors.SuccessColor}
            description={cardItem.description}
            descriptionColor={Colors.DarkerGray}
            primaryIcon={cardItem.primaryIcon}
            primaryIconData={cardItem.primaryIconData}
            secondaryIcon={cardItem.secondaryIcon}
            secondaryIconData={cardItem.secondaryIconData}
            buttonColor={Colors.SuccessColor}
            buttonTextColor={Colors.White}
          />
        </View>
      )}
    />
  );
};

export default HTCardWithImageList;
