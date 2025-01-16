import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { colorTheme } from "./colorThemes";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [userNr, setUserNr] = useState<number | null>(null);

  const pickedNrHandler = (inputNr:number) => {
    setUserNr(inputNr);
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
          {userNr? <GameScreen userNr={userNr} /> : <StartGameScreen onPickedNr={pickedNrHandler} />}
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
