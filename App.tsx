import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { colorTheme } from "./utils/colorThemes";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userNr, setUserNr] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [rounds, setRounds] = useState<number>(0);

  const pickedNrHandler = (inputNr:number) => {
    setUserNr(inputNr);
    setGameOver(false);
    // setRounds(0);
  }

  const gameOverHandler = () => {
    setGameOver(true);
  };

  let screen;

  if (userNr && !gameOver) {
    screen = <GameScreen userNr={userNr} onGameOver={gameOverHandler} />
  } else if (userNr && gameOver) {
    screen = <GameOverScreen />
  } else {
    screen = <StartGameScreen onPickedNr={pickedNrHandler} />
  } 
  
  return (
    <LinearGradient
      colors={[
        colorTheme.darkestMagenta,
        colorTheme.darkMagenta,
        colorTheme.yellowIsh,
      ]}
      style={styles.rootScreen}
    >
      <ImageBackground source={require("./assets/dices.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroudImage}>
        <StatusBar style="dark" translucent={true} />
        <SafeAreaView style={styles.rootScreen}>
          {screen}
          {/* {userNr && !gameOver? <GameScreen userNr={userNr} onGameOver={gameOverHandler} /> : <StartGameScreen onPickedNr={pickedNrHandler} />}
          {userNr && gameOver? <GameOverScreen /> : undefined} */}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: colorTheme.yellowIsh,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  backgroudImage: {
    opacity: 0.15,
  }
});
