import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { colorTheme } from "../../utils/colorThemes";

type PrimaryButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, onPress }) => {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={onPress}
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
    fontWeight: "bold",
    color: colorTheme.white,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
