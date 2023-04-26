import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import colors from '../constants/colors';
import DrawerButton from '../components/DrawerButton';
import PageHeader from '../components/PageHeader';

import SelectionsPlace from '../components/SelectionsPlace';
import Selection from '../components/Selection';
import CalculatorModal from '../components/CalculatorModal';

import CalculatePrimeFactors from '../components/MathCalculator/CalculatePrimeFactors';
import CalculateFactorial from '../components/MathCalculator/CalculateFactorial';
import DecimalToBinary from '../components/MathCalculator/DecimalToBinary';
import BinaryToDecimal from '../components/MathCalculator/BinaryToDecimal';

const MathCalculator = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);

  const onSelectionPress = () => {setModalOpen(true);};
  const onSelection2Press = () => {setModal2Open(true);};
  const onSelection3Press = () => {setModal3Open(true);};
  const onSelection4Press = () => {setModal4Open(true);};

  const onModalOutsidePress = () => {
    setModalOpen(false);
    setModal2Open(false);
    setModal3Open(false);
    setModal4Open(false);
  }

  return (
    <View style={styles.container}>
      <CalculatorModal content={CalculatePrimeFactors} modalVisible={modalOpen} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateFactorial} modalVisible={modal2Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={DecimalToBinary} modalVisible={modal3Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={BinaryToDecimal} modalVisible={modal4Open} onOutsidePress={onModalOutsidePress}/>
      <DrawerButton/>
      <PageHeader icon="calculator-outline" name="Math"/>
      <SelectionsPlace>
        <Selection title="Calculate Prime Factors" onPress={onSelectionPress}/>
        <Selection title="Calculate Factorial" onPress={onSelection2Press}/>
        <Selection title="Decimal to Binary" onPress={onSelection3Press}/>
        <Selection title="Binary to Decimal" onPress={onSelection4Press}/>
      </SelectionsPlace>
    </View>
  )
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
    userSelect: "text"
  },
})

export default MathCalculator;