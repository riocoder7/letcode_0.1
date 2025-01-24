import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Alert } from 'react-native';
import { socket } from '@/services/socket';

const App = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ username: string; message: string }[]>([]);
  const [username, setUsername] = useState('');
  const [isUsernameSet, setIsUsernameSet] = useState(false);
  

  useEffect(() => {
    // Listen for incoming messages
    socket.on('receive_message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, []);

  const handleSetUsername = () => {
    if (username.trim().length >= 4) {
      setIsUsernameSet(true); // Proceed to the chat interface
    } else {
      Alert.alert('Invalid Username', 'Username must be at least 4 characters long.');
    }
  };

  const sendMessage = () => {
    if (message.trim()) {
      const data = { username, message };
      socket.emit('send_message', data); // Emit the message to the server
      setMessage(''); // Clear the input field after sending
    }
  };

  const renderMessage = ({ item }) => {
    const isSender = item.username === username; // Check if the message is from the current user

    return (
      <View
        style={[
          styles.messageContainer,
          isSender ? styles.senderMessage : styles.receiverMessage,
        ]}
      >
        {!isSender && <Text style={styles.username}>{item.username}:</Text>}
        <Text style={styles.messageText}>{item.message}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!isUsernameSet ? (
        <View style={styles.usernameContainer}>
          <Text style={styles.label}>Enter Your Username (at least 4 characters):</Text>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
          <Button title="Set Username" onPress={handleSetUsername} />
        </View>
      ) : (
        <>
          <FlatList
            data={messages}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderMessage}
            style={styles.chatList}
          />

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Type a message..."
            />
            <Button title="Send" onPress={sendMessage} />
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f5f5f5' },
  usernameContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  label: { fontSize: 18, marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, width: '80%', marginBottom: 10 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 10 },
  chatList: { flex: 1, marginBottom: 10 },
  messageContainer: {
    maxWidth: '70%',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  senderMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#0078FF',
    borderTopRightRadius: 0,
  },
  receiverMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#00ccff', // Light aqua-like background
    borderTopLeftRadius: 0,
  },
  messageText: { color: '#004D40', fontSize: 16 }, // Dark teal text color for better readability
  username: { fontWeight: 'bold', marginBottom: 5, color: '#00796B' }, // Slightly darker color for the username
});


export default App;
