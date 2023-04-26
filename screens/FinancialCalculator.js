import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from "../constants/colors";

import DrawerButton from '../components/DrawerButton';
import PageHeader from '../components/PageHeader';

import SelectionsPlace from '../components/SelectionsPlace';
import Selection from '../components/Selection';
import CalculatorModal from '../components/CalculatorModal';

import CalculateMonthlySavings from '../components/FinancialCalculators/CalculateMonthlySavings';
import CalculateMortgage from '../components/FinancialCalculators/CalculateMortgage';
import CalculateDiscount from '../components/FinancialCalculators/CalculateDiscount';

const FinancialCalculator = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const onSelectionPress = () => {setModalOpen(true);};
  const onSelection2Press = () => {setModal2Open(true);};
  const onSelection3Press = () => {setModal3Open(true);};

  const onModalOutsidePress = () => {
    setModalOpen(false);
    setModal2Open(false);
    setModal3Open(false);
  }

  return (
    <View style={styles.container}>
      <CalculatorModal content={CalculateMonthlySavings} modalVisible={modalOpen} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateMortgage} modalVisible={modal2Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateDiscount} modalVisible={modal3Open} onOutsidePress={onModalOutsidePress}/>
      <DrawerButton/>
      <PageHeader icon="logo-usd" name="Financial"/>
      <SelectionsPlace>
        <Selection title="Calculate Monthly Savings" onPress={onSelectionPress}/>
        <Selection title="Calculate Mortgage" onPress={onSelection2Press}/>
        <Selection title="Calculate Discount" onPress={onSelection3Press}/>
      </SelectionsPlace>
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
    userSelect: "text"
  },
});

export default FinancialCalculator;