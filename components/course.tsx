import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
interface PopularCourseProps {
  startColor: string;
  EndColor: string;
  textValue:string;
  
}
const Courses : React.FC<PopularCourseProps> = ({ startColor, EndColor , textValue }) => {
  return (
    <View style={styles.course}>
      <LinearGradient
        colors={[startColor, EndColor]} // Adjust colors as needed
        // start={{ y: 0, x: 0 }}
        // end={{ x: 1, y: 1 }}
        style={styles.innerView}
      >
        <View style={{width:"100%" , height:"100%"  , padding:20}}> 
        <View style={styles.text}> 
        <Text style={{fontSize:30, fontWeight:"900", paddingHorizontal:0}}>{textValue}</Text>
        </View>
        <View style={styles.btn}>

          <View style={{width:80, height:35, backgroundColor:"#E9AFFC", borderRadius:15 , justifyContent:"center",borderWidth:1, alignItems:"center"}}>
          <Text style={{fontWeight:"900"}}>Free </Text>   
          </View>
          <View style={styles.arrowView}>
                  <Image source={require('@/assets/icons/arrow.png')} style={{ width: 20, height: 20 }} />
                </View>
        </View>
        </View>
      </LinearGradient>
    </View>
  )
}

export default Courses

const styles = StyleSheet.create({
    course:{
        width:"100%",
        height:180,
        backgroundColor:"#000000",
        padding:5,
    },
    innerView:{
        width:"100%",
        height:"100%",
        borderRadius:25,
        overflow:"hidden"
        // Remove backgroundColor since it's now handled by LinearGradient
        // backgroundColor:"#f0f4f8" 
    },
    text:{
      width:"100%",
      height:"50%",
      // backgroundColor:"green",

    },
    btn:{
      width:"100%",
      height:"50%",
      // backgroundColor:"pink",
      flexDirection:"row",
      alignItems:"flex-end",
      justifyContent:"space-between",
      padding:10
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
})