
import { View, Text, StyleSheet } from 'react-native';
import { colorTheme } from '../../utils/colorThemes';

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
    color: colorTheme.lightGray,
    textAlign: "center",
    borderWidth: 2,
    borderColor: colorTheme.lightGray,
    borderRadius: 8,
    padding: 10,
  }
});
export default Title;
