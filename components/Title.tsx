
import { View, Text, StyleSheet } from 'react-native';
import { colorTheme } from '../colorThemes';

type TitleProps = {
    titleText: string;
};

const Title:React.FC<TitleProps> = ({titleText}) => {
  return (
    <View>
      <Text style={styles.title}> {titleText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colorTheme.yellowIsh,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colorTheme.yellowIsh,
    padding: 10,
  }
});
export default Title;
