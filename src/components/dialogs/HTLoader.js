import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const HTLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.Primary} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.White,
  },
});
export default HTLoader;
