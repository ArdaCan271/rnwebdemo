import { StyleSheet, Text, Pressable } from 'react-native';
import React, { useState } from 'react';

import colors from '../../constants/colors';

import {Ionicons} from "@expo/vector-icons";

const GenerateButton = (props) => {

  const [buttonColor, setButtonColor] = useState(colors.primary);

  const onCalculateHoverIn = () => {
    setButtonColor("#4a5939")
  }
  const onCalculateHoverOut = () => {
    setButtonColor(colors.primary)
  }
  const onCalculatePressIn = () => {
    setButtonColor("#37422a")
  }

  const onCalculatePressOut = () => {
    setButtonColor(colors.primary)
  }

  return (
    <Pressable
    onHoverIn={onCalculateHoverIn}
    onHoverOut={onCalculateHoverOut}
    onPressIn={onCalculatePressIn} 
    onPressOut={onCalculatePressOut} 
    onPress={props.onPress}
    style={[styles.calculateButton, {backgroundColor: buttonColor}]}>
      <Text style={styles.cButtonText}>Generate</Text>
      <Ionicons size={24} color={"white"} name='play-circle-outline'/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  calculateButton: {
    width: 120,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  cButtonText: {
    fontSize: 16,
    color: "white",
    marginRight: 8,
  }
});

export default GenerateButton;