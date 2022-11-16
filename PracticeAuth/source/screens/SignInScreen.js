import { View, StyleSheet,Image,Text,TouchableOpacity } from 'react-native';
import {useState} from 'react'
import React from 'react';
import myLogo from '../assets/Logo.png';
import Input from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
const SignInScreen = () => {
   const [username,setUserame] = useState('');
   const [password,setPassword] = useState('');
   const onSignInPressed = () => {
    console.warn('Sign In')
   }
    return (
            <View style = {styles.root}>
            <Image source={myLogo} style = {styles.logo} resizeMode = "contain"/>
            <Input placeholder="Username" value={username} setValue ={setUserame} secureEntry = {false}/>
            <Input placeholder="Password" value ={password} setValue = {setPassword} secureEntry = {true}/>
            <CustomButton buttonText="Sign In" onPress={onSignInPressed}/>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot password</Text>
            </TouchableOpacity>
            <View style={styles.newView}>
            <Text style={styles.creatOne}>Don't have an account?</Text>
             <TouchableOpacity>
                <Text style={styles.creatOneAccount}>Create One</Text>
            </TouchableOpacity>
            </View>
            </View>
    );
};
const styles = StyleSheet.create({
  root: {
    alignItems : 'center',
    padding:20
    },
  logo: {
    width: '70%',
    width: 300,
    height: 100
  },
  forgotPassword: {
    padding: 10,
    marginVertical:5,
    color: 'gray',
    alignItems: 'center',
  },
  creatOne: {
    color: 'gray',
    alignItems: 'center',
    paddingLeft:5
  },
  creatOneAccount: {
    color: 'blue',
    alignItems: 'center',
    paddingLeft:5
  },
  container: {
    backgroundColor: '#E7E9F5',
    width: '100%',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    alignItems: 'center',
    fontWeight: 'bold',
    color: '#6978A7'
  },
  newView: {
   flexDirection: 'row',
   alignItems: 'flex-start',
  }
  
});
export default SignInScreen

