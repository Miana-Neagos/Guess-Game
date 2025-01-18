import { View, Text, StyleSheet } from "react-native"

const GameOverScreen:React.FC = () => {
    return (
        <View style={styles.container}>
            <Text>This is Game Over</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default GameOverScreen;