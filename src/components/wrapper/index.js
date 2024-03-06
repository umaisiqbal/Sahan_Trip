import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {Colors} from '../../theme';

const HTWrapper = ({children, translucent}) => {
  return (
    <SafeAreaView style={styles.container}>
      {translucent && (
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
      )}
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BackgroundColor,
  },
});

export default HTWrapper;
