import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import colors from '../constants/colors';

import DrawerButton from '../components/DrawerButton';
import PageHeader from '../components/PageHeader';
import CalculatorModal from '../components/CalculatorModal';
import SelectionsPlace from '../components/SelectionsPlace';
import Selection from '../components/Selection';

import CalculateDistanceBetweenPoints from '../components/GeometryCalculator/CalculateDistanceBetweenPoints';
import CalculateTrianglePerimeter from '../components/GeometryCalculator/CalculateTrianglePerimeter';
import CalculateTriangleArea from '../components/GeometryCalculator/CalculateTriangleArea';
import CalculateTriangleArea3D from '../components/GeometryCalculator/CalculateTriangleArea3D';
import CalculateTrianglePerimeter3D from '../components/GeometryCalculator/CalculateTrianglePerimeter3D';
import CalculateCirclePerimeter from '../components/GeometryCalculator/CalculateCirclePerimeter';
import CalculateCircleArea from '../components/GeometryCalculator/CalculateCircleArea';

const GeometryCalculator = () => {

  const [modalOpen, setModalOpen] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [modal4Open, setModal4Open] = useState(false);
  const [modal5Open, setModal5Open] = useState(false);
  const [modal6Open, setModal6Open] = useState(false);
  const [modal7Open, setModal7Open] = useState(false);

  const onSelectionPress = () => {setModalOpen(true);};
  const onSelection2Press = () => {setModal2Open(true);};
  const onSelection3Press = () => {setModal3Open(true);};
  const onSelection4Press = () => {setModal4Open(true);};
  const onSelection5Press = () => {setModal5Open(true);};
  const onSelection6Press = () => {setModal6Open(true);};
  const onSelection7Press = () => {setModal7Open(true);};

  const onModalOutsidePress = () => {
    setModalOpen(false);
    setModal2Open(false);
    setModal3Open(false);
    setModal4Open(false);
    setModal5Open(false);
    setModal6Open(false);
    setModal7Open(false);
  }

  return (
    <View style={styles.container}>
      <CalculatorModal content={CalculateDistanceBetweenPoints} modalVisible={modalOpen} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateTrianglePerimeter} modalVisible={modal2Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateTriangleArea} modalVisible={modal3Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateTrianglePerimeter3D} modalVisible={modal4Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateTriangleArea3D} modalVisible={modal5Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateCirclePerimeter} modalVisible={modal6Open} onOutsidePress={onModalOutsidePress}/>
      <CalculatorModal content={CalculateCircleArea} modalVisible={modal7Open} onOutsidePress={onModalOutsidePress}/>
      <DrawerButton/>
      <PageHeader icon="shapes-outline" name="Geometry"/>
      <SelectionsPlace>
        <Selection title="Calculate the Distance Between Two Points" onPress={onSelectionPress}/>
        <Selection title="Calculate the Perimeter of a Triangle Based on Points" onPress={onSelection2Press}/>
        <Selection title="Calculate the Area of a Triangle Based on Points" onPress={onSelection3Press}/>
        <Selection title="Calculate the Perimeter of a Triangle In 3D Space Based on Points" onPress={onSelection4Press}/>
        <Selection title="Calculate the Area of a Triangle In 3D Space Based on Points" onPress={onSelection5Press}/>
        <Selection title="Calculate the Perimeter of a Circle" onPress={onSelection6Press}/>
        <Selection title="Calculate the Area of a Circle" onPress={onSelection7Press}/>
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

export default GeometryCalculator;