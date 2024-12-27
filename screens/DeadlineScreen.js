import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  Alert // Add Alert to the imports
} from 'react-native';
import { Calendar } from 'react-native-calendars';



export default function DeadlineScreen({ navigation, route }) {
  const [selectedDate, setSelectedDate] = useState('');
  const { goal } = route.params;

  const handleDateSelect = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part to compare dates only
    
    const selectedDateTime = new Date(date.dateString);
    selectedDateTime.setHours(0, 0, 0, 0);

    if (selectedDateTime <= today) {
      Alert.alert(
        'Invalid Date',
        'Please select a future date for your goal deadline.',
        [{ text: 'OK' }]
      );
      return;
    }

    setSelectedDate(date.dateString);
  };

  const handleContinue = () => {
    if (!selectedDate) {
      Alert.alert('Oops!', 'Please select a deadline first!');
      return;
    }
    navigation.navigate('Payment', { goal, deadline: selectedDate });
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select Deadline</Text>
      <Calendar
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: 'red' },
        }}
        minDate={today} // This will disable all past dates in the calendar
        theme={{
          backgroundColor: '#2b2d42',
          calendarBackground: '#2b2d42',
          textSectionTitleColor: '#fff',
          selectedDayBackgroundColor: 'red',
          selectedDayTextColor: '#fff',
          todayTextColor: 'red',
          dayTextColor: '#fff',
          monthTextColor: '#fff',
          // Add styles for disabled dates
          textDisabledColor: 'rgba(255, 255, 255, 0.3)',
        }}
      />
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2b2d42',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    color: 'white',
    marginTop: 40,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'red',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
}); 