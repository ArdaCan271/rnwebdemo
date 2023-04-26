import { Pressable, StyleSheet, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import colors from '../constants/colors';

const DrawerButton = () => {

  const [alpha, setAlpha] = useState("0");

  const navigation = useNavigation();

  const onDrawerPress = () => {
    navigation.openDrawer();
  }

  const onHoverIn = () => {
    setAlpha("0.2");
  }

  const onHoverOut = () => {
    setAlpha("0");
  }

  return (
    <Pressable onHoverIn={onHoverIn} onHoverOut={onHoverOut} onPress={onDrawerPress}
    style={[styles.drawerButton, {backgroundColor: `rgba(160, 160, 160, ${alpha})`}]}> 
      <Ionicons name='menu' size={45} color={colors.primary}/>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  drawerButton: {
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    width: 50,
    height: 50,
    left: 20,
    top: Platform.OS === "web" ? 20 : 36,
    borderRadius: 16,
  }
});

export default DrawerButton;