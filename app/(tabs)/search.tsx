import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Button, TouchableOpacity } from 'react-native';

const SearchCourses = () => {
  const [query, setQuery] = useState('');
  const [courses, setCourses] = useState<{ id: string; title: string; description: string }[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const sampleCourses = [
    { id: '1', title: 'React Native for Beginners', description: 'Learn the basics of React Native.' },
    { id: '2', title: 'Advanced React Native', description: 'Dive deeper into advanced concepts.' },
    { id: '3', title: 'React Native UI Design', description: 'Learn how to create beautiful UIs.' },
    { id: '4', title: 'React Native Animations', description: 'Master animations in React Native.' },
  ];

  const handleSearch = () => {
    setIsSearching(true);

    // Simulate a search by filtering the sample data
    const filteredCourses = sampleCourses.filter((course) =>
      course.title.toLowerCase().includes(query.toLowerCase())
    );

    // Simulate network delay
    setTimeout(() => {
      setCourses(filteredCourses);
      setIsSearching(false);
    }, 1000);
  };

  const renderCourse = ({ item }: { item: { id: string; title: string; description: string } }) => (
    <TouchableOpacity style={styles.courseCard}>
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseDescription}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Courses</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Type course name..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      {isSearching ? (
        <Text style={styles.loadingText}>Searching...</Text>
      ) : courses.length > 0 ? (
        <FlatList
          data={courses}
          keyExtractor={(item) => item.id}
          renderItem={renderCourse}
          style={styles.resultsList}
        />
      ) : (
        <Text style={styles.noResults}>
          {query ? 'No courses found.' : 'Search for courses to see results.'}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  resultsList: {
    marginTop: 20,
  },
  courseCard: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  courseDescription: {
    marginTop: 5,
    fontSize: 14,
    color: '#666',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  noResults: {
    marginTop: 20,
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
});

export default SearchCourses;
