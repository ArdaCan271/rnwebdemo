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

import RadioButton from '../RadioButton';
import GenerateButton from './GenerateButton';

function generatePassword(length, useLowercase, useUppercase, useNumbers, useSpecialChars) {
  let charset = "";
  if (useLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useNumbers) {
    charset += "0123456789";
  }
  if (useSpecialChars) {
    charset += "!@#$%^&*()_+";
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

const PasswordGeneratorComp = () => {

  const [length, setLength] = useState("");
  const [lowerCaseSelect, setLowerCaseSelect] = useState(false);
  const [upperCaseSelect, setUpperCaseSelect] = useState(false);
  const [numberSelect, setNumberSelect] = useState(false);
  const [specialSelect, setSpecialSelect] = useState(false);

  const onLowerPress = () => {
    setLowerCaseSelect(!lowerCaseSelect);
  }
  const onUpperPress = () => {
    setUpperCaseSelect(!upperCaseSelect);
  }
  const onNumberPress = () => {
    setNumberSelect(!numberSelect);
  }
  const onSpecialPress = () => {
    setSpecialSelect(!specialSelect);
  }

  const [result, setResult] = useState();

  const onGenerateClick = () => {
    setResult("Password: " + generatePassword(parseInt(length), lowerCaseSelect, upperCaseSelect, numberSelect, specialSelect));
  }

  return (
    <View style={styles.container}>
      <View style={styles.radiosView}>
        <Text style={{fontSize: 16, fontWeight: "500", marginRight: 20}}>Include:</Text>
        <View style={styles.radioButtonView}>
          <Pressable onPress={onLowerPress}>
            <RadioButton selected={lowerCaseSelect}/>
          </Pressable>
          <Text style={styles.radioButton}>Lowercase Characters</Text>
        </View>
        <View style={styles.radioButtonView}>
          <Pressable onPress={onUpperPress}>
            <RadioButton selected={upperCaseSelect}/>
          </Pressable>
          <Text style={styles.radioButton}>Uppercase Characters</Text>
        </View>
        <View style={styles.radioButtonView}>
          <Pressable onPress={onNumberPress}>
            <RadioButton selected={numberSelect}/>
          </Pressable>
          <Text style={styles.radioButton}>Numbers</Text>
        </View>
        <View style={styles.radioButtonView}>
          <Pressable onPress={onSpecialPress}>
            <RadioButton selected={specialSelect}/>
          </Pressable>
          <Text style={styles.radioButton}>Special Characters</Text>
        </View>
      </View>
        <View style={styles.lenInputView}>
          <Text style={styles.lenInputText}>Password Length:</Text>
          <TextInput onChangeText={setLength} placeholder='Enter Password Length' placeholderTextColor={colors.inputPlaceholder} style={styles.lenInputField}/>
        </View>
      <GenerateButton onPress={onGenerateClick}/>
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
    marginTop: 20,
    flexWrap: "wrap",
    width: "100%"
  },
  radioButtonView: {
    flexDirection: "row",
    marginVertical: 2,
  },
  radioButton: {
    fontSize: 17,
    marginLeft: 5,
    marginRight: 20,
  },
  lenInputView: {
    width: "100%",
    marginTop: 18,
    marginBottom: 16,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.bgLight,
  },
  lenInputText: {
    color: colors.headerColor,
    fontSize: 16,
    marginRight: 20,
    fontWeight: "500"
  },
  lenInputField: {
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

export default PasswordGeneratorComp;