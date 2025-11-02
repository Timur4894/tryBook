import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetailScreen from '../screens/rest/BookDetailScreen';
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="BookDetail" component={BookDetailScreen} />
    </Stack.Navigator>
  );
}
