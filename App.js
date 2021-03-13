import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './Screens/OnboardingScreen';
import LoginSignup from './Screens/LoginSignup'
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/PoppinsRegular.ttf'),
    PoppinsBold : require('./assets/fonts/Poppins-Bold.ttf')
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Onboarding />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
