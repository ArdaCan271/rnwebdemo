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

function daysBetweenDates(day1, month1, year1, day2, month2, year2) {
  const date1 = new Date(`${month1}/${day1}/${year1}`);
  const date2 = new Date(`${month2}/${day2}/${year2}`);
  const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds
  const diffInTime = Math.abs(date2.getTime() - date1.getTime());
  const diffInDays = Math.round(diffInTime / oneDay);
  return diffInDays;
}


const CalculateDayDifference = () => {

  const [d1, setD1] = useState("");
  const [m1, setM1] = useState("");
  const [y1, setY1] = useState("");

  const [d2, setD2] = useState("");
  const [m2, setM2] = useState("");
  const [y2, setY2] = useState("");


  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("Day difference: " + daysBetweenDates(parseInt(d1), parseInt(m1), parseInt(y1), parseInt(d2), parseInt(m2), parseInt(y2)));
  }

  return (
    <View style={styles.container}>
      <View style={styles.firstInputView}>
        <Text style={styles.inputText}>First Date:</Text>
        <TextInput onChangeText={setD1} placeholder='DD' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 5}}>/</Text>
        <TextInput onChangeText={setM1} placeholder='MM' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 5}}>/</Text>
        <TextInput onChangeText={setY1} placeholder='YYYY' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
      </View>
      <View style={styles.restInputView}>
        <Text style={styles.inputText}>Second Date:</Text>
        <TextInput onChangeText={setD2} placeholder='DD' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 5}}>/</Text>
        <TextInput onChangeText={setM2} placeholder='MM' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
        <Text style={{marginHorizontal: 5}}>/</Text>
        <TextInput onChangeText={setY2} placeholder='YYYY' placeholderTextColor={colors.inputPlaceholder} style={styles.inputField}/>
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

export default CalculateDayDifference;