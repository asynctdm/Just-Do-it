import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function PaymentScreen({ navigation, route }) {
  const [selectedAmount, setSelectedAmount] = useState('25');
  const { goal, deadline } = route.params;

  const handlePledge = () => {
    navigation.navigate('SupervisorEmail', {
      goal,
      deadline,
      amount: selectedAmount,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Pledge Amount</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedAmount}
          onValueChange={(itemValue) => setSelectedAmount(itemValue)}
          style={styles.picker}
          dropdownIconColor="white"
        >
          <Picker.Item label="$25" value="25" />
          <Picker.Item label="$50" value="50" />
          <Picker.Item label="$100" value="100" />
          <Picker.Item label="$250" value="250" />
          <Picker.Item label="$1000" value="1000" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handlePledge}>
        <Text style={styles.buttonText}>Pledge</Text>
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
  pickerContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    color: 'white',
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