import { View, Text, StyleSheet, Image } from "react-native";
import Title from "../components/ui_elements/Title";
import { colorTheme } from "../utils/colorThemes";
import Card from "../components/ui_elements/Card";
import PrimaryButton from "../components/ui_elements/PrimaryButton";

type GameScreenProps = {
  userNr: number,
  rounds: number,
  onStartGame: () => void;
}

const GameOverScreen: React.FC<GameScreenProps> = ({userNr, rounds, onStartGame}) => {
  return (
    <View style={styles.container}>
      <Title>GAME OVER</Title>
      <View style={styles.imgContainer}>
        <Image source={require("../assets/images/gameover_img.png")}></Image>
      </View>
      <Card>
        <Text style={styles.mainText}>
          <Text style={styles.innerText}> {rounds} </Text> rounds to guess the number 
          <Text style={styles.innerText}> {userNr} </Text>
        </Text>
      </Card>
      <PrimaryButton onPress={() => {
        console.log('Start new game was pressed');
        onStartGame();        
      }}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    gap: 30,
  },
  imgContainer: {
    alignItems: "center",
    height: 350,
    width: "90%",
    overflow: "hidden",
    borderRadius: 175,
  },
  imageElemen: {
    width: "100%",
    height: "100%",
  },
  mainText: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: colorTheme.lightGray,
  },
  innerText: {
    fontSize: 28,
    color: colorTheme.yellowIsh,
  },
});

export default GameOverScreen;
