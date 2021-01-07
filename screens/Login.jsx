import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Login = ({ navigation }) => {
  const goRegisterScreen = () => {
    navigation.navigate('Register');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => {}}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={goRegisterScreen}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: '100%',
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  button: {
    marginBottom: 10,
    backgroundColor: '#3b5998',
    paddingVertical: 7,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: '#fff',
  },
});
