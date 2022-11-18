import { View, StyleSheet,Alert,Text,TouchableOpacity, ScrollView } from 'react-native';
import {useState} from 'react'
import React from 'react';
import Input from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import {Auth} from 'aws-amplify';
const SignUpScreen = () => {
  // const [username,setUserame] = useState('');
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
   const [confirmPassword,setConfimrPassword] = useState('');
   const [loading,setLoading] = useState(false);
   const navigation = useNavigation();
   const onSignUpPressed = async() => {
    if(loading){
      return
    }
    if (password === '' && email === '' && confirmPassword === '') {
      Alert.alert('ERROR','Text Fields not be empty.');
    } else if(!password){
      Alert.alert('ERROR','Please enter Password.')
      return 
    } else if (!email){
      Alert.alert('ERROR','Please enter email.')
    } else if (!confirmPassword){
      Alert.alert('ERROR','Please enter confirm password.')
    } else if (password !== confirmPassword){
      Alert.alert('ERROR','Password and Confirm password not match.')
    }
     else {
      setLoading(true)
      try {
        console.log(email)
        console.log(password)
      const user = await Auth.signUp(
        email, password
      );
      console.log(user)
      navigation.navigate('Confirm Sign In')
    } catch (error) {
       Alert.alert('Error',error.message)
       console.log(error)
    }
      setLoading(false)
    }
   }
   const onTermofUse= () => {
    console.warn('Sign Up')
   }
   const onPrivacyPolicy= () => {
    console.warn('Sign Up')
   }
   const onSignInPress = () => {
    navigation.navigate('SignIn')
  }
    return (
           <ScrollView>
            <View style = {styles.root}>
            <Text style = {styles.title}>Create Account</Text>
            {/* <Input placeholder="Username" value={username} setValue ={setUserame} secureEntry = {false}/> */}
            <Input placeholder="Email" value={email} setValue ={setEmail} secureEntry = {false}/>
            <Input placeholder="Password" value ={password} setValue = {setPassword} secureEntry = {true}/>
            <Input placeholder="Confirm Password" value ={confirmPassword} setValue = {setConfimrPassword} secureEntry = {true}/>
            <Text style = {styles.text}>By SignUp, you confimr that you accept our <Text style = {styles.link} onPress = {onTermofUse}>Terms of Use</Text> and <Text style ={styles.link} onPress = {onTermofUse}>Privacy Policy</Text></Text>
            <CustomButton buttonText="SIGN UP" onPress={onSignUpPressed}/>
            <View style={styles.account}>
            <Text style={styles.creatOne}>Have an account?</Text>
             <TouchableOpacity>
              <Text style={styles.creatOneAccount} onPress = {onSignInPress}>Sign In</Text>
            </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
    );
};
const styles = StyleSheet.create({
    root: {
      alignItems : 'center',
      padding:20
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
    account: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    },
    createAccount: {
      fontWeight: 'bold',
      alignItems: 'center',
  },
  title: {
    fontWeight : 'bold',
    fontSize: 20,
    color :'#051C60',
    margin: 10
  },
    text: {
  color: 'gray',
  marginVertical: 10,
    },
    link: {
    color: '#FDB075'
    }
  
});
export default SignUpScreen


