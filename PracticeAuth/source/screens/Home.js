import { Auth } from 'aws-amplify';
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const onSignOut = async() => {
    try{
   const test = await Auth.signOut()
    console.log(test);
    navigation.navigate('SignIn')
    } catch(e){
      console.log(e);
    }
}
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home</Text>
      <TouchableOpacity>
        <Text onPress={onSignOut} style={{width: '100%', textAlign: 'center', color:'red',marginTop: 'auto',marginVertical: 20, fontSize: 20}}>
         Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;