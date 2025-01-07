import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView, ActivityIndicator, Appearance } from 'react-native';
import { GoogleGenerativeAI } from "@google/generative-ai";

const AiExample = () => {
  const [inputText, setInputText] = useState('');
  const [generatedText, setGeneratedText] = useState('');
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState(Appearance.getColorScheme());  // Use system default theme

  // Initialize API
  // const api_key = "AIzaSyCzmD-A9D3f0Mv0XokW8nP0ui7L0rPxG3A"; // Make sure to use your API key
  const api_key = "AIzaSyDm7a1Vw4-Gp8h2GMsjHlFg438PDc2x574"; // Make sure to use your API key
  const genAI = new GoogleGenerativeAI(api_key);
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",  
  });
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  // Function to run the AI and generate content
  async function run() {
    setLoading(true);
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    try {
      const result = await chatSession.sendMessage(inputText);
      setGeneratedText(result.response.text());
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  }

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
        <Button title="Generate Content" onPress={run} />
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
