import React from 'react';
import {
  StyleSheet,
  SafeAreaView 
} from 'react-native';
// import { SafeAreaProvider, } from 'react-native-safe-area-context';
import Splashscreen from './src/Components/Splash-Screen/Splashscreen';



function App() {
  

  return (
    <SafeAreaView>
        <Splashscreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // backgroundColor: "#b80d5a"
  }
});

export default App;
