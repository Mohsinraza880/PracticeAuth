import { View, StyleSheet,Alert,Text,TouchableOpacity, ScrollView } from 'react-native';
import {useState} from 'react'
import React from 'react';
import Input from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/core';
import { Auth } from 'aws-amplify';

const ConfirmSignUp = () => {
  const navigation = useNavigation();
  const [loading,setLoading] = useState(false);
   const [email,setEmail] = useState('');
   const onSendPressed = async() => {
    if(loading){
      return
    }
    if(!email){
      Alert.alert('ERROR','Please enter email.')
      return 
    } else {
      setLoading(true)
      try {
      const user = await Auth.forgotPassword(
        email
      );
      console.log(user)
      navigation.navigate('New Password')
    } catch (error) {
       Alert.alert('Error',error.message)
       console.log(error)
    }
      setLoading(false)
    }
   }
   const onResendPressed = () => {
    console.warn('Sign Up')
   }
   const onBackToSignIn = () => {
    navigation.navigate('SignIn')
   }


    return (
           <ScrollView>
            <View style = {styles.root}>
            <Text style = {styles.title}>Reset your password</Text>
            <Input placeholder="Enter your email" value={email} setValue ={setEmail} secureEntry = {false}/>
            <CustomButton buttonText="SEND" onPress={onSendPressed}/>
            <View style={styles.account}>
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