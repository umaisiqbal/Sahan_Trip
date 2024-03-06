import React from 'react';
import {View, StyleSheet} from 'react-native';
import {HTCardWithImageList, HTText} from '../../../components';
import data from '../../../utils/constants/data';
import {fetchLocation} from '../../../services/location';

const Services = () => {
  const buttonController = async () => {
    let location = await fetchLocation();
    if (location === 'Call function again') {
      location = await fetchLocation();
    }
  };
  return (
    <View style={styles.container}>
      <HTText text={'Hello world'} style={styles.gap} bold />
      <HTCardWithImageList
        isHorizontal={false}
        data={data.dummyCardData}
        handlePress={buttonController}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  gap: {margin: 50},
});

export default Services;
