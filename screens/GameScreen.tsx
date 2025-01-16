import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colorTheme } from "../colorThemes";
import Title from "../components/Title";

type GameScreenProps = {
  userNr: number;
};

const GameScreen: React.FC<GameScreenProps> = ({ userNr }) => {
  return (
    <View style={styles.gameContainer}>
      <View>
        <Text>This is Game Screen</Text>
        <Text>{userNr}</Text>
      </View>
      <Title titleText="Opponent's Guess"/>
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
  }
});

export default GameScreen;
