import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetailScreen from '../screens/rest/BookDetailScreen';
import BottomTabs from './BottomTabs';
import BookContentScreen from '../screens/rest/BookContentScreen';
import EditProfileScreen from '../screens/rest/EditProfileScree';
import SubscriptionScreen from '../screens/rest/SubscriptionsScreen';

const Stack = createStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BottomTabs" component={BottomTabs} />
      <Stack.Screen name="BookDetail" component={BookDetailScreen} />
      <Stack.Screen name="BookContent" component={BookContentScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
    
    </Stack.Navigator>
  );
}
