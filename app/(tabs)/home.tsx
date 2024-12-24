import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  const theme = useColorScheme(); // Detect light or dark mode
  const isDarkMode = theme === 'dark';

  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 60,
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa', // Dark or Light background
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      // Shadow for Android
      elevation: 4,
      // Shadow for iOS
      shadowColor: '#000', // Shadow color
      shadowOffset: { width: 0, height: 2 }, // Shadow offset (horizontal, vertical)
      shadowOpacity: 0.2, // Opacity of the shadow
      shadowRadius: 4, // Blur radius
    },
    
    profileSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      backgroundColor: isDarkMode ? '#333' : '#ccc', // Placeholder color for the image
    },
    userDetails: {
      marginLeft: 10,
    },
    userName: {
      color: isDarkMode ? '#ffffff' : '#000000', // Text color
      fontSize: 16,
      fontWeight: 'bold',
    },
    userSubtitle: {
      color: isDarkMode ? '#aaaaaa' : '#555555', // Subtitle color
      fontSize: 12,
    },
    iconSection: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconContainer: {
      marginLeft: 15,
      position: 'relative',
    },
    notificationBadge: {
      position: 'absolute',
      top: -5,
      right: -5,
      width: 8,
      height: 8,
      backgroundColor: 'red',
      borderRadius: 4,
    },
    banner:{
      width:"100%",
      height:170,
      backgroundColor: isDarkMode ? '#121212' : '#f8f9fa',
      flexDirection:"row",
      // justifyContent:"center",
      alignContent:"center",


    },
    scrollView: {
      paddingVertical: 5, 
      paddingHorizontal:10
    },
    bannerItems: {
      width: 280, // Width of each banner item
      height: "100%", // Height of each banner item
      backgroundColor: '#f0f0f0',  // Placeholder background color
      marginRight: 10, // Space between items
      borderRadius: 12, // Rounded corners
      justifyContent: 'center',
      alignItems: 'center',
      borderColor:"red"
    },
    bannerImg: {
      width: "100%",
      height: "100%",
      borderWidth: 0.2,
      borderColor: isDarkMode ? "#ffffff" : "#2D2D2D", // Dynamic border color
      borderRadius: 12,
      overflow: 'hidden',
    },
  });

  return (
    <>
    <SafeAreaView>
      <View style={styles.header}>
        {/* User Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/35537/child-children-girl-happy.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            }}
            style={styles.profileImage}
          />
          <View style={styles.userDetails}>
            <Text style={styles.userName}>Alan Williams</Text>
            <Text style={styles.userSubtitle}>Student</Text>
          </View>
        </View>

        {/* Icons Section */}
        <View style={styles.iconSection}>
          {/* Search Icon */}
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="search" size={25} color={isDarkMode ? '#ffffff' : '#000000'} /> {/* Icon Color */}
          </TouchableOpacity>

          {/* Notification Icon */}
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="bell" size={25} color={isDarkMode ? '#ffffff' : '#000000'} /> {/* Icon Color */}
            <View style={styles.notificationBadge}></View> {/* Notification Badge */}
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.banner}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
  <View style={styles.bannerItems}>
    <Image style={styles.bannerImg} source={{uri:"https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}  resizeMode="cover"/>
  </View>
  <View style={styles.bannerItems}>
  <Image style={styles.bannerImg} source={{uri:"https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}  resizeMode="cover"/>
  </View>
  <View style={styles.bannerItems}>
  <Image style={styles.bannerImg} source={{uri:"https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}  resizeMode="cover"/>
  </View>
</ScrollView>


        </View>

        
      </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
