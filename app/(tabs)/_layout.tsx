import { Tabs } from 'expo-router';
import React from 'react';

import { colors } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={20} name="home" />
          ),
        }}
      />
      <Tabs.Screen
        name="chat/index"
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={20} name="chat" />
          ),
        }}
      />
      <Tabs.Screen
        name="workouts/index"
        options={{
          tabBarLabel: 'Workouts',
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={20} name="fitness-center" />
          ),
        }}
      />
    </Tabs>
  );
}
