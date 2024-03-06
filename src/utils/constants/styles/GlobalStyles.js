import {StyleSheet, StatusBar} from 'react-native';
import Dimensions from '../dimensions/Dimensions';
import {Colors} from '../../../theme';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const GlobalStyles = StyleSheet.create({
  //Adjust content according to card size large with image
  contentLarge: {
    height: Dimensions.Height * 0.15,
    width: Dimensions.Width * 0.55,
  },
  //Fix to Screen
  screenSize: {
    height: Dimensions.Height,
    width: Dimensions.Width,
  },
  //Transparent Status Bar
  screenSizeTranparentStatusBar: {
    height: Dimensions.Height + StatusBar.currentHeight + 10,
    width: Dimensions.Width,
  },
  //Squrare Containers
  squareLarge: {
    height: Dimensions.Height * 0.28,
    width: Dimensions.Height * 0.28,
  },
  squareMedium: {
    height: Dimensions.Height * 0.18,
    width: Dimensions.Height * 0.18,
  },
  squareSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Height * 0.1,
  },
  //Rounded Squrare Containers
  roundedSquareLarge: {
    height: Dimensions.Height * 0.3,
    width: Dimensions.Height * 0.3,
    borderRadius: 8,
  },
  roundedSquareMedium: {
    height: Dimensions.Height * 0.15,
    width: Dimensions.Height * 0.15,
    borderRadius: 8,
  },
  roundedSquareSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Height * 0.1,
    borderRadius: 8,
  },
  //Round or Circular Container
  roundLarge: {
    height: Dimensions.Height * 0.3,
    width: Dimensions.Height * 0.3,
    borderRadius: Dimensions.Height * 0.3,
  },
  roundMedium: {
    height: Dimensions.Height * 0.2,
    width: Dimensions.Height * 0.2,
    borderRadius: Dimensions.Height * 0.2,
  },
  roundSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Height * 0.1,
    borderRadius: Dimensions.Height * 0.1,
  },
  roundXSmall: {
    height: Dimensions.Height * 0.08,
    width: Dimensions.Height * 0.08,
    borderRadius: Dimensions.Height * 0.08,
  },
  roundIcon: {
    height: Dimensions.Height * 0.04,
    width: Dimensions.Height * 0.04,
    borderRadius: Dimensions.Height * 0.03,
  },
  //Rectangular Container
  rectangleLarge: {
    height: Dimensions.Height * 0.2,
    width: Dimensions.Width * 0.9,
  },
  rectangleMedium: {
    height: Dimensions.Height * 0.18,
    width: Dimensions.Width * 0.7,
  },
  rectangleSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Width * 0.4,
  },
  //Rounded Rectangular Container
  roundedRectangleXLarge: {
    height: Dimensions.Height * 0.25,
    width: Dimensions.Width * 0.9,
    borderRadius: 8,
  },
  roundedRectangleLarge: {
    height: Dimensions.Height * 0.2,
    width: Dimensions.Width * 0.9,
    borderRadius: 8,
  },
  roundedRectangleMedium: {
    height: Dimensions.Height * 0.18,
    width: Dimensions.Width * 0.7,
    borderRadius: 8,
  },
  roundedRectangleSmall: {
    height: Dimensions.Height * 0.1,
    width: Dimensions.Width * 0.4,
    borderRadius: 8,
  },
  //Shadow
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  //Spacer
  marginLarge: {margin: responsiveHeight(2.5)},
  marginMedium: {margin: responsiveHeight(1.5)},
  marginSmall: {margin: responsiveHeight(1)},
  marginVerticalExtraLarge: {marginVertical: Dimensions.Height * 0.05},
  marginVerticalLarge: {marginVertical: responsiveHeight(10.5)},
  marginVerticalMedium: {marginVertical: responsiveHeight(1.5)},
  marginVerticalSmall: {marginVertical: responsiveHeight(1)},
  marginVerticalExtraSmall: {marginVertical: responsiveHeight(0.5)},
  marginHorizontalLarge: {marginHorizontal: responsiveWidth(15.5)},
  marginHorizontalMedium: {marginHorizontal: responsiveWidth(2)},
  marginHorizontalSmall: {marginHorizontal: responsiveWidth(1.5)},
  marginHorizontalExtraSmall: {marginHorizontal: responsiveWidth(0.5)},
  marginLeftLarge: {marginLeft: responsiveWidth(2.5)},
  marginLeftMedium: {marginLeft: responsiveWidth(1.5)},
  marginLeftSmall: {marginLeft: responsiveWidth(0.4)},
  marginLeftExtraSmall: {marginLeft: responsiveWidth(0.2)},
  marginRightLarge: {marginRight: responsiveWidth(2.5)},
  marginRightMedium: {marginRight: responsiveWidth(1.5)},
  marginRightSmall: {marginRight: responsiveWidth(0.3)},
  marginRightExtraSmall: {marginRight: responsiveWidth(0.5)},
  marginTopLarge: {marginTop: responsiveHeight(2.5)},
  marginTopMedium: {marginTop: responsiveHeight(1.5)},
  marginTopSmall: {marginTop: responsiveHeight(0.5)},
  marginTopExtraSmall: {marginTop: responsiveHeight(0.3)},
  marginBottomLarge: {marginBottom: responsiveHeight(2.5)},
  marginBottomMedium: {marginBottom: responsiveHeight(1.5)},
  marginBottomSmall: {marginBottom: responsiveHeight(0.3)},
  marginBottomExtraSmall: {marginBottom: responsiveHeight(0.3)},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContain: {
    resizeMode: 'contain',
  },
  imageCover: {
    resizeMode: 'cover',
  },
  bottomSheetHeader: {
    backgroundColor: Colors.Primary,
    height: Dimensions.Height * 0.01,
    width: Dimensions.Width * 0.18,
    borderRadius: 8,
    alignSelf: 'center',
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});
export default GlobalStyles;
