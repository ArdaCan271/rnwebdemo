import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors from '../constants/colors';

const RadioButton = (props) => {

  return (
    <View style={[styles.outerCircle, props.style]}>
      {
        props.selected ?
        <View style={styles.innerCircle}/>
        : null
      }
    </View>
  )
}

export default RadioButton

const styles = StyleSheet.create({
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: colors.primary,
  }
})