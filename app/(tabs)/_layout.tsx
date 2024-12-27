import { Tabs } from 'expo-router';
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons'; // Import modern icon libraries
import { Image, useColorScheme } from 'react-native'; // Detect system theme

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
        tabBarShowLabel: false, // Hide text labels
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image style={{tintColor:"white"}} source={require("@/assets/icons/home-32.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image style={{tintColor:"white"}} source={require("@/assets/icons/search.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cogs" size={size * 1.2} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size * 1.2} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ai"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="question-circle" size={size * 1.2} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
