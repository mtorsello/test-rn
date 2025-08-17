import { View, StyleSheet } from 'react-native';
import TalkButton from 'react-native-rn-talk-button-mt-2';

export default function App() {
  return (
    <View style={styles.container}>
      <TalkButton label="Press Me" onPress={() => console.log('pressed')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
