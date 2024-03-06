import React, {useState} from 'react';
import {View, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import {HTText, HTWrapper, HTButton, HTBottomSheet} from '../../../components';
import {Colors, Fonts} from '../../../theme';
import {Dimensions, GlobalStyles} from '../../../utils/constants';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeICons from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Styles from '../RoundTripStyles/Styles';
import AnyStopsBottomSheet from '../AnyStopsBottomSheet';
import BaggageBottomSheet from '../BaggageBottomSheet';
import TravelerBottomSheet from '../TravelerBottomSheet';
import CabinClassBottomSheet from '../CabinClassBottomSheet';
const RoundTrip = () => {
  const [cabinClass, setCabinClass] = useState(null);
  const [baggageModal, setBaggageModal] = useState(false);
  const [stopsModal, setStopsModal] = useState(false);
  const [travelerModal, setTravelereModal] = useState(false);
  const [cabinModal, setCabinModal] = useState(false);
  const handleRoundTrip = () => {
    console.log('running');
  };
  return (
    <ScrollView>
    <HTWrapper>
      <View style={[GlobalStyles.marginHorizontalMedium,]}>
        <HTText
          size={Fonts.size.font16}
          text="Departure"
          bold
          styles={[
            GlobalStyles.marginTopLarge,
            GlobalStyles.marginLeftMedium,
            {fontWeight: 800},
          ]}
        />
        <TouchableOpacity style={[Styles.departure]}>
          <Icon
            name="flight-takeoff"
            size={20}
            color={Colors.Primary}
            style={GlobalStyles.marginHorizontalMedium}
          />
          <HTText
            size={Fonts.size.font14}
            text="Lahore, Karachi"
            textColor={Colors.LightBlue}
            style={[Styles.customText, {fontWeight: 800}]}
          />
        </TouchableOpacity>
        <HTText
          size={Fonts.size.font16}
          text="Arrival"
          bold
          styles={[
            GlobalStyles.marginTopLarge,
            GlobalStyles.marginLeftMedium,
            {fontWeight: 800},
          ]}
        />
        <TouchableOpacity style={[Styles.departure]}>
          <Icon
            name="flight-takeoff"
            size={20}
            color={Colors.Primary}
            style={GlobalStyles.marginHorizontalMedium}
          />
          <HTText
            size={Fonts.size.font14}
            text="Karachi, Pakistan"
            textColor={Colors.LightBlue}
            style={[Styles.customText, {fontWeight: 800}]}
          />
        </TouchableOpacity>
        <HTText
          size={Fonts.size.font16}
          text="Date"
          bold
          styles={[
            GlobalStyles.marginTopLarge,
            GlobalStyles.marginLeftMedium,
            {fontWeight: 800},
          ]}
        />
        <View style={Styles.dateOptions}>
          <TouchableOpacity style={[Styles.departure]}>
            <Icon
              name="calendar-month"
              size={20}
              color={Colors.Primary}
              style={GlobalStyles.marginHorizontalMedium}
            />
            <HTText
              size={Fonts.size.font14}
              text="Select date"
              textColor={Colors.LightBlue}
              style={[Styles.customText, {fontWeight: 800}]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[Styles.departure]}>
            <Icon
              name="calendar-month"
              size={20}
              color={Colors.Primary}
              style={GlobalStyles.marginHorizontalMedium}
            />
            <HTText
              size={Fonts.size.font14}
              text="Select date"
              textColor={Colors.LightBlue}
              style={[Styles.customText, {fontWeight: 800}]}
            />
          </TouchableOpacity>
        </View>
        <HTButton
          onClick={handleRoundTrip}
          buttonType="fill"
          text="Search Flights"
          backgroundColor={Colors.Primary}
          textColor={Colors.White}
          height={Dimensions.Height * 0.05}
          width={Dimensions.Width * 0.6}
          style={[
            GlobalStyles.marginVerticalLarge,
            GlobalStyles.marginHorizontalLarge,
            {marginVertical: 25},
          ]}
        />
      </View>
      <HTText
        size={Fonts.size.font16}
        text="Options"
        bold
        styles={[GlobalStyles.marginLeftLarge, {marginVertical: 10}]}
      />
      <TouchableOpacity
        onPress={() => setTravelereModal(true)}
        style={[Styles.option]}>
        <FontAwesomeICons
          name="user-large"
          size={15}
          style={Styles.FontAwesomeICons}
        />
        <HTText
          size={Fonts.size.font12}
          bold
          text="Traveler"
          textColor={Colors.Black}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setCabinModal(true)}
        style={[GlobalStyles.marginVerticalSmall, Styles.option]}>
        <MaterialCommunityIcons
          name="car-seat"
          size={20}
          style={Styles.FontAwesomeICons}
        />
        <HTText
          size={Fonts.size.font12}
          bold
          text={cabinClass || 'Select Class'}
          textColor={Colors.Black}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setBaggageModal(true)}
        style={[GlobalStyles.marginVerticalExtraSmall, Styles.option]}>
        <Ionicons name="bag" size={20} style={Styles.FontAwesomeICons} />
        <HTText
          size={Fonts.size.font12}
          bold
          text="Any carry-on, Any checked"
          textColor={Colors.Black}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setStopsModal(true)}
        style={[GlobalStyles.marginVerticalExtraSmall, Styles.option]}>
        <Feather name="loader" size={20} style={Styles.FontAwesomeICons} />
        <HTText
          size={Fonts.size.font12}
          bold
          text="Any stops"
          textColor={Colors.Black}
        />
      </TouchableOpacity>
      <AnyStopsBottomSheet
        isVisible={stopsModal}
        onCancel={() => setStopsModal(false)}
      />
      <BaggageBottomSheet
        isVisible={baggageModal}
        onCancel={() => setBaggageModal(false)}
      />
      <TravelerBottomSheet
        isVisible={travelerModal}
        onCancel={() => setTravelereModal(false)}
      />
      <CabinClassBottomSheet
        isVisible={cabinModal}
        onCancel={() => setCabinModal(false)}
      />
      
    </HTWrapper></ScrollView>
  );
};
export default RoundTrip;
