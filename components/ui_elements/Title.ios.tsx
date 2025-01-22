
import { View, Text, StyleSheet, Platform } from 'react-native';
import { colorTheme } from '../../utils/colorThemes';

type TitleProps = {
  children: React.ReactNode;
};

const Title:React.FC<TitleProps> = ({children}) => {
  return (
    <View>
      <Text style={styles.title}> {children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorTheme.lightGray,
    textAlign: "center",
    // borderWidth: Platform.OS === "ios" ? 0.5 : 0,
    // borderWidth: Platform.select({ios: 0.5 , android: 0}),
    borderWidth: 0.5,
    borderColor: colorTheme.darkGray,
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    maxWidth: "80%",
    width: 300,
  }
});
export default Title;
  