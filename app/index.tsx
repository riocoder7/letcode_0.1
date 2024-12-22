import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useColorScheme } from 'react-native';  // Import useColorScheme to detect theme
import { Colors } from '@/constants/Colors'; // Import the Colors object for theme colors

const Index = () => {
  const router = useRouter();
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const setTime = setTimeout(() => {
      setNav(true);
      router.push('/getStart');
    }, 2000);

    return () => clearTimeout(setTime);
  }, [nav]);

  // Get the current theme (light or dark)
  const theme = useColorScheme();

  // Get the colors based on the current theme
  const currentColors = theme === 'dark' ? Colors.dark : Colors.light;

  return (
    <View style={[styles.container, { backgroundColor: currentColors.background }]}>
      <Text style={[styles.text, { color: currentColors.text }]}>Welcome</Text>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container take up the full screen
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
    padding: 10,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
