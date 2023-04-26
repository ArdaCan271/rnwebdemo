import { Platform, StyleSheet, Text, View } from 'react-native'
import colors from '../constants/colors'

import {Ionicons} from "@expo/vector-icons"

const PageHeader = (props) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>{props.name}</Text>
      <Ionicons name={props.icon} color={colors.headerColor} size={34}/>
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    height: 55,
    backgroundColor: colors.bgLight,
    width: "90%",
    position: "absolute",
    top: Platform.OS === "web" ? 17 : 34,
    left: 80,
    borderLeftWidth: 2,
    borderColor: colors.headerColor,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    fontSize: 26,
    marginLeft: 18,
    fontWeight: "500",
    color: colors.headerColor,
    marginRight: 12,
  }
})

export default PageHeader;
