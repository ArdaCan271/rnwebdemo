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

function calculateDaysLived(day, month, year) {
  const birthDate = new Date(year, month - 1, day); // month in Date starts from 0
  const today = new Date();
  const timeDiff = Math.abs(today.getTime() - birthDate.getTime());
  const daysLived = Math.floor(timeDiff / (1000 * 3600 * 24));

  return daysLived;
}


const CalculateDaysLived = () => {

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("Days lived: " + calculateDaysLived(parseInt(day), parseInt(month), parseInt(year)));
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstInputView}>
        <Text style={styles.inputText}>Birth Date:</Text>
        <TextInput onChangeText={setDay} placeholder='DD' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 5}}>/</Text>
        <TextInput onChangeText={setMonth} placeholder='MM' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 5}}>/</Text>
        <TextInput onChangeText={setYear} placeholder='YYYY' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
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

export default CalculateDaysLived;