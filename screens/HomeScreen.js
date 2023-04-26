import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import colors from "../constants/colors";

import DrawerButton from '../components/DrawerButton';
import PageHeader from '../components/PageHeader';

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <DrawerButton/>
      <PageHeader icon="home-outline" name="Home"/>
      <Text style={styles.text}>Welcome, this is the home screen.</Text>
      <Text style={styles.text}>You can navigate between different calculators by pressing the menu button on the top left.</Text>
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
  text: {
    color: colors.textLight,
    marginBottom: 30,
    fontWeight: "600",
    fontSize: 22,
    userSelect: "text",
    textAlign: "center",
  },
});

export default HomeScreen;