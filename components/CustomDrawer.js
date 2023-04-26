import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'

import colors from '../constants/colors'

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.appNameText}>Calculators</Text>
      <View style={styles.drawerItemsList}>
        <DrawerItemList {...props}>
        </DrawerItemList>        
      </View>
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  appNameText: {
    color: colors.textLight,
    fontSize: 24,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 20,
    alignSelf: "center",
  },
  drawerItemsList: {
    flex: 1,
    width: "100%",
    height: "100%",
  }
})