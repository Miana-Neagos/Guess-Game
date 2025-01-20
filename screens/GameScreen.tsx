import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { colorTheme } from "../utils/colorThemes";
import Title from "../components/ui_elements/Title";
import generateRandomNumber from "../utils/generateRandomNumbers";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui_elements/PrimaryButton";
import Card from "../components/ui_elements/Card";
import InstructionText from "../components/ui_elements/InstructionText";
import Feather from '@expo/vector-icons/Feather';

type GameScreenProps = {
  userNr: number;
  onGameOver: () => void;
};

const GameScreen: React.FC<GameScreenProps> = ({ userNr, onGameOver }) => {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const initialOpponentNr = generateRandomNumber({ min: 1, max: 100, excludeNr: userNr, });
  const [opponnentNr, setOpponentNr] = useState<number>(initialOpponentNr);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  console.log("This is GAME SCREEN");
  console.log({ userNr });
  console.log({ opponnentNr });
  console.log({ min, max });

  useEffect(() => {
    if(userNr === opponnentNr) {
      console.log('USER NR === COMPUTER');
      onGameOver();
    }
  }, [userNr, opponnentNr, onGameOver])

  useEffect(() => {
    console.log('USE EFFECT');
    // Skip the first useEffect execution to avoid overwriting initialOpponentNr with the next guess.
    if(firstRender) {
      setFirstRender(false);
      return;
    }
    
    const nextGuess = generateRandomNumber({ min, max, excludeNr: opponnentNr});
    setOpponentNr(nextGuess);
    console.log({ min, max, nextGuess });
  }, [min, max]);

  const nextGuessHandler = (direction: string) => {
    console.log("GUESS HANDLER");

    console.log({ direction });
    if ((direction === "lower" && opponnentNr < userNr) || (direction === "higher" && opponnentNr > userNr)) {
      Alert.alert('Liar, liar pants on fire!',  `Are you sure you're playing fair?`, [{ text: 'Try again', style: 'cancel' }]);
      return;  
    }
    if (direction === "higher") {
      setMin(opponnentNr + 1);
      console.log({ min });
    } else {
      setMax(opponnentNr);
      console.log({ max });
    }
  };

  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      <NumberContainer opponnentNr={opponnentNr}></NumberContainer>
      <View>
        <Card>
          <InstructionText style={styles.instructionText}>Higher or Lower</InstructionText>
          <View style={styles.buttonscontainer}>
            <View style={styles.buttonElement}>
              <PrimaryButton onPress={() => nextGuessHandler("higher")}>
                <Feather name="plus" size={38} color={colorTheme.lightGray} />
              </PrimaryButton>
            </View>
            <View style={styles.buttonElement}>
              <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                <Feather name="minus" size={38} color={colorTheme.lightGray} />
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
      {/* <View>
        <Text> Game Rounds </Text>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 16,
    gap: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorTheme.yellowIsh,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colorTheme.yellowIsh,
    padding: 10,
  },
  instructionText: {
    marginVertical: 10,
    // fontWeight: "bold",
  },
  buttonscontainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonElement: {
    flex: 1,
    padding: 10,
  },
});

export default GameScreen;
