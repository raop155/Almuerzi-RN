import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Register = () => {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
