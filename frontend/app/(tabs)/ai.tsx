import React, { useState, useEffect, SetStateAction, Dispatch } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, ActivityIndicator, Appearance } from 'react-native';
import { gamini_ai_response } from '@/components/gamini_Ai';

const AiExample = () => {
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(Appearance.getColorScheme());  // Use system default theme


  const ai_result = ()=>( gamini_ai_response(inputText , setGeneratedText as Dispatch<SetStateAction<any>> , setLoading as Dispatch<SetStateAction<any>>))

    

  // Function to toggle themes (light/dark)
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Dynamic styles based on theme
  const styles = createStyles(theme);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter text to generate content"
          value={inputText}
          onChangeText={setInputText}
        />
        <Button title="Generate Content" onPress={ai_result} />
        <Button title="Toggle Theme" onPress={toggleTheme} />
        
        {/* Display loading indicator while waiting for the response */}
        {loading ? (
          <ActivityIndicator size="large" color={theme === 'light' ? '#0000ff' : '#ffffff'} style={styles.loading} />
        ) : (
          generatedText && (
            <Text style={styles.generatedText}>
              {generatedText}
            </Text>
          )
        )}
      </View>
    </ScrollView>
  );
};

// Function to create styles based on the theme
const createStyles = (theme: string | null | undefined) => {
  return StyleSheet.create({
    container: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: 16,
      backgroundColor: theme === 'light' ? '#fff' : '#121212',
    },
    innerContainer: {
      flexGrow: 1,
      justifyContent: 'center',
    },
    input: {
      height: 40,
      borderColor: theme === 'light' ? 'gray' : '#555',
      borderWidth: 1,
      marginBottom: 16,
      paddingLeft: 8,
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
    },
    generatedText: {
      marginTop: 20,
      fontSize: 16,
      color: theme === 'light' ? 'black' : 'white',
      fontFamily: 'Courier New',  // Monospace font for code-like look
      backgroundColor: theme === 'light' ? '#f5f5f5' : '#333333',
      padding: 10,
      borderRadius: 5,
      // whiteSpace: 'pre-wrap', // Ensures the text preserves formatting
    },
    loading: {
      marginTop: 20,
    },
  });
};

export default AiExample;
