import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface PopularCourseProps {
  startColor: string;
  EndColor: string;
  textValue: string; // Array of text values
}

const Popular_course: React.FC<PopularCourseProps> = ({ startColor, EndColor, textValue }) => {
  return (
    <View style={styles.popular_course}>
     
        <View style={styles.popular_course_parts}>
          <LinearGradient colors={[startColor, EndColor]} style={styles.gradient}>
            <View style={styles.textContainer}>
              <Text style={styles.text} >
                {textValue}
              </Text>
            </View>

            <View style={styles.btn_arrow}>

              <View style={styles.freeBtn}>
                <Text style={{fontWeight:"500"}}>Free</Text>
              </View>
               <View style={styles.arrowView}>
                                <Image source={require('@/assets/icons/arrow.png')} style={{ width: 20, height: 20 }} />
                              </View>
            </View>
                    
          </LinearGradient>
        </View>
     
    </View>
  );
};

export default Popular_course;

const styles = StyleSheet.create({
  popular_course: {
    paddingTop: 10,
    paddingHorizontal: 5,
    paddingBottom: 5,
    
  },
  popular_course_parts: {
    width: 154,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: "#f0f4f8",
  },
  gradient: {
    width: "100%",
    height: "100%",
    
  },
  textContainer: {
    paddingHorizontal: 8,
    paddingTop: 25,
    
    height:"70%",
    
  },
  text: {
    fontSize: 20,
    fontWeight: "900",
    color: "#000",
  },
  btn_arrow:{
    width:"100%",
    height:"30%",
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:10
  },
  freeBtn:{
    width:60,
    height:30,
    backgroundColor:"#E9AFFC",
    borderRadius:20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    borderWidth:1
  },
  arrowView: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:"black",
    borderWidth:1
  },
});
