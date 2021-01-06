import React from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { ListItem } from '../components';
import useFetch from '../hooks/useFetch';

const data = [
  {
    _id: '1',
    name: 'Ceviche',
    description: 'Pescado, limón, ají',
  },
  {
    _id: '2',
    name: 'Ceviche2',
    description: 'Pescado2, limón2, ají2',
  },
];

const Meals = ({ navigation }) => {
  const { loading, data: meals } = useFetch({
    url: 'https://serverless.raop155.vercel.app/api/meals',
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <View>
          <ActivityIndicator size='large' color='#00f' />
          <Text>Loading...</Text>
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={meals}
          keyExtractor={(x) => x._id}
          renderItem={({ item }) => (
            <ListItem
              onPress={() => navigation.navigate('Modal', { _id: item._id })}
              name={item.name}
            />
          )}
        />
      )}
    </View>
  );
};

Meals.navigationOptions = {
  title: 'Comidas disponibles',
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    alignSelf: 'stretch',
  },
});
