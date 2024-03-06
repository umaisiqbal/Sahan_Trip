import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { GlobalStyles } from '../src/utils/constants';
import Feather from 'react-native-vector-icons/Feather';
import { HTText, HTWrapper } from '../src/components';
import { Fonts, Colors } from '../src/theme';
import { Images } from '../src/utils/media';

const renderAdventureImages = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.imageBackground}>
        <Image source={item.image} style={styles.flatlists} />
      
     
        <HTText size={Fonts.size.font14} text={item.description} />
        <HTText
          size={Fonts.size.font14}
          text={item.additionalText}
          style={[styles.additionalText, {}]}
        />
      </View>
      </View>
  );
};

const SearchScreen = () => {
  return (
    <HTWrapper>
      <ScrollView>
      <ImageBackground
        source={Images.appImages.airPlane}
        style={{ flex: 1, height:160}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Dashboard');
          }}
          style={[styles.backButton, { color: 'black' }]}>
          <Feather name="arrow-left" size={20} />
          <HTText
            size={Fonts.size.font12}
            text="Back"
            bold
            textColor={Colors.Black}
            style={[styles.backButtonText, {}]}
          />
        </TouchableOpacity>
      </ImageBackground>

      <View >
        <HTText
          size={Fonts.size.font16}
          text="Adventure Achievements"
          bold
          textColor={Colors.LittleBlack}
          style={[styles.backButtonText, {}]}
        />
      </View>
      <View style={[GlobalStyles.marginTopLarge, GlobalStyles.marginLeftLarge]}>
          <HTText
            size={Fonts.size.font12}
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit."
            textColor={Colors.LittleBlack}
            style={[styles.backButtonText, {}]}
          />
        </View>

        <View style={[GlobalStyles.marginTopLarge, GlobalStyles.marginLeftLarge, GlobalStyles.marginRightLarge]}>
          <HTText
            size={Fonts.size.font12}
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit.
            amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit amet, 
            consectetuer adipiscing elit, Lorem ipsum dolor"
            textColor={Colors.LittleBlack}
            style={[styles.backButtonText, {}]}
          />
        </View>

        <View style={[GlobalStyles.marginTopLarge, GlobalStyles.marginLeftLarge]}>
          <HTText
            size={Fonts.size.font12}
            text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit amet, consectetuer adipiscing elit,sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit."
            textColor={Colors.LittleBlack}
            style={[styles.backButtonText, {}]}
          />
        </View>
        <View style={[GlobalStyles.marginTopLarge]}>
        <HTText text="Other Blogs" bold></HTText>
      <FlatList
        data={[
          { key: '1', image: Images.appImages.cursious, description: 'Curious Journeys' },
          { key: '2', image: Images.appImages.expedition, description: 'Expedition Records' },
        ]}
        renderItem={renderAdventureImages}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
      /></View></ScrollView>
    </HTWrapper>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10,
  },
  backButtonText: {
    marginLeft: 5,
    color: Colors.Black,
  },
  imageContainer: {
    marginHorizontal: 4,
    marginBottom: 10,
  },
  imageBackground: {
    backgroundColor: '#E9E9E9',
    borderRadius: 10,
    paddingBottom:20,
    paddingLeft:0,
    width:200,
 
  },
  flatlists: {
    width: 200,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 12,
   
 
  },

});

export default SearchScreen;
