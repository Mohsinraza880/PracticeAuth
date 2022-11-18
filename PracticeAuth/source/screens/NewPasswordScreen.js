import { View, StyleSheet,Alert,Text,TouchableOpacity, ScrollView } from 'react-native';
import {useState} from 'react'
import React from 'react';
import Input from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';

const NewPassword = () => {
  const navigation = useNavigation();

   const [passowrd,setNewPassword] = useState('');
   const [code,setCode] = useState('');
   const [email,setEmail] = useState('');
   const [loading,setLoading] = useState('')
   const onSubmitPress = async() => {
    if(loading){
      return
    }
    if (email === '' && code === '' && passowrd === '') {
      Alert.alert('ERROR','Text Fields not be empty.');
      return
    } else if(!email){
      Alert.alert('ERROR','Please enter email.')
      return 
    } else if(!code){
      Alert.alert('ERROR','Please enter code.')
      return 
    } else if(!passowrd){
      Alert.alert('ERROR','Please enter new password.')
      return  
    } else {
      setLoading(true)
      try {
      const user = await Auth.forgotPasswordSubmit(
        email,code,passowrd
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
            <Input placeholder="Email" value={email} setValue ={setEmail} secureEntry = {false}/>
            <Input placeholder="Code" value={code} setValue ={setCode} secureEntry = {false}/>
            <Input placeholder="Enter new password" value={passowrd} setValue ={setNewPassword} secureEntry = {true}/>
            <CustomButton buttonText="SUBMIT" onPress={onSubmitPress}/>
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
export default NewPassword