import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import useFetch from '../hooks/useFetch';

const Modal = ({ navigation }) => {
  const _id = navigation.getParam('_id');
  const { loading, data } = useFetch({
    url: `https://serverless.raop155.vercel.app/api/meals/${_id}`,
  });

  const createOrder = () => {
    fetch(`https://serverless.raop155.vercel.app/api/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        mealId: _id,
        userId: '47369425',
      }),
    }).then(() => {
      alert('The order was created successfully!');
      navigation.goBack();
    });
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
