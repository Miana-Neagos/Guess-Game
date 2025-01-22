import { Dimensions, StyleSheet, View} from "react-native";
import { colorTheme } from "../../utils/colorThemes";

type CardProps = {
    children : React.ReactNode;
}

const Card:React.FC<CardProps> = ({children}) => {
  return (
  <View style={styles.inputContainer}>{children}</View>
  )
};

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 24,
    marginHorizontal: deviceWidth < 600 ? 10 : 64,
    borderRadius: 8,
    padding: 16,
    backgroundColor: colorTheme.darkMagenta,
    borderWidth: 0,
    borderColor: colorTheme.black,
    elevation: 7,
  },
});

export default Card;
