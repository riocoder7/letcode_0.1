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
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" size={size} color={color} /> // Modern home icon
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} /> // Modern info icon
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cogs" size={size} color={color} /> // Cogs icon remains the same
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} /> // User icon remains the same
          ),
        }}
      />
    </Tabs>
  );
}
