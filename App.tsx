import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { colorTheme } from "./utils/colorThemes";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { hideSplashScreen } from "./utils/splashScreenHelp";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNr, setUserNr] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(true);
  const [rounds, setRounds] = useState<number>(0);


  const [fontsloaded] = useFonts({
    'roboto-medium':require('./assets/fonts/Roboto-Medium.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  });

  useEffect(() => {
    hideSplashScreen(fontsloaded);
  },[fontsloaded])

  
  const pickedNrHandler = (inputNr:number) => {
    setUserNr(inputNr);
    setGameOver(false);
  }
  
  const startNewGameHandler = () => {
    setUserNr(null);
    setRounds(0);
  }

  const gameOverHandler = (numberOfRounds:number) => {
    setGameOver(true);
    setRounds(numberOfRounds);
  };

  let screen;
  if (!fontsloaded) return null;

  if (userNr && !gameOver) {
    screen = <GameScreen userNr={userNr} onGameOver={gameOverHandler} />
  } else if (userNr && gameOver) {
    screen = <GameOverScreen userNr={userNr} rounds={rounds} onStartGame={startNewGameHandler} />
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
      <ImageBackground source={require("./assets/images/dices.png")} resizeMode="cover" style={styles.rootScreen} imageStyle={styles.backgroudImage}>
        <StatusBar style="light" translucent={true} />
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroudImage: {
    opacity: 0.15,
  }
});



