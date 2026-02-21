import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  return (
    <View style={styles.wrapper}>
      <TextInput 
        style={styles.input} 
        placeholder="🔍 SearchBar" 
        placeholderTextColor="#6D4C4C"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { marginBottom: 20 },
  input: {
    height: 55,
    backgroundColor: '#2D1B1B',
    borderRadius: 30,
    paddingHorizontal: 25,
    fontSize: 16,
    color: '#F3C677',
    borderWidth: 1,
    borderColor: '#3D2525',
  },
});

export default SearchBar;