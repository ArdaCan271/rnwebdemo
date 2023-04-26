import { Platform, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import colors from "../constants/colors";

import DrawerButton from '../components/DrawerButton';
import PageHeader from '../components/PageHeader';

import PasswordGeneratorComp from '../components/PasswordGenerator/PasswordGeneratorComp';

const PasswordGenerator = () => {

  return (
    <View style={styles.container}>
      <DrawerButton/>
      <PageHeader icon="lock-closed-outline" name="Password Generator"/>
      <View style={styles.compView}>
        <PasswordGeneratorComp/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgLight,
    justifyContent: "center",
    alignItems: "center",
  },
  compView: {
    marginTop: Platform.OS === "web" ? 0 : 200,
    height: Platform.OS === "web" ? "75%" : "85%",
    width: Platform.OS === "web" ? "60%" : "85%",
  },
  text: {
    color: colors.textLight,
    marginBottom: 30,
    fontWeight: "600",
    fontSize: 22,
    userSelect: "text",
    textAlign: "center",
  },
});

export default PasswordGenerator;