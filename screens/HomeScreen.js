import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [goal, setGoal] = useState('');

  const handlePress = () => {
    if (goal.trim() === '') {
      Alert.alert('Oops!', 'Please enter a goal first!');
    } else {
      navigation.navigate('Deadline', { goal: goal });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Your Goal</Text>
      <TextInput
        style={styles.input}
        placeholder="Type your goal here..."
        placeholderTextColor="#aaa"
        value={goal}
        onChangeText={setGoal}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Set Goal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2b2d42',
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
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
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 