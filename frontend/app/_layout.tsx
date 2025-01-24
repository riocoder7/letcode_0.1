import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'react-native';
import { useColorScheme } from 'react-native';  // Import useColorScheme to detect theme

const RootLayout = () => {
  const theme = useColorScheme();

  return (
    <>
      <Stack>
        <Stack.Screen name='index' options={{ headerShown: false }} />
        <Stack.Screen name='getStart' options={{ headerShown: false }} />
        <Stack.Screen name='(auth)' options={{ headerShown: false }} />
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
     
       
      
      </Stack>
    
      <StatusBar 
        hidden={false} 
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'} 
        backgroundColor={theme === 'dark' ? '#121212' : '#FFF'} />
    </>
  );
};

export default RootLayout;
