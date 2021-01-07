import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import useForm from '../hooks/useForm';

const initialState = {
  email: '',
  password: '',
};

const Register = ({ navigation }) => {
  const onSubmit = (values) => {
    fetch('https://serverless.raop155.vercel.app/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify(values),
    })
      .then((x) => x.text())
      .then((x) => {
        if (x === 'User created successfully') {
          return Alert.alert('Success', x, [
            { text: 'Go to Login', onPress: () => navigation.navigate('Login') },
          ]);
        }

        Alert.alert('Error', x);
      });
  };

  const { subscribe, inputs, handleSubmit } = useForm(initialState, onSubmit);

  const goLoginScreen = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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
        <Text style={styles.buttonText}>Accept</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={goLoginScreen}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

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
