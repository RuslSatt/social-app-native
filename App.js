import { StyleSheet, Text, View } from 'react-native';
import {StartPage} from "./components/StartPage/StartPage";

export default function App() {
  return (
    <View style={styles.container}>
        <StartPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  }
});
