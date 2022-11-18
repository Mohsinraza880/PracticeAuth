import { View, StyleSheet,Alert,Text,TouchableOpacity, ScrollView } from 'react-native';
import {useState} from 'react'
import React from 'react';
import Input from '../components/CustomInput';
import {Auth} from 'aws-amplify';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
const ConfirmSignUp = () => {
  const navigation = useNavigation();
   const [code,setCode] = useState('');
   const [email,setEmail] = useState('');
   const [loading,setLoading] = useState(false);
   const onConfirmSignUp = async() => {
     if(loading){
      return
    }
    if (email === '' && code === '') {
      Alert.alert('ERROR','Text Fields not be empty.');
      return
    } else if(!email){
      Alert.alert('ERROR','Please enter email.')
      return 
    } else if (!code){
      Alert.alert('ERROR','Please enter code.')
      return
    } else {
      setLoading(true)
      try {
      const user = await Auth.confirmSignUp(
        email, code
      );
      console.log(user)
      navigation.navigate('SignIn')
    } catch (error) {
       Alert.alert('Error',error.message)
       console.log(error)
    }
      setLoading(false)
    }
   }
   const onResendPressed = async() => {
    if(!email){
      Alert.alert('ERROR','Please enter email.')
      return 
    }
    try {
   const user = await Auth.resendSignUp(email);
      console.log(user);
  } catch (err) {
      console.log('error resending code: ', err);
  }
   }

   const onBackToSignIn = () => {
    navigation.navigate('SignIn')
   }
    return (
           <ScrollView>
            <View style = {styles.root}>
            <Text style = {styles.title}>Confirm your email</Text>
            <Input placeholder="Enter your email address" value={email} setValue ={setEmail} secureEntry = {false}/>
            <Input placeholder="Enter your confirmation code" value={code} setValue ={setCode} secureEntry = {false}/>
            <CustomButton buttonText="CONFIRM SIGN UP" onPress={onConfirmSignUp}/>
            <View style={styles.account}>
            <TouchableOpacity>
                <Text style={styles.resendCode} onPress = {onResendPressed}>Resend Code</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.resendCode} onPress = {onBackToSignIn}>Back to Sign In</Text>
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
    
  title: {
    fontWeight : 'bold',
    fontSize: 20,
    color :'#051C60',
    margin: 10
  },  
  resendCode: {
    padding: 10,
    marginVertical:5,
    color: 'gray',
    alignItems: 'center',
  },
});
export default ConfirmSignUp