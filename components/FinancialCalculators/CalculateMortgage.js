import React, { useState } from 'react';
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

function calculateMortgage(loanAmount, monthlyInterestRate, termInYears) {

  const termInMonths = termInYears * 12;  // Aylık vade

  // Calculates the monthly payment using the formula: M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)
  const monthlyInterestRateDecimal = monthlyInterestRate / 100;
  const numerator = loanAmount * monthlyInterestRateDecimal * (Math.pow(1 + monthlyInterestRateDecimal, termInMonths));
  const denominator = Math.pow(1 + monthlyInterestRateDecimal, termInMonths) - 1;
  const monthlyPayment = numerator / denominator;

  // Return the monthly payment, rounded to two decimal places
  return (monthlyPayment.toFixed(2));
}


const CalculateMortgage = () => {

  const [loanAmount, setLoanAmount] = useState("");
  const [mInterestRate, setMInterestRate] = useState("");
  const [termInYears, setTermInYears] = useState("");

  const loanText = "Loan Amount:"
  const rateText = "Interest Rate:"
  const termText = "Term Length:"

  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("Monthly pay: $" + calculateMortgage(parseInt(loanAmount), parseFloat(mInterestRate), parseInt(termInYears)) + ".");
  }

  return (
    <View style={styles.container}>
        <View style={styles.firstInputView}>
          <Text style={styles.inputText}>{loanText}</Text>
          <TextInput onChangeText={setLoanAmount} placeholder='Enter the Loan Amount ($)' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        </View>
        <View style={styles.restInputView}>
          <Text style={styles.inputText}>{rateText}</Text>
          <TextInput onChangeText={setMInterestRate} placeholder={'Enter the Interest Rate \n(monthly, %)'} placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        </View>
        <View style={styles.restInputView}>
          <Text style={styles.inputText}>{termText}</Text>
          <TextInput onChangeText={setTermInYears} placeholder={'Enter Term Length \n(in years)'} placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
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

export default CalculateMortgage;