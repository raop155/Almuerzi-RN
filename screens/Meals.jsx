import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { ListItem } from '../components';

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
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(x) => x._id}
        renderItem={({ item }) => (
          <ListItem
            onPress={() => navigation.navigate('Modal', { _id: item._id })}
            name={item.name}
          />
        )}
      />
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  list: {
    alignSelf: 'stretch',
  },
});
