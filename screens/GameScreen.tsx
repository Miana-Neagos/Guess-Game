import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Alert,
  FlatList,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import { colorTheme } from "../utils/colorThemes";
import Title from "../components/ui_elements/Title.ios";
import generateRandomNumber from "../utils/generateRandomNumbers";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui_elements/PrimaryButton";
import Card from "../components/ui_elements/Card";
import InstructionText from "../components/ui_elements/InstructionText";
import Feather from "@expo/vector-icons/Feather";
import GuessAttempsLog from "../components/game/GuessAttemptsLog";

type GameScreenProps = {
  userNr: number;
  onGameOver: (numberOfRounds: number) => void;
};

const GameScreen: React.FC<GameScreenProps> = ({ userNr, onGameOver }) => {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const initialOpponentNr = generateRandomNumber({
    min: 1,
    max: 100,
    excludeNr: userNr,
  });
  const [opponnentNr, setOpponentNr] = useState<number>(initialOpponentNr);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [guessAttempt, setGuessAttempt] = useState<number[]>([
    initialOpponentNr,
  ]);

  const { width, height } = useWindowDimensions();  
  console.log({height});
  

  useEffect(() => {
    if (userNr === opponnentNr) {
      onGameOver(guessAttempt.length);
    }
  }, [userNr, opponnentNr, onGameOver]);

  useEffect(() => {
    // Skip the first useEffect execution to avoid overwriting initialOpponentNr with the next guess.
    if (firstRender) {
      setFirstRender(false);
      return;
    }

    const nextGuess = generateRandomNumber({
      min,
      max,
      excludeNr: opponnentNr,
    });
    setOpponentNr(nextGuess);
    setGuessAttempt((prevGuess) => [nextGuess, ...prevGuess]);
  }, [min, max]);

  const nextGuessHandler = (direction: string) => {
    if (
      (direction === "lower" && opponnentNr < userNr) ||
      (direction === "higher" && opponnentNr > userNr)
    ) {
      Alert.alert(
        "Liar, liar pants on fire!",
        `Are you sure you're playing fair?`,
        [{ text: "Try again", style: "cancel" }]
      );
      return;
    }
    if (direction === "higher") {
      setMin(opponnentNr + 1);
    } else {
      setMax(opponnentNr);
    }
  };

  let content = (
    <>
      <NumberContainer opponnentNr={opponnentNr}></NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower
        </InstructionText>
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
    </>
  );

if (width > 850) {
  content = (
    <>
      {/* <InstructionText style={styles.instructionText}>
        Higher or Lower
      </InstructionText> */}
      <View style={[styles.buttonscontainer, styles.buttonscontainerWide]}>
        <View style={[styles.buttonElement, styles.buttonElementWide]}>
          <PrimaryButton onPress={() => nextGuessHandler("higher")}>
            <Feather name="plus" size={38} color={colorTheme.lightGray} />
          </PrimaryButton>
        </View>
        <NumberContainer opponnentNr={opponnentNr}></NumberContainer>
        <View style={[styles.buttonElement, styles.buttonElementWide]}>
          <PrimaryButton onPress={() => nextGuessHandler("lower")}>
            <Feather name="minus" size={38} color={colorTheme.lightGray} />
          </PrimaryButton>
        </View>
      </View>
    </>
  );
}

  return (
    <View style={styles.gameContainer}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.flatListContainer}>
        <FlatList
          data={guessAttempt}
          renderItem={(itemData) => (
            <GuessAttempsLog
              roundNumber={itemData.index + 1}
              guessAttemptNumber={itemData.item}
            ></GuessAttempsLog>
          )}
          keyExtractor={(item) => item.toString()}
          contentContainerStyle={{ alignItems: "center" }}
        ></FlatList>
      </View>
    </View>
  );
};

const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: deviceHeight < 400 ? 2 : 16,
    // gap: 20,
    gap: deviceHeight < 400 ? 10 : 20,
    alignItems: "center",
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
  },
  buttonscontainer: {
    flexDirection: "row",
    marginVertical: 10,
  },
  buttonscontainerWide: {
    alignItems: "center",
  },
  buttonElement: {
    flex: 1,
    padding: 10,
    maxWidth: "50%",
  },
  buttonElementWide: {
    width: 100,
    maxWidth: "35%",
  },
  flatListContainer: {
    marginTop: 10,
    flex: 1,
  },
});

export default GameScreen;
