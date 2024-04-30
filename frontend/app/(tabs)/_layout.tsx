import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';
import { AntDesign, Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Entypo name={'home'} color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='explore'
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='user-friends' color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          tabBarLabel: 'Create',
          tabBarIcon: ({ color, size }) => (
            <Feather
              name='plus-square'
              color={color}
              size={size}
              style={{
                height: size - 1,
                width: size - 1,
                textAlign: 'center',
              }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='activity'
        options={{
          tabBarLabel: 'Activity',
          tabBarIcon: ({ color, size }) => (
            <Feather
              name='activity'
              color={color}
              size={size}
              style={{
                height: size - 1,
                width: size - 1,
                textAlign: 'center',
              }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name='user' color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='post/[id]'
        options={{
          href: null,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name='user/[id]'
        options={{
          href: null,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
