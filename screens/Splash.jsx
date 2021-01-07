import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {
  useEffect(() => {
    AsyncStorage.getItem('token').then((x) => {
      navigation.navigate(x ? 'Root' : 'OnBoarding');
    });
  });

  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#3b5998' />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});
