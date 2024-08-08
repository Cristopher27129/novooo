import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Header from './components/header';
import  Center from './components/center';
import  Footer from './components/footer';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Center/>
      <Footer/>

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
