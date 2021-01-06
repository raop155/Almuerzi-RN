import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ListItem = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    height: 60,
    justifyContent: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 18,
  },
});
