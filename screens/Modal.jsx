import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button, Alert } from 'react-native';
import useFetch from '../hooks/useFetch';

const Modal = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { loading, data } = useFetch({
    url: `https://serverless.raop155.vercel.app/api/meals/${_id}`,
  });

  const createOrder = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      fetch(`https://serverless.raop155.vercel.app/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: token,
        },
        body: JSON.stringify({
          mealId: _id,
        }),
      }).then((x) => {
        if (x.status !== 201) {
          return alert('The order could not be created');
        }
        alert('The order was created successfully!');
        navigation.goBack();
      });
    } else {
      alert('The order could not be created');
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator size='large' color='#00f' />
          <Text>Loading...</Text>
        </View>
      ) : (
        <View>
          <Text>{data._id}</Text>
          <Text>{data.name}</Text>
          <Text>{data.description}</Text>
          <Button title='Accept' onPress={createOrder} />
          <Button title='Cancelar' onPress={() => navigation.goBack()} />
        </View>
      )}
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
