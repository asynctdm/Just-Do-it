import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

export default function UserEmailScreen({ navigation, route }) {
  const [email, setEmail] = useState('');
  const { goal, deadline, amount, supervisorEmail } = route.params;

  const handleContinue = () => {
    if (!email.trim() || !email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }
    // Here you would typically navigate to the payment processing screen
    Alert.alert('Success', 'Ready to process payment!');
    // navigation.navigate('Payment Processing');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email..."
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Set Your Email</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2d42',
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 