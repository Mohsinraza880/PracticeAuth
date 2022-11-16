import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import SignInPage from './source/screens/SignInScreen';
import Amplify from 'aws-amplify';
import config from "./src/aws-exports";
//import { withAuthenticator } from 'aws-amplify-react-native';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
function App() {
  return (
    <SafeAreaView style={styles.container}>
      <SignInPage/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;