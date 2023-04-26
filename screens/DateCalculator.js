import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import DrawerButton from '../components/DrawerButton';

import colors from '../constants/colors';
import PageHeader from '../components/PageHeader';
import SelectionsPlace from '../components/SelectionsPlace';
import Selection from '../components/Selection';
import CalculatorModal from '../components/CalculatorModal';

import CalculateDayDifference from '../components/DateCalculator/CalculateDayDifference';
import CalculateDaysLived from '../components/DateCalculator/CalculateDaysLived';

const DateCalculator = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);

  const onSelectionPress = () => {setModalOpen(true);};
  const onSelection2Press = () => {setModal2Open(true);};

  const onModalOutsidePress = () => {
    setModalOpen(false);
    setModal2Open(false);
  }

  return (
    <View style={styles.container}>
      <DrawerButton/>
      <PageHeader icon="calendar-outline" name="Date"/>
      <CalculatorModal content={CalculateDayDifference} modalVisible={modalOpen} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateDaysLived} modalVisible={modal2Open} onOutsidePress={onModalOutsidePress}/>
      <SelectionsPlace>
        <Selection title="Day Difference" onPress={onSelectionPress}/>
        <Selection title="Days Lived" onPress={onSelection2Press}/>
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
    userSelect: "text",
  },
});

export default DateCalculator;