import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../../../utils/constants/styles/GlobalStyles';
import {Colors, Fonts} from '../../../theme';
import {HTText, HTButton} from '../../../components';
import {Images} from '../../../utils/media';
import Dimensions from '../../../utils/constants/dimensions/Dimensions';

const HTCardWithImage = ({
  cardSize,
  title = 'Card Title',
  titleColor = Colors.Black,
  description = 'Card Description',
  descriptionColor = Colors.Black,
  imageSource = Images.appImages.User,
  buttonText = 'Read More',
  isPressable,
  backgroundColor = Colors.White,
  onPress,
  primaryIcon = 'help-circle-outline',
  primaryIconData,
  secondaryIcon,
  secondaryIconData,
  buttonColor = Colors.Primary,
  buttonTextColor = Colors.White,
}) => {
  const containerStyle = {
    backgroundColor,
  };
  return (
    <View
      style={[
        cardSize === 'large'
          ? GlobalStyles.roundedRectangleLarge
          : GlobalStyles.roundedRectangleMedium,
        GlobalStyles.shadow,
        styles.container,
        containerStyle,
      ]}>
      <View>
        <Image
          source={imageSource}
          style={[
            cardSize === 'large'
              ? GlobalStyles.roundedSquareMedium
              : GlobalStyles.roundedSquareSmall,
            styles.image,
          ]}
        />
      </View>
      <View
        style={[
          styles.content,
          cardSize === 'large'
            ? GlobalStyles.contentLarge
            : GlobalStyles.squareMedium,
        ]}>
        <HTText
          text={title}
          bold
          size={Fonts.size.font13}
          textColor={titleColor}
        />
        {description.length > 100 ? (
          <HTText
            text={description.slice(0, 100) + ' ...'}
            size={Fonts.size.font10}
            textColor={descriptionColor}
          />
        ) : (
          <HTText
            text={description}
            size={Fonts.size.font10}
            textColor={descriptionColor}
          />
        )}
        <View style={GlobalStyles.marginVerticalSmall}>
          {primaryIconData && (
            <View
              style={[GlobalStyles.row, GlobalStyles.marginVerticalExtraSmall]}>
              <Ionicons name={primaryIcon} size={15} color={buttonColor} />
              <HTText
                text={primaryIconData}
                size={Fonts.size.font10}
                textColor={Colors.Gray}
              />
            </View>
          )}
          {secondaryIcon && (
            <View
              style={[GlobalStyles.row, GlobalStyles.marginVerticalExtraSmall]}>
              <Ionicons name={secondaryIcon} size={15} color={buttonColor} />
              <HTText
                text={secondaryIconData}
                size={Fonts.size.font10}
                textColor={Colors.Gray}
              />
            </View>
          )}
        </View>
        {isPressable && (
          <HTButton
            onClick={onPress}
            buttonType="fill"
            text={buttonText}
            textSize={Fonts.size.font10}
            textColor={buttonTextColor}
            backgroundColor={buttonColor}
            height={Dimensions.Height * 0.03}
            width={Dimensions.Width * 0.2}
            style={styles.button}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  content: {
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'flex-end',
  },
});
export default HTCardWithImage;
