
import Popular_course from '@/components/popular_course';
import Courses from '@/components/course';
import { resetAndNavigate } from '@/constants/router_push';
import { BaseRouter } from '@react-navigation/native';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, useColorScheme, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Data from '@/components/data.json'


const Home = () => {
  const theme = useColorScheme(); // Detect light or dark mode
  const isDarkMode = theme === 'dark';
  const [selected, setSelected] = useState('all');
  // console.log(Data);


  const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 60,
      backgroundColor: isDarkMode ? '#000000' : '#f8f9fa', // Dark or Light background
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      // paddingHorizontal: 20,
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
      marginLeft: 10,
      position: 'relative',
      backgroundColor: "#333333",
      borderRadius: "50%",
      width: 50,
      height: 50,
      justifyContent: "center",
      alignItems: "center"
    },
    notificationBadge: {
      position: 'absolute',
      top: 4,
      right: 5,
      width: 8,
      height: 8,
      backgroundColor: 'red',
      borderRadius: 4,
    },
    horizontal_scroll: {
      flexDirection: "row",
      paddingBottom: 25,
      gap: 5,
      paddingTop: 10

    },
    text_color: {
      color: "white",
      fontWeight: "900"
    },
    randerBtn: {
      borderRadius: 50,
      borderWidth: 1,
      borderColor: "white",
      width: 60,
      height: 60,
      alignItems: "center",
      justifyContent: "center"
    }


  });

  return (
    <>
      <SafeAreaView style={{ backgroundColor: "#000000", paddingHorizontal: 10 }}>
        <View style={styles.header}>
          {/* User Profile Section */}
          <TouchableOpacity onPress={() => router.push('/(tabs)/profile')}>
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
          </TouchableOpacity>
          {/* Icons Section */}
          <View style={styles.iconSection}>


            {/* Notification Icon */}
            <TouchableOpacity style={styles.iconContainer} onPress={() => router.push('/Notification')}>
              <Image style={{ tintColor: "white", width: 20, height: 20 }} source={require('@/assets/icons/notification.png')} />
              <View style={styles.notificationBadge}></View> {/* Notification Badge */}
            </TouchableOpacity>

            {/* Search Icon */}
            <TouchableOpacity style={styles.iconContainer} onPress={() => resetAndNavigate('/(tabs)/search')}>
              <Image style={{ tintColor: "white", width: 20, height: 20 }} source={require('@/assets/icons/search.png')} />
            </TouchableOpacity>


          </View>
        </View>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.horizontal_scroll}>

            <TouchableOpacity onPress={() => (setSelected('all'))} >
              <View style={[styles.randerBtn, selected === 'all' ? { backgroundColor: "white" } : { backgroundColor: 'rgba(0,0,0,0)' }]}>
                <Text style={[styles.text_color, selected === 'all' ? { color: "black" } : { color: "white" }]}> ALL </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => (setSelected('Development'))} >
              <View style={[{ borderRadius: 50, borderWidth: 1, borderColor: "white", width: 130, height: 60, alignItems: "center", justifyContent: "center" }, selected === 'Development' ? { backgroundColor: "white" } : { backgroundColor: 'rgba(0,0,0,0)' }]}>
                <Text style={[styles.text_color, selected === 'Development' ? { color: "black" } : { color: "white" }]}>Development </Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => (setSelected('Data'))} >
              <View style={[{ borderRadius: 50, borderWidth: 1, borderColor: "white", width: 90, height: 60, alignItems: "center", justifyContent: "center" }, selected === 'Data' ? { backgroundColor: "white" } : { backgroundColor: 'rgba(0,0,0,0)' }]}>
                <Text style={[styles.text_color, selected === 'Data' ? { color: "black" } : { color: "white" }]}>Data </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => (setSelected('Programming'))} >
              <View style={[{ borderRadius: 50, borderWidth: 1, borderColor: "white", width: 150, height: 60, alignItems: "center", justifyContent: "center" }, selected === 'Programming' ? { backgroundColor: "white" } : { backgroundColor: 'rgba(0,0,0,0)' }]}>
                <Text style={[styles.text_color, selected === 'Programming' ? { color: "black" } : { color: "white" }]}> Programming </Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => (setSelected('git'))}>
              <View style={[{ borderRadius: 50, borderWidth: 1, borderColor: "white", width: 120, height: 60, alignItems: "center", justifyContent: "center" }, selected === 'git' ? { backgroundColor: "white" } : { backgroundColor: 'rgba(0,0,0,0)' }]}>
                <Text style={[styles.text_color, selected === 'git' ? { color: "black" } : { color: "white" }]}>Git & Github </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => (setSelected('Framework'))}>
              <View style={[{ borderRadius: 50, borderWidth: 1, borderColor: "white", width: 120, height: 60, alignItems: "center", justifyContent: "center" }, selected === 'Framework' ? { backgroundColor: "white" } : { backgroundColor: 'rgba(0,0,0,0)' }]}>
                <Text style={[styles.text_color, selected === 'Framework' ? { color: "black" } : { color: "white" }]}>Framework</Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => (setSelected('Cloud_Computing'))} >
              <View style={[{ borderRadius: 50, borderWidth: 1, borderColor: "white", width: 150, height: 60, alignItems: "center", justifyContent: "center" }, selected === 'Cloud_Computing' ? { backgroundColor: "white" } : { backgroundColor: 'rgba(0,0,0,0)' }]}>
                <Text style={[styles.text_color, selected === 'Cloud_Computing' ? { color: "black" } : { color: "white" }]}>Cloud Computing </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => (setSelected('other'))} >
              <View style={[{ borderRadius: 50, borderWidth: 1, borderColor: "white", width: 120, height: 60, alignItems: "center", justifyContent: "center" }, selected === 'other' ? { backgroundColor: "white" } : { backgroundColor: 'rgba(0,0,0,0)' }]}>
                <Text style={[styles.text_color, selected === 'other' ? { color: "black" } : { color: "white" }]}> other </Text>
              </View>
            </TouchableOpacity>



          </View>
        </ScrollView>



        <ScrollView >

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {Data.filter((item) => selected === 'all' || item.category === selected).map((item) => (
              <Popular_course key={item.id} data={[item]} />
            ))}

            {/* <Popular_course startColor="#FFCFCF" EndColor="#FEDADA" textValue={"App Developments & Desing  "}  />
      <Popular_course startColor="#AD9AF4" EndColor="#CDC0FD" textValue={"Web Developments Advance  "} />
      <Popular_course startColor="#FFCFCF" EndColor="#FEDADA" textValue={"App Developments Advance  "}  /> */}
          </ScrollView>

          {Data.filter((item) => selected === 'all' || item.category === selected).map((item) => (
               <Courses key={item.id} data={[item]} />
            ))}

        
          {/* <Courses startColor='#C4C98B' EndColor='#CACAA6'  textValue={"Machine Larning Progamming"} /> */}

          {/*
      <Courses startColor='#CDE1FE' EndColor='#EEEEDC'  textValue={"Marn Stack Progamming"}/>
      <Courses startColor='#CFFFDC' EndColor='#EEEEDC' textValue={"python Progamming"} />
      <Courses startColor='#D989FD' EndColor='#D989FD' textValue={"Dev Opps Progamming"} /> */}




          <View style={{ width: "100%", height: 150, backgroundColor: "red" }}>

          </View>
        </ScrollView>

      </SafeAreaView>
    </>
  );
};

export default Home;
