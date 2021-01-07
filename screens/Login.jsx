import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import useForm from '../hooks/useForm';

const Login = ({ navigation }) => {
  const initialState = {
    email: '',
    password: '',
  };
  const onSubmit = (values) => {
    console.log(values);
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
      />
      <TextInput
        style={styles.input}
        onChangeText={subscribe('password')}
        value={inputs.password}
        placeholder='Password'
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
