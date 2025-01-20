import { View, Text, StyleSheet } from "react-native";
import { colorTheme } from "../../utils/colorThemes";
type NumberContainerProps = {
    opponnentNr: number;
};
const NumberContainer:React.FC<NumberContainerProps> = ({opponnentNr}) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{opponnentNr}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  numberContainer: {
    alignItems: "center",
    justifyContent: "center",
    // width: "60%",
    padding: 25,
    borderWidth: 0,
    borderColor: colorTheme.yellowIsh,
    borderRadius: 8,
    elevation:4
  },
  numberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: colorTheme.yellowIsh,
  },
});

export default NumberContainer;
