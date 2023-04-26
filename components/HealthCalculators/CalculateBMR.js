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
import RadioButton from '../RadioButton';

function calculateBMR(gender, age, height, weight) {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else if (gender === 'female') {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

const CalculateBMR = () => {

  const [selectedGender, setSelectedGender] = useState("male");
  const [mSelected, setMSelected] = useState(false);
  const [fSelected, setFSelected] = useState(false);

  const onMalePress = () => {
    setFSelected(false);
    setMSelected(true);
    setSelectedGender("male");
  }
  const onFemalePress = () => {
    setMSelected(false);
    setFSelected(true);
    setSelectedGender("female");
  }

  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const hText = "Height:"
  const wText = "Weight:"

  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("Your BMR: " + calculateBMR(selectedGender, parseInt(age), parseFloat(height), parseFloat(weight)));
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: "row", marginTop: 20}}>
        <Text style={{fontSize: 16, fontWeight: "500", marginRight: 20}}>Gender:</Text>
        <Pressable onPress={onMalePress}>
          <RadioButton selected={mSelected}/>
        </Pressable>
        <Text style={{fontSize: 17, marginLeft: 5, marginRight: 20}}>Male</Text>
        <Pressable onPress={onFemalePress}>
          <RadioButton selected={fSelected}/>
        </Pressable>
        <Text style={{fontSize: 17, marginLeft: 5, marginRight: 20}}>Female</Text>
      </View>
        <View style={styles.ageInputView}>
          <Text style={styles.ageInputText}>Age:</Text>
          <TextInput onChangeText={setAge} placeholder='Enter Your Age' placeholderTextColor={colors.inputPlaceholder} style={styles.ageInputField}/>
        </View>
        <View style={styles.hInputView}>
          <Text style={styles.hInputText}>{hText}</Text>
          <TextInput onChangeText={setHeight} placeholder='Enter Your Height (cm)' placeholderTextColor={colors.inputPlaceholder} style={styles.hInputField}/>
        </View>
        <View style={styles.wInputView}>
          <Text style={styles.wInputText}>{wText}</Text>
          <TextInput onChangeText={setWeight} placeholder='Enter Your Weight (kg)' placeholderTextColor={colors.inputPlaceholder} style={styles.wInputField}/>
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
  radiosView: {
    flexDirection: "row",
  },
  ageInputView: {
    width: "100%",
    marginTop: 18,
    marginBottom: 16,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.bgLight,
  },
  hInputView: {
    width: "100%",
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
  ageInputText: {
    color: colors.headerColor,
    fontSize: 16,
    marginRight: 20,
    fontWeight: "500"
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
  ageInputField: {
    width: Platform.OS === "web" ? "35%" : "50%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.headerColor,
    paddingHorizontal: 5,
    borderRadius: 4
  },
  hInputField: {
    width: Platform.OS === "web" ? "35%" : "50%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.headerColor,
    paddingHorizontal: 5,
    borderRadius: 4
  },
  wInputField: {
    width: Platform.OS === "web" ? "35%" : "50%",
    height: 40,
    borderWidth: 1,
    borderColor: colors.headerColor,
    paddingHorizontal: 5,
    borderRadius: 4,
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

export default CalculateBMR;