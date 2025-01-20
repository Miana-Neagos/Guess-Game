import { StyleSheet, View, Text } from "react-native";
import { colorTheme } from "../../utils/colorThemes";

type CardProps = {
    children : React.ReactNode;
}

const Card:React.FC<CardProps> = ({children}) => {
  return (
  <View style={styles.inputContainer}>{children}</View>
  )
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    // gap: 35,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: colorTheme.darkMagenta,
    borderWidth: 0,
    borderColor: colorTheme.black,
    elevation: 7,
  },
});

export default Card;
