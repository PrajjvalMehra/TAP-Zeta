import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './Screens/OnboardingScreen';
import LoginSignup from './Screens/LoginSignup'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginSignup />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
});
