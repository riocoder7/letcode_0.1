import React, { useState } from "react";
import {
  View, Text, FlatList, TouchableOpacity, ScrollView, TextInput, Animated, TouchableWithoutFeedback, StyleSheet,
  Image
} from "react-native";
import { WebView } from "react-native-webview";
import course_data from "@/components/course_data.json";
import { hide } from "expo-router/build/utils/splash";
import CodeResult from "@/components/code_result";

const CourseScreen = () => {
  const [selectedLesson, setSelectedLesson] = useState(course_data[1].lessons[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [code, setCode] = useState(selectedLesson.example);
  const slideAnim = useState(new Animated.Value(-300))[0]; // Sidebar hidden initially
  const [showOutPut, setshowOutPut] = useState(false)
  // Toggle Sidebar Animation
  const toggleMenu = () => {
    Animated.timing(slideAnim, {
      toValue: isMenuOpen ? -300 : 0, // Slide in/out
      duration: 300,
      useNativeDriver: false
    }).start();
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  const closeMenu = () => {
    if (isMenuOpen) toggleMenu();
  };

  // Reset code editor
  const resetCode = () => {
    setCode(selectedLesson.example);
  };

  // Change lesson and update the editor
  const changeLesson = (lesson: {
    id: number;
    title: string;
    content: string;
    example: string;
    subTopics: {
      title: string;
      content: string;
      code_output?: {
        code: string[],
        fileName: string,
        language: string,
        
        size?: number
      }[];

    }[]
  }) => {
    setSelectedLesson(lesson);
    setCode(lesson.example);
    closeMenu();
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#0D121C", paddingBottom: 10 }}>
      {/* ☰ Menu Button */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.menuText}>☰ Menu</Text>
      </TouchableOpacity>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <TouchableWithoutFeedback onPress={closeMenu}>

          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      {/* Sidebar (Animated) */}
      <Animated.View style={[styles.sidebar, { left: slideAnim }]}>
        <FlatList
          data={course_data[1].lessons}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => changeLesson(item)} style={[
              styles.lessonItem, selectedLesson.id === item.id && styles.selectedLesson
            ]}>
              <Text style={styles.lessonText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </Animated.View>

      {/* Main Content */}
      <ScrollView style={styles.content}>



        <Text style={styles.title}>{selectedLesson.title}</Text>
        <View style={styles.subTopicItem}>
          <Text style={styles.description}>{selectedLesson.content}</Text>
        </View>



        {/* Sub-Topics Section */}
        {selectedLesson.subTopics && selectedLesson.subTopics.length > 0 && (

          <View style={styles.subTopicContainer}>
            {/* <Text style={styles.subTopicTitle}>Sub-Topics:</Text> */}
            {selectedLesson.subTopics.map((sub, index) => (
             
              <View key={index}>
                <Text style={styles.subTopicHeader}>{sub.title}</Text>
                <View style={styles.subTopicItem}>
                  <Text style={styles.subTopicContent}>{sub.content}</Text>
                </View>

                 {/* code and result section  */}
              {sub.code_output && <CodeResult output={sub.code_output} index={index} />}

            </View>
            ))}

          </View>
        )}

       


        {/* Code Editor */}
        <Text style={styles.sectionTitle}>Try It Yourself:</Text>

        <TextInput
          style={styles.codeEditor}
          multiline
          value={code}
          onChangeText={setCode}
          editable
        />

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={() => { /* Add your run code logic here */ }} style={styles.runButton}>
            <Text style={styles.buttonText}>Run Code</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={resetCode} style={styles.resetButton}>
            <Text style={styles.buttonText}>Reset Code</Text>
          </TouchableOpacity>

        </View>



        {/* Live Preview */}
        <WebView source={{ html: code }} style={styles.webView} />

        {/* Navigation Buttons */}
        <View style={styles.navigation}>
          {selectedLesson.id > 1 && (
            <TouchableOpacity
              onPress={() => changeLesson(course_data[1].lessons[selectedLesson.id - 2])}
              style={[styles.navButton, styles.previousButton]}>
              <Text style={styles.buttonText}>⬅️ Previous</Text>
            </TouchableOpacity>
          )}
          {selectedLesson.id < course_data[1].lessons.length && (
            <TouchableOpacity
              onPress={() => changeLesson(course_data[1].lessons[selectedLesson.id])}
              style={[styles.navButton, styles.nextButton]}>
              <Text style={styles.buttonText}>Next ➡️</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    padding: 15,
    backgroundColor: "#007BFF"
  },
  menuText: {
    color: "#fff",
    fontSize: 20
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: 300,
    backgroundColor: "#1E1E2E",
    padding: 10,
    zIndex: 10
  },
  lessonItem: {
    padding: 10,
    backgroundColor: "#2D2D3A",
    marginBottom: 5,
    borderRadius: 5
  },
  selectedLesson: {
    backgroundColor: "#007BFF"
  },
  lessonText: {
    color: "#99CC7D"
  },
  content: {
    flex: 1,
    padding: 15
  },
  title: {
    fontFamily: "monospace",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007BFF",

  },
  description: {
    fontFamily: "monospace",
    marginBottom: 15,
    fontSize: 16,
    lineHeight: 22,
    color: "#fff"
  },
  subTopicContainer: {
    marginBottom: 15,
    marginTop: 15,
  },
  subTopicTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#99CC7D"
  },
  subTopicItem: {
    marginBottom: 50,
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderColor: "#007BFF"
  },
  subTopicHeader: {
    fontFamily: "monospace",
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 20,
    color: "#99CC7D"
  },
  subTopicContent: {
    fontFamily: "monospace",
    fontSize: 15,
    lineHeight: 25,
    color: "#fff"
  },
  sectionTitle: {
    fontWeight: "bold",
    marginTop: 10,
    color: "#fff"
  },
  codeEditor: {
    fontFamily: "monospace",
    minHeight: 350,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#aaa",
    padding: 10,
    fontSize: 16,
    marginVertical: 10,
    color: "#fff",
    backgroundColor: "#2D2D3A",
    maxHeight: 450,
    borderLeftColor: "#007BFF"
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 10,
    justifyContent: "space-between"
  },
  resetButton: {
    padding: 10,
    backgroundColor: "#DC3545",
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",

  },
  runButton: {
    padding: 10,
    backgroundColor: "#28A745",
    borderRadius: 5,
    marginLeft: 10
  },
  webView: {
    height: 150,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  navigation: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 30
  },
  navButton: {
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: "center"
  },
  previousButton: {
    backgroundColor: "#007BFF",
    marginRight: 5
  },
  nextButton: {
    backgroundColor: "#28A745",
    marginLeft: 5
  }
});

export default CourseScreen;
