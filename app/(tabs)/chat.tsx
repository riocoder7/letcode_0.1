import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, StatusBar } from 'react-native';

const ChatApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const user = {
    name: "John Doe",
    dp: "https://example.com/user-dp.jpg",  // Replace with your image URL
  };

  const handleSearchChange = (text: React.SetStateAction<string>) => {
    setSearchQuery(text);
  };

  return (
    <View style={styles.container}>
      {/* Status bar for a cleaner UI */}
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <View style={styles.userInfo}>
          {/* User Profile Picture */}
          <Image source={{ uri: user.dp }} style={styles.userDp} />
          
          {/* User Name */}
          <View style={styles.userNameContainer}>
            <Text style={styles.userName}>{user.name}</Text>
          </View>
        </View>

        {/* Search Bar */}
        <TextInput
          style={styles.searchInput}
          placeholder="Search chats..."
          value={searchQuery}
          onChangeText={handleSearchChange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userDp: {
    width: 50,
    height: 50,
    borderRadius: 25,  // Circular DP
    marginRight: 10,
  },
  userNameContainer: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    width: 200,
    fontSize: 14,
    backgroundColor: '#fff',
  },
});

export default ChatApp;
