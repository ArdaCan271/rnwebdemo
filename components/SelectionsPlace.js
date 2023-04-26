import {
  StyleSheet,
  View,
  Pressable,
  ScrollView,
  Platform
} from 'react-native';

const SelectionsPlace = (props) => {

  return (
    <View style={styles.suggestionsView}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionsView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    position: "absolute",
    top: "10%",
    height: "90%",
    alignContent: "stretch"
  },
});

export default SelectionsPlace;