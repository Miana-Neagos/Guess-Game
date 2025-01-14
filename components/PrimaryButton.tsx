import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colorTheme } from "../colorTheme";

type PrimaryButtonProps = {
  children: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children }) => {
  const handlePress = () => {
    console.log("button is pressed");
  };
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={handlePress}
        android_ripple={{ color: colorTheme.yellowIsh }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonElement, styles.pressed]
            : styles.buttonElement
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colorTheme.lightDarkMagenta,
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonElement: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4,
  },
  buttonText: {
    textAlign: "center",
    color: colorTheme.white,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
