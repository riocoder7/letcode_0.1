import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, FlatList, Alert } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Modalize } from 'react-native-modalize';
import SearchCom from '@/components/search';

const SearchPage = () => {
  const modalizeRefFilter = useRef<Modalize>(null);

  const [searchInput, setsearchInput] = useState('');
  const [Beginners, setBeginners] = useState(false);
  const [Advance, setAdvance] = useState(false);
  const [Intermediate, setIntermediate] = useState(false);
  

  
  // Example course data
  const courseData = [
    { name: "Java" },
    { name: "Python" },
    { name: "JavaScript" },
    { name: "C++" },
    { name: "C#" },
    { name: "Ruby" },
    { name: "Go" },
    { name: "Swift" },
    { name: "Kotlin" },
    { name: "PHP" },
  ];

  // Filter courses based on the search input
  const filteredCourses = courseData.filter(course =>
    course.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  // Function to open the bottom sheet
  const onOpen = () => {
    modalizeRefFilter.current?.open(); 
  };

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          {/* Search Icon */}
          <Icon name="search" size={24} color="#fff" style={styles.searchIcon} />

          {/* Divider between search icon and input */}
          <Text style={styles.divider}>|</Text>

          {/* Search Input */}
          <TextInput
            style={styles.input}
            placeholder="Search..."
            placeholderTextColor="#aaa"
            value={searchInput}
            onChangeText={setsearchInput}
            autoFocus={false}
          />
          {/* Divider between input and filter icon */}
          <Text style={styles.divider}>|</Text>

          {/* Filter Icon */}
          <TouchableOpacity style={styles.iconContainer} onPress={onOpen}>
            <Icon name="filter-list" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Background view */}
        <View style={styles.backgroundView}>
          <SearchCom/>

          {/* <Text style={styles.backgroundText}>Background content behind courses</Text> */}
        </View>

        {/* Absolutely Positioned Courses Display */}
        {searchInput !== '' && filteredCourses.length > 0 ? (
          <FlatList
            data={filteredCourses}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={()=>Alert.alert(item.name)} style={styles.courseItem}>
                <View style={{width:'100%', height:150, backgroundColor:"green", borderRadius:8}}>
                <Text style={styles.courseText}>{item.name}</Text>
                </View>
                
              </TouchableOpacity>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.courseListContainer}
            style={styles.absoluteCoursesList} // Absolute positioning applied here
          />
        ) : (
          searchInput !== '' && (
            <View style={{position:"absolute", top:65, left:0, right:0, zIndex:10,  }}>
            <Text style={styles.noResultsText}>No results found</Text>
            </View>
          )
        )}

        {/* Bottom Sheet filter */}
        <Modalize ref={modalizeRefFilter} snapPoint={300} modalHeight={700} handlePosition="inside">
          <View style={styles.bottomSheetContent}>
            <View style={styles.bottomSheet_sub_Content}> 
            <View>  <Text style={{fontSize:25}}>Beginners </Text> </View>
              <TouchableOpacity  onPress={()=>setBeginners(!Beginners)} style={[{width:50, height:'80%',borderRadius:8 ,  borderWidth:2}, Beginners === true ?{backgroundColor:"red"}:{backgroundColor:"yellow"}]}> </TouchableOpacity>
              </View>

             <View style={styles.bottomSheet_sub_Content}> 
              <Text style={{fontSize:25}}>Intermediate </Text> 
              <TouchableOpacity onPress={()=>setIntermediate(!Intermediate)} style={[{width:50, height:'80%',borderRadius:8 ,  borderWidth:2}, Intermediate === true ?{backgroundColor:"red"}:{backgroundColor:"yellow"}]}> </TouchableOpacity>
              </View>

               <View style={styles.bottomSheet_sub_Content}> 
              <Text style={{fontSize:25}}>Advance </Text> 
              <TouchableOpacity onPress={()=>setAdvance(!Advance)} style={[{width:50, height:'80%',borderRadius:8 ,  borderWidth:2, }, Advance === true ?{}:{backgroundColor:"yellow"} ]}> 
                <Text style={{ fontSize: 25 }}>✅</Text>
              </TouchableOpacity>
              </View>
          </View>
        </Modalize>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
    position: 'relative', // This makes the absolute positioning work inside this container
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e1e1e', // Darker background for search bar
    borderRadius: 8,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: '100%', // Increase width to 100%
    height: 50, 
    borderWidth:2,
    borderColor:"gray"
    
  },
  searchIcon: {
    marginRight: 4,
  },
  divider: {
    color: '#555',
    marginHorizontal: 4,
    fontSize: 25,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginLeft: 4,
    color: '#fff', // White text color for input
  },
  iconContainer: {
    paddingHorizontal: 8,
  },
  backgroundView: {
    width: '100%',
    height: 500,
    flex:1,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
    top:20 // Makes sure other content stays below
  },
  backgroundText: {
    color: 'white',
    fontSize: 18,
  },
  courseListContainer: {
    marginTop: 20,
    
  },
  courseItem: {
    backgroundColor: '#1e1e1e',
    padding: 5,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth:2,
    borderColor:"gray",
    overflow:"hidden"
  },
  courseText: {
    color: '#fff',
    fontSize: 16,
  },
  absoluteCoursesList: {
    paddingHorizontal:15,
    backgroundColor:"#121212",
    position: 'absolute', // Positions the list over the background content
    top: 80, // Adjust top position to avoid overlap with search bar
    left: 0,
    right: 0,
    zIndex: 10, // Ensure the courses list appears on top
  },
  noResultsText: {
    color: '#aaa',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor:"#121212",
    height:60
  },
  bottomSheetContent: {
    padding: 16,
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  dragHandle: {
    backgroundColor: '#ff6347',
    height: 5,
    borderRadius: 3,
    width: '20%',
    alignSelf: 'center',
    marginTop: 10,
  },
  bottomSheet_sub_Content:{
    width:'100%',
    height:50,
    borderRadius:8, 
    borderWidth:2,
    marginTop:30, 
    paddingHorizontal:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"    
  }
});

export default SearchPage;
