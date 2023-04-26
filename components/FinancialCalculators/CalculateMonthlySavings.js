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

function calculateMonthlySavings(age, retirementAge, yearlyInflationRate, retirementGoal) {
  // Calculate the number of years until retirement
  const yearsUntilRetirement = retirementAge - age;
  
  // Adjust the retirement goal for inflation
  const inflationAdjustedGoal = retirementGoal * Math.pow(1 + (yearlyInflationRate / 100), yearsUntilRetirement);
  
  // Calculate the total number of months until retirement
  const monthsUntilRetirement = yearsUntilRetirement * 12;
  
  // Divide the inflation-adjusted retirement goal by the number of months to get the required monthly savings
  const monthlySavingsNeeded = inflationAdjustedGoal / monthsUntilRetirement;
  
  // Return the monthly savings amount as a string with two decimal places
  return monthlySavingsNeeded.toFixed();
}

const CalculateMonthlySavings = () => {

  const [age, setAge] = useState("");
  const [rAge, setRAge] = useState("");
  const [yearInfRate, setYearInfRate] = useState("");
  const [retireGoal, setRetireGoal] = useState("");

  const goalText = "Retirement goal:"
  const infText = "Inflation Rate:"

  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("You should be saving $" + calculateMonthlySavings(parseInt(age), parseInt(rAge), parseFloat(yearInfRate), parseInt(retireGoal)) + " per month.");
  }

  return (
    <View style={styles.container}>
        <View style={styles.firstInputView}>
          <Text style={styles.inputText}>Age:</Text>
          <TextInput onChangeText={setAge} placeholder='Enter Your Age' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        </View>
        <View style={styles.restInputView}>
          <Text style={styles.inputText}>Retirement Age:</Text>
          <TextInput onChangeText={setRAge} placeholder='Enter Your Retirement Age' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        </View>
        <View style={styles.restInputView}>
          <Text style={styles.inputText}>{infText}</Text>
          <TextInput onChangeText={setYearInfRate} placeholder={'Enter Inflation Rate \n(yearly, %)'} placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        </View>
        <View style={styles.restInputView}>
          <Text style={styles.inputText}>{goalText}</Text>
          <TextInput onChangeText={setRetireGoal} placeholder={'Enter Your \nRetirement Goal ($)'} placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
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
    width: Platform.OS === "web" ? "35%" : "50%",
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

export default CalculateMonthlySavings;