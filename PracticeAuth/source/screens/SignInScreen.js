      import { View, StyleSheet,Image,Text,TouchableOpacity, ScrollView, Alert } from 'react-native';
      import {useState} from 'react'
      import React from 'react';
      import myLogo from '../assets/Logo.png';
      import Input from '../components/CustomInput';
      import CustomButton from '../components/CustomButton';
      import {useNavigation} from '@react-navigation/native';
      import {Auth} from 'aws-amplify';
      const SignInScreen = () => {
      const [username,setUsername] = useState('');
      const [loading,setLoading] = useState('')
      const [password,setPassword] = useState('');
      const navigation = useNavigation();
      const onSignInPressed = async () => {
        if(loading){
          return
        }
        if (username === '' && password === '') {
          Alert.alert('ERROR','Please enter email id and password');
        } else if(!username) {
          Alert.alert('ERROR','Please enter email address.')
          return
        } else if(!password){
          Alert.alert('ERROR','Please enter Password.')
          return 
        } else {
          setLoading(true)
          try {
          const user = await Auth.signIn(username, password);
          console.log(user)
          navigation.navigate('Home');
        } catch (error) {
           Alert.alert('Error',error.message)
           console.log(error)
        }
          setLoading(false)
        }
      }
      const onSignUpPressed = () => {
        navigation.navigate('SignUp')
      }
      const onForgotPressed = () => {
        navigation.navigate('ForgotPassword')
      }
      
        return (
              <ScrollView showsVerticalScrollIndicator = {false}>
                <View style = {styles.root}>
                <Image source={myLogo} style = {styles.logo} resizeMode = "contain"/>
                <Input placeholder="Email" value={username} setValue ={setUsername} secureEntry = {false}/>
                <Input placeholder="Password" value ={password} setValue = {setPassword} secureEntry = {true}/>
                <CustomButton buttonText="SIGN IN" onPress={onSignInPressed}/>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword} onPress = {onForgotPressed}>Forgot password</Text>
                </TouchableOpacity>
                <View style={styles.account}>
                <Text style={styles.creatOne}>Don't have an account?</Text>
                <TouchableOpacity>
                    <Text style={styles.creatOneAccount} onPress = {onSignUpPressed}>Create One</Text>
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
      account: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      }

      });
      export default SignInScreen

