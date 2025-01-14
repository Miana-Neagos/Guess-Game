import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { colorTheme } from './colorTheme';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient colors={[colorTheme.darkMagenta, colorTheme.yellowIsh]} style={styles.rootScreen}>
      <StatusBar style="auto" />
      <StartGameScreen />
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
});
