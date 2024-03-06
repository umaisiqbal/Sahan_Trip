// CustomHeader.js

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CustomHeader = ({ options }) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, paddingTop: 10 }}>
      <TouchableOpacity onPress={handleBack}>
        <Text style={{ color: 'black', fontSize: 18 }}>← Back</Text>
      </TouchableOpacity>
      {/* Add other header components here */}
    </View>
  );
};

export default CustomHeader;
