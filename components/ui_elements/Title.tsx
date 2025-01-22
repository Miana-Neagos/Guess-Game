
import { View, Text, StyleSheet } from 'react-native';
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
    borderWidth: 0,
    borderColor: colorTheme.darkGray,
    borderRadius: 8,
    padding: 16,
    elevation: 4,
    maxWidth: "80%",
    width: 300,
  }
});
export default Title;
  