import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DeadlineScreen from './screens/DeadlineScreen';
import PaymentScreen from './screens/PaymentScreen';
import SupervisorEmailScreen from './screens/SupervisorEmailScreen';
import UserEmailScreen from './screens/UserEmailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Deadline" component={DeadlineScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="SupervisorEmail" component={SupervisorEmailScreen} />
        <Stack.Screen name="UserEmail" component={UserEmailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
