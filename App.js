import React, {useState} from 'react';
import { StyleSheet, StatusBar, SafeAreaView, Platform, View, Text } from 'react-native';
import { colors, texts } from './src/utils/colors';
import { Focus } from './src/features/focus';
import { Timer } from './src/features/Timer';
import { FocusHistory } from './src/features/FocusHistory';



export default function App() {
  const [currentInput, setCurrentInput] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentInput ? 
      <>
      <Focus addInput={setCurrentInput} />
      <FocusHistory focusHistory={history}/>
      </>
      : 
      <Timer
        focusInput = {currentInput}
        onTimerEnd = {(focusInput) => {setHistory([...history, focusInput])}} //What to do when the timers end
        clearInput = {() =>{setCurrentInput(null)}} //Clears the input
        />
      }  
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.backgroundColor,
  },
  text:{
    color: colors.text,
    fontSize: texts.fontSize,
    fontWeight: texts.fontWeight,
    padding:10,
    margin:10,
    textAlign: 'center'
  }
});
