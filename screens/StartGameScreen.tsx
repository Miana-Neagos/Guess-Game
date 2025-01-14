import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { colorTheme } from "../colorTheme";

const StartGameScreen: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonElement}>
            <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonElement}>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    backgroundColor: colorTheme.darkMagenta,
    elevation: 4,
    /* styling for iOS
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        */
    },
    numberInput: {
      height: 50,
      width: "50%",
      fontSize: 28,
      borderBottomColor: colorTheme.yellowIsh,
      borderBottomWidth: 2,
      color: colorTheme.yellowIsh,
      marginVertical: 8,
      fontWeight: "bold",
      textAlign: "center",
    },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonElement: {
    flex: 1,
  },
});

export default StartGameScreen;
