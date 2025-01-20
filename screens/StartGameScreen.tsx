import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/ui_elements/PrimaryButton";
import { colorTheme } from "../utils/colorThemes";
import { useState } from "react";
import Title from "../components/ui_elements/Title";
import Card from "../components/ui_elements/Card";
import Instructions from "../components/ui_elements/InstructionText";
import InstructionText from "../components/ui_elements/InstructionText";

type StartGameScreenProps = {
  onPickedNr: (inputNr: number) => void;
}

const StartGameScreen: React.FC<StartGameScreenProps> = ({onPickedNr}) => {
  const [enteredNr, setEnteredNr] = useState<string>("");

  const handleInput = (typedValue: string) => {    
      setEnteredNr(typedValue);
  };

  const confirmHandler = () => {
    const confirmedNr = parseInt(enteredNr);
    if (isNaN(confirmedNr) || confirmedNr <=0 || confirmedNr > 99) {
      Alert.alert('Invalid number!', 'Please enter a number between 1 and 99.', [{text: "Ok", style:"cancel", onPress: resetHandler}])
      return;
    }
    onPickedNr(confirmedNr);
  };

  const resetHandler = () => {
    setEnteredNr("");
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess The Number</Title>
      {/* <View style={styles.inputContainer}> */}
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
    gap: 30,
  },
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
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
      fontSize: 28,
      borderBottomColor: colorTheme.yellowIsh,
      borderBottomWidth: 2,
      color: colorTheme.yellowIsh,
      marginVertical: 10,
      fontWeight: "bold",
      textAlign: "center",
      paddingHorizontal: 20,
    },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonElement: {
    flex: 1,
  },
});

export default StartGameScreen;
