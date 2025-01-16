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
    padding: 25,
    borderWidth: 4,
    borderColor: colorTheme.yellowIsh,
    borderRadius: 8,
  },
  numberText: {
    fontSize: 36,
    fontWeight: "bold",
    color: colorTheme.yellowIsh,
  },
});

export default NumberContainer;
