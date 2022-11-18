import React, { useState,useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmSign from '../screens/ConfirmSignUp';
import ForgotPass from '../screens/ForgotPassword';
import NewPass from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/Home';
import {Auth} from 'aws-amplify';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [user, setUser] = useState(undefined);
  const checkUser = async() => {
    try{
    const authUser = await Auth.currentAuthenticatedUser({bypassCache: true})
    setUser(authUser);
    }catch(e){
      setUser(null);
    }
  };
  useEffect(() => {
    checkUser();
  },[]);
  if(user === undefined){
    return (
      <View>
        <ActivityIndicator style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>
      </View>
    );
  }
    return (
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{headerShown: false}}>
          {/* {user ? ( */}
           <Stack.Screen name = 'Home' component = {HomeScreen} />
          {/* ):( */}
         {/* <> */}
         <Stack.Screen name = "SignIn" component = {SignIn} />
         <Stack.Screen name = "SignUp" component = {SignUpScreen} />
         <Stack.Screen name = "Confirm Sign In" component = {ConfirmSign} />
         <Stack.Screen name = "ForgotPassword" component = {ForgotPass} />
         <Stack.Screen name = "New Password" component = {NewPass} />
         {/* </>
         )} */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
export default Navigation;
