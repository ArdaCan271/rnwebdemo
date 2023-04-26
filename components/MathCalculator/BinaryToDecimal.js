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

function binaryToDecimal(binaryNumber) {
  if (!/^[01]+$/.test(binaryNumber)) {
    return undefined; // invalid input value
  } else {
    let decimalNumber = 0;
    let binaryDigits = binaryNumber.split('').reverse();
    for (let i = 0; i < binaryDigits.length; i++) {
      let binaryDigit = Number(binaryDigits[i]);
      let decimalDigit = binaryDigit * Math.pow(2, i);
      decimalNumber += decimalDigit;
    }
    return decimalNumber;
  }
}

const BinaryToDecimal = () => {

  const [num, setNum] = useState("");

  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("Decimal: " + binaryToDecimal(num));
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstInputView}>
        <Text style={styles.inputText}>Binary:</Text>
        <TextInput onChangeText={setNum} placeholder='Enter a binary number' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
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
    width: Platform.OS === "web" ? "15%" : "23%",
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

export default BinaryToDecimal;