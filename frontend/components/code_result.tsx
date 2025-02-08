import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CodeResult = ({ index, output }: { index: number, output: { code: string[]; result: string[]; fileName: string; language: string;  size?: number }[]
}) => {

  const [showOutPut, setshowOutPut] = useState(false)
  let size = output.length > 0 ? output[0].size ?? 25 : 25;

  return (
    <View key={index} style={{ marginBottom: 30, }}>

      <View style={{ marginBottom: 10 }}>
        <View style={{ width: '100%', height: 20, backgroundColor: "#0D121C", position: "absolute", zIndex: 1, marginTop: 10, flexDirection: "row" }}>
          <View style={{ width: '70%', paddingLeft: 10 }}> <Text style={{ color: "#fff" }}>{output[0]?.fileName}</Text></View>
          <View style={{ width: '30%', backgroundColor: "#007BFF", }}> <Text style={{ textAlign: "center", color: "#fff" }}>{output[0]?.language}</Text></View>
        </View>

        <TouchableOpacity onPress={() => setshowOutPut(true)} style={{ position: 'absolute', zIndex: 1, right: 30, bottom: 30, width: '20%', height: 40, borderRadius: 12, backgroundColor: "green" }}><Text style={{ textAlign: "center", color: "#fff" }}> Run</Text></TouchableOpacity>
        <View style={{ width: '95%', height: 250, backgroundColor: '#fff', paddingTop: 35, paddingLeft: 5, marginBottom: 10, position: "relative", zIndex: 0 }}>
          <Text style={{ fontSize: 12,fontWeight:"bold", fontFamily:"monospace" }}>{output[0]?.code.join('\n')}</Text>
        </View>


      </View>

      <View>
        <View style={{ width: '100%', height: 20, backgroundColor: "#0D121C", position: "absolute", zIndex: 1, marginTop: 10, flexDirection: "row", justifyContent: "flex-end" }}>
          <View style={{ width: '30%', backgroundColor: "#007BFF", }}> <Text style={{ textAlign: "center", color: "#fff", }}> RESULT</Text></View>
        </View>
        <View style={{ width: '95%', height: 250, backgroundColor: '#fff', paddingTop: 35, paddingLeft: 5, marginBottom: 10, position: "relative", zIndex: 0 }}>
          {showOutPut && output[0]?.result.map((result, idx) => {
            size = size - 2;
            return (
              <Text key={idx} style={{ fontSize: size , fontWeight:"bold"}}>{result}</Text>
            )
          })}
        </View>

      </View>
    </View>
  )
}

export default CodeResult

const styles = StyleSheet.create({})