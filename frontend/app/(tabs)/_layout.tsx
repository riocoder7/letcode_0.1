import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons'; // Using FontAwesome consistently
import { Image, useColorScheme, StyleSheet } from 'react-native'; // StyleSheet for consistent styles

export default function TabLayout() {
  const theme = useColorScheme();
  const tintColor = theme === 'dark' ? '#ffffff' : '#000000';

  return (
    <Tabs
      screenOptions={{
        
        tabBarStyle: {
          backgroundColor: theme === 'dark' ? '#121212' : '#ffffff',
          
        },
        tabBarActiveTintColor: tintColor,
        tabBarInactiveTintColor: theme === 'dark' ? '#888888' : '#aaaaaa',
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              source={require('@/assets/icons/home-32.png')}
              style={[styles.icon, { tintColor }]}
            />
          ),
        }}
      />
      
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="cogs" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="ai"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="question-circle" size={size} color={color} />
          ),
        }}
      />
         <Tabs.Screen
        name="chat"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="chat" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
