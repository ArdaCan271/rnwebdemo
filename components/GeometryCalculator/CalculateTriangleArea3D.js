import React, { useState } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  Platform,
} from 'react-native';

import colors from '../../constants/colors';

import CalculateButton from '../CalculateButton';

function distanceBetweenPoints(x1, y1, z1, x2, y2, z2) {
  // Calculate the distance using the Pythagorean theorem
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));
  return distance;
}

function areaOfTriangle(x1, y1, z1, x2, y2, z2, x3, y3, z3) {
  // Calculate the distance between each pair of points
  const a = distanceBetweenPoints(x1, y1, z1, x2, y2, z2);
  const b = distanceBetweenPoints(x2, y2, z2, x3, y3, z3);
  const c = distanceBetweenPoints(x1, y1, z1, x3, y3, z3);

  // Calculate the semi-perimeter
  const s = (a + b + c) / 2;

  // Calculate the area using Heron's formula
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  return area;
}


const CalculateTriangleArea3D = () => {

  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");
  const [z1, setZ1] = useState("");

  const [x2, setX2] = useState("");
  const [y2, setY2] = useState("");
  const [z2, setZ2] = useState("");

  const [x3, setX3] = useState("");
  const [y3, setY3] = useState("");
  const [z3, setZ3] = useState("");

  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("Area: " + areaOfTriangle(parseFloat(x1), parseFloat(y1), parseFloat(z1), parseFloat(x2), parseFloat(y2), parseFloat(z2), parseFloat(x3), parseFloat(y3), parseFloat(z3)));
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstInputView}>
        <Text style={styles.inputText}>x1 , y1 , z1:</Text>
        <TextInput onChangeText={setX1} placeholder='Enter x1' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 10}}>,</Text>
        <TextInput onChangeText={setY1} placeholder='Enter y1' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 10}}>,</Text>
        <TextInput onChangeText={setZ1} placeholder='Enter z1' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
      </View>
      <View style={styles.restInputView}>
        <Text style={styles.inputText}>x2 , y2 , z2:</Text>
        <TextInput onChangeText={setX2} placeholder='Enter x2' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 10}}>,</Text>
        <TextInput onChangeText={setY2} placeholder='Enter y2' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 10}}>,</Text>
        <TextInput onChangeText={setZ2} placeholder='Enter z2' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
      </View>
      <View style={styles.restInputView}>
        <Text style={styles.inputText}>x3 , y3 , z3:</Text>
        <TextInput onChangeText={setX3} placeholder='Enter x3' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 10}}>,</Text>
        <TextInput onChangeText={setY3} placeholder='Enter y3' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 10}}>,</Text>
        <TextInput onChangeText={setZ3} placeholder='Enter z3' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
      </View>
      <CalculateButton onPress={onCalculateClick}/>
      <View style={styles.resultBox}>
        <View style={styles.resultTextBox}>
          <Text style={styles.resultHeadText}>Result</Text>
        </View>
        <View style={styles.resultTextView}>
          <Text style={styles.resultText}>{result}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  firstInputView: {
    width: "100%",
    marginTop: 20,
    marginBottom: 15,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.bgLight,
  },
  restInputView: {
    width: "100%",
    marginBottom: 15,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.bgLight,
  },
  inputText: {
    color: colors.headerColor,
    fontSize: 16,
    marginRight: 20,
    fontWeight: "500"
  },
  inputField: {
    width: Platform.OS === "web" ? "8%" : "15%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.headerColor,
    paddingHorizontal: 5,
    borderRadius: 4
  },
  resultBox: {
    marginTop: 30,
    width: "80%",
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 3,
  },
  resultTextBox: {
    width: "100%",
    backgroundColor: colors.primary,
    paddingLeft: 5,
  },
  resultHeadText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  resultTextView: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 110,
  },
  resultText: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
    marginLeft: 8,
    marginTop: 8,
  }
});

export default CalculateTriangleArea3D;