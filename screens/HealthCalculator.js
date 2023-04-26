import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import colors from "../constants/colors";

import DrawerButton from '../components/DrawerButton';
import PageHeader from '../components/PageHeader';
import CalculatorModal from '../components/CalculatorModal';
import SelectionsPlace from '../components/SelectionsPlace';
import Selection from '../components/Selection';

import CalculateBMI from "../components/HealthCalculators/CalculateBMI";
import CalculateBMR from '../components/HealthCalculators/CalculateBMR';
import CalculateDailyCalIntake from '../components/HealthCalculators/CalculateDailyCalIntake';
import CalculateDailyProtein from '../components/HealthCalculators/CalculateDailyProtein';
import CalculateDailyWater from '../components/HealthCalculators/CalculateDailyWater';

const HealthCalculator = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
  const [modal5Open, setModal5Open] = useState(false);

  const onSelectionPress = () => {setModalOpen(true);};
  const onSelection2Press = () => {setModal2Open(true);};
  const onSelection3Press = () => {setModal3Open(true);};
  const onSelection4Press = () => {setModal4Open(true);};
  const onSelection5Press = () => {setModal5Open(true);};

  const onModalOutsidePress = () => {
    setModalOpen(false);
    setModal2Open(false);
    setModal3Open(false);
    setModal4Open(false);
    setModal5Open(false);
  }

  return (
    <View style={styles.container}>
      <CalculatorModal content={CalculateBMI} modalVisible={modalOpen} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateBMR} modalVisible={modal2Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateDailyCalIntake} modalVisible={modal3Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateDailyProtein} modalVisible={modal4Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateDailyWater} modalVisible={modal5Open} onOutsidePress={onModalOutsidePress}/>
      <DrawerButton/>
      <PageHeader icon="fitness-outline" name="Health"/>
      <SelectionsPlace>
        <Selection title="Calculate BMI" onPress={onSelectionPress}/>
        <Selection title="Calculate BMR (Basal Metabolic Rate)" onPress={onSelection2Press}/>
        <Selection title="Calculate Daily Calories Intake" onPress={onSelection3Press}/>
        <Selection title="Calculate Daily Protein Intake" onPress={onSelection4Press}/>
        <Selection title="Calculate Daily Water Intake" onPress={onSelection5Press}/>
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

export default HealthCalculator;