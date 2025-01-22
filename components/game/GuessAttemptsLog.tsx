import { StyleSheet, Text, useWindowDimensions, View } from "react-native"
import { colorTheme } from "../../utils/colorThemes"
type GuessAttempsLogProps = {
    roundNumber: number,
    guessAttemptNumber: number
}
const GuessAttempsLog:React.FC<GuessAttempsLogProps> = ({roundNumber, guessAttemptNumber}) => {     

    const {width} = useWindowDimensions();

    // const listContainerStyle = [styles.listContainer, {width: width > 850 ? "86%" : "95%" as string}];
    const containerWidth = width > 850 ? "87%" : "95%";

    return (
        <View style={[styles.listContainer, {width: containerWidth}]}>
            <Text style={styles.itemText}>Round: {roundNumber}</Text>
            <Text style={styles.itemText}>No. guessed: {guessAttemptNumber}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    listContainer: {
        borderColor: colorTheme.darkMagenta,
        borderWidth: 1,
        borderRadius: 40,
        marginVertical: 4,
        backgroundColor: colorTheme.yellowIsh,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 35,
        paddingVertical: 3,
        width: '95%',
        elevation: 4,
        // shadowColor: 'black',
        // shadowOffset: { width: 0, height: 0 },
        // shadowOpacity: 0.25,
        // shadowRadius: 3,
      },
      itemText: {
        fontSize: 16,
        fontWeight: "bold",
      }
})

export default GuessAttempsLog;