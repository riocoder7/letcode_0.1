import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Link, useRouter } from 'expo-router';
import { socket } from '@/services/socket';
import ChatStart from '@/components/chatStart';

const App = () => {
    const router = useRouter();
  const demoUsernames = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
  const profileImages: { [key: string]: string } = {
    Alice: 'https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
    Bob: 'https://media.istockphoto.com/id/1090113184/photo/giving-it-some-thought.jpg?s=612x612&w=0&k=20&c=dHnkYIuw-e6u0YcpQbYmQVERA7WlPLTX_GdqV75_dxQ=',
    Charlie: 'https://pics.craiyon.com/2023-11-15/NFfo8Fq5SC-QlFZzS4ge3Q.webp',
    Dave: 'https://play-lh.googleusercontent.com/urA9eBT4RU3aM8XO9ygAZMBgD-8FHFsCJw9FxGTMZP4NT_CWFLfOM8RQmLQWWxxhTXQ=w526-h296-rw',
    Eve: 'https://st3.depositphotos.com/4071389/16855/i/450/depositphotos_168551948-stock-photo-happy-guy-in-grey-suit.jpg',
  };

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ username: string; message: string }[]>([]);
  const [username, setUsername] = useState('');
  const [startChat, setStartChat] = useState(false);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    // Listen for incoming messages from the server
    socket.on('receive_message', (data: { username: string; message: string }) => {
      if (data.username !== username) {
        setMessages((prevMessages) => [...prevMessages, data]);
      }
    });

    return () => {
      socket.off('receive_message');
    };
  }, [username]);

  const handleStartChat = () => {
    const randomUsername = demoUsernames[Math.floor(Math.random() * demoUsernames.length)];
    setUsername(randomUsername);
    setStartChat(true);
  };

  const sendMessage = () => {
    if (message.trim()) {
      const data = { username, message };
      setMessages((prevMessages) => [...prevMessages, data]); // Add locally
      socket.emit('send_message', data); // Send to server
      setMessage(''); // Clear input
    } else {
      Alert.alert('Message cannot be empty');
    }
  };

  const renderMessage = ({ item }: { item: { username: string; message: string } }) => {
    const isSender = item.username === username;
    return (
      <View
        style={[
          styles.messageContainer,
          isSender ? styles.senderMessageContainer : styles.receiverMessageContainer,
        ]}
      >
        {!isSender && (
          <Image
            source={{ uri: profileImages[item.username] || 'https://via.placeholder.com/40' }}
            style={styles.profilePhoto}
          />
        )}
        <View
          style={[
            styles.messageBubble,
            isSender ? styles.senderMessage : styles.receiverMessage,
          ]}
        >
          {!isSender && <Text style={styles.username}>{item.username}</Text>}
          <Text style={[styles.messageText, { color: isSender ? '#fff' : '#333' }]}>
            {item.message}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!startChat ? (
        <>
          <ChatStart />
          <Button title="Start Chat" onPress={handleStartChat} />
        </>
      ) : (
        <>
        <View style={{width:'100%', height:30, backgroundColor:"#252529", flexDirection:"row", justifyContent:"space-between", alignItems:"center"}}> 
         <TouchableOpacity onPress={router.back}> <Image source={require('@/assets/icons/left_arrow.png')} style={{width:30, height:30, tintColor:"white"}}  /></TouchableOpacity>
          <View> <Text style={{color:"white"}}> LETCode 0.1 </Text> </View>
          <View> <Image source={require('@/assets/icons/three-dots.png')} style={{width:32, height:32, tintColor:"white"}}  />  </View>

        </View>
          <FlatList
            data={messages}
            ref={flatListRef}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderMessage}
            style={styles.chatList}
            contentContainerStyle={{ paddingBottom: 20, }}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
            onLayout={() => flatListRef.current?.scrollToEnd({ animated: true })}
          />
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={message}
              onChangeText={setMessage}
              placeholder="Type a message..."
              placeholderTextColor="#fff"
            />
            {message.length > 0 && (
              <TouchableOpacity
                style={styles.sendButton}
                onPress={sendMessage}
              >
                <Image source={require('@/assets/icons/send.png')} style={styles.sendIcon} />
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#252529',
  },
  chatList: {
    flex: 1,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    gap: 5,
    backgroundColor:"red"
  },
  input: {
    flex: 1,
    backgroundColor: '#0E1117',
    borderRadius: 50,
    paddingHorizontal: 20,
    color: 'white',
    
  },
  sendButton: {
    width: 40,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: 20,
    height: 20,
  },
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  senderMessageContainer: {
    justifyContent: 'flex-end',
  },
  receiverMessageContainer: {
    alignItems: 'flex-start',
    paddingBottom:5
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  messageBubble: {
    maxWidth: '70%',
    padding: 10,
    borderRadius: 10,
   
  },
  senderMessage: {
    backgroundColor: '#303038',
    borderTopRightRadius: 0,
    alignSelf: 'flex-end',
  },
  receiverMessage: {
    backgroundColor: '#66ffff',
    borderTopLeftRadius: 0,
    alignSelf: 'flex-start',
    
  },
  messageText: {
    fontSize: 16,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
});

export default App;
