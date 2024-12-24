import { Tabs } from 'expo-router';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'; // Import modern icon libraries
import { useColorScheme } from 'react-native'; // Detect system theme

export default function TabLayout() {
  const theme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#121212' : '#ffffff', // Dynamic background
        },
        tabBarActiveTintColor: theme === 'dark' ? '#ffffff' : '#000000', // Active icon color
        tabBarInactiveTintColor: theme === 'dark' ? '#888888' : '#aaaaaa', // Inactive icon color
        tabBarIconStyle: {
           // Add padding around icons
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" size={size * 1.2} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Search',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size * 1.2} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cogs" size={size * 1.2} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size * 1.2} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="ai"
        options={{
          title: 'AI',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size * 1.2} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
