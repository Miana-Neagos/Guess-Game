import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { colorTheme } from "../utils/colorThemes";
import Title from "../components/ui_elements/Title";
import generateRandomNumber from "../utils/generateRandomNumbers";
import NumberContainer from "../components/game/NumberContainer";

type GameScreenProps = {
  userNr: number;
};

const GameScreen: React.FC<GameScreenProps> = ({ userNr }) => {
  const initialOpponentNr = generateRandomNumber({min: 1, max: 100, excludeNr:userNr});
  const [opponnentNr, setOpponentNr] = useState<number>(initialOpponentNr);

  return (
    <View style={styles.gameContainer}>
      {/* <View>
        <Text>This is Game Screen</Text>
        <Text>{userNr}</Text>
      </View> */}
      <Title titleText="Opponent's Guess"/>
      <NumberContainer opponnentNr={opponnentNr}></NumberContainer>
      <View>
        <Text> Higher or Lower?</Text>
      </View>
      <View>
        <Text> Game Rounds </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 16,
    // alignItems: "center",
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorTheme.yellowIsh,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colorTheme.yellowIsh,
    padding: 10,
  }
});

export default GameScreen;
