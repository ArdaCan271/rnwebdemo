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

function calculateDailyCalories(bmr, activityLevel) {
  switch (activityLevel) {
    case 'sedentary':
      return (bmr * 1.2).toFixed(2);
    case 'lightly active':
      return (bmr * 1.375).toFixed(2);
    case 'moderately active':
      return (bmr * 1.55).toFixed(2);
    case 'very active':
      return (bmr * 1.725).toFixed(2);
    case 'extra active':
      return (bmr * 1.9).toFixed(2);
  }
}

const CalculateDailyCalIntake = () => {

  const [selectedLevel, setSelectedLevel] = useState("sedentary");
  const [sedentSelected, setSedentSelected] = useState(false);
  const [lightSelected, setLightSelected] = useState(false);
  const [moderSelected, setModerSelected] = useState(false);
  const [verySelected, setVerySelected] = useState(false);
  const [extraSelected, setExtraSelected] = useState(false);

  const onSedentPress = () => {
    setSedentSelected(true);
    setLightSelected(false);
    setModerSelected(false);
    setVerySelected(false);
    setExtraSelected(false);
    setSelectedLevel("sedentary");
  }
  const onLightPress = () => {
    setSedentSelected(false);
    setLightSelected(true);
    setModerSelected(false);
    setVerySelected(false);
    setExtraSelected(false);
    setSelectedLevel("lightly active");
  }
  const onModerPress = () => {
    setSedentSelected(false);
    setLightSelected(false);
    setModerSelected(true);
    setVerySelected(false);
    setExtraSelected(false);
    setSelectedLevel("moderately active");
  }
  const onVeryPress = () => {
    setSedentSelected(false);
    setLightSelected(false);
    setModerSelected(false);
    setVerySelected(true);
    setExtraSelected(false);
    setSelectedLevel("very active");
  }
  const onExtraPress = () => {
    setSedentSelected(false);
    setLightSelected(false);
    setModerSelected(false);
    setVerySelected(false);
    setExtraSelected(true);
    setSelectedLevel("extra active");
  }

  const [bmr, setBMR] = useState("");

  const [result, setResult] = useState();

  const onCalculateClick = () => {
    setResult("Your ideal daily calorie intake: " + calculateDailyCalories(parseFloat(bmr), selectedLevel) + " kcal");
  }

  return (
    <View style={styles.container}>
      <View style={styles.radiosView}>
        <Text style={{fontSize: 16, fontWeight: "500", marginRight: 20}}>Your activity level:</Text>
        <View style={styles.radioButtonView}>
          <Pressable onPress={onSedentPress}>
            <RadioButton selected={sedentSelected}/>
          </Pressable>
          <Text style={styles.radioButton}>Sedentary</Text>
        </View>
        <View style={styles.radioButtonView}>
          <Pressable onPress={onLightPress}>
            <RadioButton selected={lightSelected}/>
          </Pressable>
          <Text style={styles.radioButton}>Lightly</Text>
        </View>
        <View style={styles.radioButtonView}>
          <Pressable onPress={onModerPress}>
            <RadioButton selected={moderSelected}/>
          </Pressable>
          <Text style={styles.radioButton}>Moderately</Text>
        </View>
        <View style={styles.radioButtonView}>
          <Pressable onPress={onVeryPress}>
            <RadioButton selected={verySelected}/>
          </Pressable>
          <Text style={styles.radioButton}>Very</Text>
        </View>
        <View style={styles.radioButtonView}>
          <Pressable onPress={onExtraPress}>
            <RadioButton selected={extraSelected}/>
          </Pressable>
          <Text style={styles.radioButton}>Extra</Text>
        </View>
      </View>
        <View style={styles.bmrInputView}>
          <Text style={styles.bmrInputText}>BMR:</Text>
          <TextInput onChangeText={setBMR} placeholder='Enter Your BMR' placeholderTextColor={colors.inputPlaceholder} style={styles.bmrInputField}/>
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
  bmrInputView: {
    width: "100%",
    marginTop: 18,
    marginBottom: 16,
    height: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.bgLight,
  },
  bmrInputText: {
    color: colors.headerColor,
    fontSize: 16,
    marginRight: 20,
    fontWeight: "500"
  },
  bmrInputField: {
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

export default CalculateDailyCalIntake;