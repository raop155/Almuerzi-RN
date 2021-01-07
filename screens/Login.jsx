import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import useForm from '../hooks/useForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  email: '',
  password: '',
};

const Login = ({ navigation }) => {
  const onSubmit = (values) => {
    fetch('https://serverless.raop155.vercel.app/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(values),
    })
      .then((x) => x.text())
      .then((x) => {
        try {
          return JSON.parse(x);
        } catch (err) {
          throw x;
        }
      })
      .then((x) => {
        AsyncStorage.setItem('token', x.token);
        navigation.navigate('Meals');
      })
      .catch((err) => Alert.alert('Error', err));
  };

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

  const goRegisterScreen = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={subscribe('email')}
        value={inputs.email}
        placeholder='Email'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.input}
        onChangeText={subscribe('password')}
        value={inputs.password}
        placeholder='Password'
        secureTextEntry={true}
        autoCapitalize='none'
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={handleSubmit}>
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
