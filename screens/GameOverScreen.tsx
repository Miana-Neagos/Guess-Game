import { View, Text, StyleSheet, Image, useWindowDimensions, ScrollView } from "react-native";
import Title from '../components/ui_elements/Title';
import { colorTheme } from "../utils/colorThemes";
import Card from "../components/ui_elements/Card";
import PrimaryButton from "../components/ui_elements/PrimaryButton";

type GameScreenProps = {
  userNr: number,
  rounds: number,
  onStartGame: () => void;
}

const GameOverScreen: React.FC<GameScreenProps> = ({userNr, rounds, onStartGame}) => {

  const {width, height} = useWindowDimensions();

  const smallDevice = height < 400;

  const imgSize = smallDevice ? 150 : width < 300 ? 200 : 300;
  const imgContainerSmall = {
    width: imgSize,
    height: imgSize,
    borderRadius: imgSize / 2,
  }

  const containerMargin = smallDevice ? 3 : 30;
  const containerWide = {
    marginTop: containerMargin,
    gap: containerMargin / 0.5,
  }


  return (
    <ScrollView>
      <View style={[styles.container, containerWide]}>
        <Title>GAME OVER</Title>
        <View style={[styles.imgContainer, imgContainerSmall]}>
          <Image source={require("../assets/images/gameover_img.png")} style={styles.imageElement}></Image>
        </View>
        <Card>
          <Text style={styles.mainText}>
            <Text style={styles.innerText}> {rounds} </Text> rounds to guess the number 
            <Text style={styles.innerText}> {userNr} </Text>
          </Text>
        </Card>
        <PrimaryButton onPress={() => onStartGame()}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

// const deviceHeight = Dimensions.get('window').height;
// const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    // marginTop: 30,
    // marginTop: deviceHeight < 400 ? 30 : 0,
    gap: 30,
    flex: 1,
  },
  imgContainer: {
    alignItems: "center",
    // height: 350,
    // width: "90%",
    // height: deviceHeight < 400 ?  150 : 380,
    // width: deviceWidth < 400 ? 150 : 380,
    aspectRatio: 1,
    overflow: "hidden",
    // borderRadius: 175,
    // borderRadius: deviceWidth < 380 ? 75 : 200,
  },
  imageElement: {
    width: "100%",
    height: "100%",
  },
  mainText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: colorTheme.lightGray,
  },
  innerText: {
    fontSize: 22,
    color: colorTheme.yellowIsh,
  },
});

export default GameOverScreen;
