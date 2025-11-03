import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ExploreBooksScreen from '../screens/bottomTab/ExploreBooksScreen';
import ProfileScreen from '../screens/bottomTab/ProfileScreen';
import HomeSvg from '../assets/svg/HomeSvg';
import ProfileSvg from '../assets/svg/ProfileSvg';
import MyLibrary from '../screens/bottomTab/MyLibrary';
import LibrarySvg from '../assets/svg/LibrarySvg';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
         position: 'absolute',
         bottom: 30,
         left: 0,
         right: 0,
         height:80,
         width: '80%',
         marginLeft: '10%',
         backgroundColor: colors.primary,
        paddingTop: 20,
         borderRadius: 20,
        //  paddingHorizontal: 20,
        },
      })}
    >
      <Tab.Screen name="Explore" component={ExploreBooksScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <HomeSvg width={size} height={size} color={color} />
        ),
      }}/>

      <Tab.Screen name="MyLibrary" component={MyLibrary} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <LibrarySvg width={size} height={size} color={color} />
        ),
      }}/>

      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        tabBarLabel: '',
        tabBarIcon: ({ color, size }) => (
          <ProfileSvg width={size} height={size} color={color} />
        ),
      }}/>
    </Tab.Navigator>
  );
}
