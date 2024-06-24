import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import App from './src/App';

export default function MainApp() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
