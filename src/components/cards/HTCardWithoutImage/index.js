import React from 'react';
import {View, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyles from '../../../utils/constants/styles/GlobalStyles';
import {Colors, Fonts} from '../../../theme';
import {HTText, HTButton} from '../../../components';
import Dimensions from '../../../utils/constants/dimensions/Dimensions';

const HTCardWithoutImage = ({
  cardSize,
  title = 'Card Title',
  titleColor = Colors.Black,
  description = 'Card Description',
  descriptionColor = Colors.Black,
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
      <View style={GlobalStyles.marginMedium}>
        <HTText
          text={title}
          bold
          size={Fonts.size.font14}
          textColor={titleColor}
          styles={GlobalStyles.marginVerticalSmall}
        />
        {description.length > 120 ? (
          <HTText
            text={description.slice(0, 120) + ' ...'}
            size={Fonts.size.font12}
            textColor={descriptionColor}
          />
        ) : (
          <HTText
            text={description}
            size={Fonts.size.font12}
            textColor={descriptionColor}
          />
        )}
        <View
          style={[
            GlobalStyles.marginVerticalMedium,
            GlobalStyles.row,
            styles.iconsSpacing,
          ]}>
          {primaryIconData && (
            <View
              style={[GlobalStyles.row, GlobalStyles.marginVerticalExtraSmall]}>
              <Ionicons name={primaryIcon} size={20} color={buttonColor} />
              <HTText
                text={' ' + primaryIconData}
                size={Fonts.size.font12}
                textColor={Colors.Gray}
              />
            </View>
          )}
          {secondaryIcon && (
            <View
              style={[GlobalStyles.row, GlobalStyles.marginVerticalExtraSmall]}>
              <Ionicons name={secondaryIcon} size={20} color={buttonColor} />
              <HTText
                text={' ' + secondaryIconData}
                size={Fonts.size.font12}
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
            height={Dimensions.Height * 0.035}
            width={Dimensions.Width * 0.5}
            style={[styles.button, GlobalStyles.marginVerticalMedium]}
          />
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'cover',
  },
  button: {
    alignSelf: 'center',
  },
  iconsSpacing: {
    justifyContent: 'space-between',
  },
});
export default HTCardWithoutImage;
