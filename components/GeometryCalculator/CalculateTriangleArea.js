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

// Calculates the distance of given two points
function calculateDistance(x1, y1, x2, y2) {
  const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}

// Calculates the area of a triangle given its three corner points
function calculateTriangleArea(x1, y1, x2, y2, x3, y3) {
  const side1 = calculateDistance(x1, y1, x2, y2);
  const side2 = calculateDistance(x2, y2, x3, y3);
  const side3 = calculateDistance(x3, y3, x1, y1);
  const semiPerimeter = (side1 + side2 + side3) / 2;
  const area = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) * (semiPerimeter - side3));
  return area.toFixed(2);
}

const CalculateTriangleArea = () => {

  const [x1, setX1] = useState("");
  const [y1, setY1] = useState("");

  const [x2, setX2] = useState("");
  const [y2, setY2] = useState("");

  const [x3, setX3] = useState("");
  const [y3, setY3] = useState("");

  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("Area: " + calculateTriangleArea(parseFloat(x1), parseFloat(y1), parseFloat(x2), parseFloat(y2), parseFloat(x3), parseFloat(y3)));
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstInputView}>
        <Text style={styles.inputText}>x1 , y1:</Text>
        <TextInput onChangeText={setX1} placeholder='Enter x1' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 10}}>,</Text>
        <TextInput onChangeText={setY1} placeholder='Enter y1' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
      </View>
      <View style={styles.restInputView}>
        <Text style={styles.inputText}>x2 , y2:</Text>
        <TextInput onChangeText={setX2} placeholder='Enter x2' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 10}}>,</Text>
        <TextInput onChangeText={setY2} placeholder='Enter y2' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
      </View>
      <View style={styles.restInputView}>
        <Text style={styles.inputText}>x3 , y3:</Text>
        <TextInput onChangeText={setX3} placeholder='Enter x3' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 10}}>,</Text>
        <TextInput onChangeText={setY3} placeholder='Enter y3' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
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

export default CalculateTriangleArea;