import React, { useRef, useState } from 'react';
import { 
  StyleSheet,
  Text, 
  View,
  TextInput,
  Platform,
  Pressable
} from 'react-native';

import colors from '../../constants/colors';

import CalculateButton from '../CalculateButton';

function calculateBMI(height, weight) {
  // Converts height from centimeters to meters
  height = height / 100;
  
  // Calculates BMI
  const bmi = weight / (height * height);
  
  // Determine weight status based on BMI
  if (bmi < 18.5) {
    return "You are underweight";
  } else if (bmi < 25) {
    return "You have a normal weight";
  } else if (bmi < 30) {
    return "You are overweight";
  } else {
    return "You are obese";
  }
}

function returnBMI(height, weight) {
  height = height / 100;
  const bmi = weight / (height * height);
  return bmi.toFixed(2);
}

const CalculateBMI = () => {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const hText = "Height:"
  const wText = "Weight:"

  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("Your BMI: " + returnBMI(parseFloat(height), parseFloat(weight)) + "\n" + calculateBMI(parseFloat(height), parseFloat(weight)));
  }

  return (
    <View style={styles.container}>
        <View style={styles.hInputView}>
          <Text style={styles.hInputText}>{hText}</Text>
          <TextInput onChangeText={setHeight} placeholder='Enter Your Height (cm)' placeholderTextColor={colors.inputPlaceholder} style={styles.firstNumber}/>
        </View>
        <View style={styles.wInputView}>
          <Text style={styles.wInputText}>{wText}</Text>
          <TextInput onChangeText={setWeight} placeholder='Enter Your Weight (kg)' placeholderTextColor={colors.inputPlaceholder} style={styles.secondNumber}/>
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
  hInputView: {
    width: "100%",
    marginTop: 20,
    marginBottom: 16,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.bgLight,
  },
  wInputView: {
    width: "100%",
    marginBottom: 25,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.bgLight,
  },
  hInputText: {
    color: colors.headerColor,
    fontSize: 16,
    marginRight: 20,
    fontWeight: "500"
  },
  wInputText: {
    color: colors.headerColor,
    fontSize: 16,
    marginRight: 20,
    fontWeight: "500"
  },
  firstNumber: {
    width: Platform.OS === "web" ? "35%" : "50%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.headerColor,
    paddingHorizontal: 5,
    borderRadius: 4
  },
  secondNumber: {
    width: Platform.OS === "web" ? "35%" : "50%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.headerColor,
    paddingHorizontal: 5,
    borderRadius: 5,
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

export default CalculateBMI;