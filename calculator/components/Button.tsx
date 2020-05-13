import React from "react";
import { 
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

interface IProps {
  flex?: number
  onPress: () => void
  label: string
}

const CalcButton: React.FC<IProps> = (props: IProps) => {
  return (
    <TouchableOpacity
      style={[styles.calcButton, {flex: props.flex ? props.flex : 1}]}
      onPress={props.onPress}
      >
      <Text style={styles.buttonText}>{props.label.toUpperCase()}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  calcButton: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#b0c4de",
  },
  buttonText: {
    fontSize: 20,
  }
});

export default CalcButton;
