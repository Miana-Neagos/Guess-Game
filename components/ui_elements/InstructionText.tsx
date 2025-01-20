import { StyleSheet, Text } from "react-native";
import { colorTheme } from "../../utils/colorThemes";

type InstructionProps = {
  children: React.ReactNode;
  style?: object;
};
const InstructionText: React.FC<InstructionProps> = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    width: "100%",
    fontSize: 20,
    color: colorTheme.yellowIsh,
    marginVertical: 8,
    textAlign: "center",
    fontWeight: "bold",
  },
});
export default InstructionText;
