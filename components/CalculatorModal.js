import React from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';

import colors from '../constants/colors';

import {Ionicons} from "@expo/vector-icons";


const CalculatorModal = (props) => {
  
  return (
    <Modal visible={props.modalVisible} transparent={true} animationType="fade">
      <Pressable 
      onPress={props.onOutsidePress} 
      style={styles.modalOutside}>  
        <Ionicons onPress={props.onOutsidePress} name='close' size={40} color="white" style={styles.modalClose}/>
        <Pressable style={styles.modal}>
          {props.content}
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOutside: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    cursor: "default",
  },
  modalClose: {
    alignSelf: "flex-end",
    marginRight: "12%"
  },
  modal: {
    height: Platform.OS === "web" ? "70%" : "85%",
    width: Platform.OS === "web" ? "75%" : "90%",
    paddingLeft: Platform.OS === "web" ? 20 : 10,
    backgroundColor: colors.bgLight,
    borderRadius: 13,
    marginBottom: 40,
    justifyContent: "center",
    alignItems: "center",
    cursor: "default",
    overflow: "hidden",
  },
});

export default CalculatorModal;