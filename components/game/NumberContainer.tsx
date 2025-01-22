import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import { colorTheme } from "../../utils/colorThemes";

type NumberContainerProps = {
  opponnentNr: number;
};

const NumberContainer: React.FC<NumberContainerProps> = ({ opponnentNr }) => {
  const {width} = useWindowDimensions();
  
  return (
    <View style={[styles.numberContainer, {padding: width > 900 ? 30 : 36}]}>
      <Text style={[styles.numberText, {fontSize: width > 900 ? 30 : 36}]}>{opponnentNr}</Text>
    </View>
  );
};

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  numberContainer: {
    alignItems: "center",
    justifyContent: "center",
    // padding: 25,
    // padding: deviceWidth < 400 ? 24 : 36,
    borderWidth: 0,
    borderColor: colorTheme.yellowIsh,
    borderRadius: 8,
    elevation: 4,
  },
  numberText: {
    // fontSize: deviceWidth < 400 ? 28 : 36,
    fontWeight: "bold",
    color: colorTheme.yellowIsh,
  },
});

export default NumberContainer;
