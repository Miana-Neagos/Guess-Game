import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { colorTheme } from "./colorTheme";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
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
        <StatusBar style="auto" />
        <StartGameScreen />
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
