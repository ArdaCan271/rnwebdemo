import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';

import colors from '../constants/colors';


const Selection = (props) => {
  return (
    <View style={styles.suggestionContainer}>
      <Pressable onPress={props.onPress} android_ripple={{color: colors.bgLight}} style={styles.suggestion}>
        <Text style={styles.suggestionText}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionContainer: {
    width: Platform.OS === "web" ? "18%" : "40%",
    aspectRatio: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    margin: 0
  },
  suggestion: {
    width: "90%",
    aspectRatio: 1,
    backgroundColor: colors.selectionBg,
    borderRadius: 20,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.headerColor,
    padding: 15,
    overflow: "hidden",
    shadowColor: colors.selectionShadow,
    shadowOffset: {
      width: 7,
      height: 7,
    },
    shadowRadius: 3,
    shadowOpacity: 1
  },
  suggestionText: {
    color: "#3a3a3a",
    fontSize: Platform.OS === "web" ? 18 : 17,
    textAlign: "center",
    fontWeight: "600",
  }
});

export default Selection;