import { Tabs } from 'expo-router';
import React from 'react';

import { colors } from '@/theme';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.yellow,
        tabBarInactiveTintColor: colors.gray[300],
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
        name="explore/index"
        options={{
          tabBarLabel: 'explore',
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={20} name="rocket-launch" />
          ),
        }}
      />
      {/* 
      <Tabs.Screen
        name="chat/index"
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={20} name="chat" />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="workouts/index"
        options={{
          tabBarLabel: 'Treinos AI',
          tabBarIcon: ({ color }) => (
            <MaterialIcons color={color} size={20} name="fitness-center" />
          ),
        }}
      />
    </Tabs>
  );
}
