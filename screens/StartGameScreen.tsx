import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/ui_elements/PrimaryButton";
import { colorTheme } from "../utils/colorThemes";
import { useState } from "react";

type StartGameScreenProps = {
  onPickedNr: (inputNr: number) => void;
}

const StartGameScreen: React.FC<StartGameScreenProps> = ({onPickedNr}) => {
  const [enteredNr, setEnteredNr] = useState<string>("");

  const handleInput = (typedValue: string) => {    
    console.log(typedValue);
      setEnteredNr(typedValue);
  };

  const confirmHandler = () => {
    console.log("confirm button pressed");
    const confirmedNr = parseInt(enteredNr);
    if (isNaN(confirmedNr) || confirmedNr <=0 || confirmedNr > 99) {
      Alert.alert('Invalid number!', 'Please enter a number between 1 and 99.', [{text: "Ok", style:"cancel", onPress: resetHandler}])
      return;
    }
    onPickedNr(confirmedNr);
  };

  const resetHandler = () => {
    console.log("reset button pressed");
    setEnteredNr("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        onChangeText={handleInput}
        value={enteredNr}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonElement}>
            <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonElement}>
            <PrimaryButton onPress={confirmHandler}>Confirm</PrimaryButton>
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
