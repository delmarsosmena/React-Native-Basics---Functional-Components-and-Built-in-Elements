import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet, Alert } from 'react-native';

const Orders = () => {
  const [note, setNote] = useState('');

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.header}>Kitchen Instructions 🥢</Text>
        <TextInput
          style={styles.input}
          placeholder="Note: Any special requests for the Chef?"
          placeholderTextColor="#8E7373"
          value={note}
          onChangeText={setNote}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={() => Alert.alert("Success", "Instructions sent!")}>
          <Text style={styles.buttonText}>Submit Order</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1A0D0D' },
  inner: { flex: 1, padding: 30, justifyContent: 'center' },
  header: { fontSize: 26, fontWeight: 'bold', color: '#F3C677', marginBottom: 20 },
  input: { height: 100, backgroundColor: '#2D1B1B', color: '#FFF', borderRadius: 12, padding: 15, marginBottom: 20 },
  button: { backgroundColor: '#E87461', padding: 18, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold' }
});

export default Orders;