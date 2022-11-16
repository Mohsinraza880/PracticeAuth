import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CustomButton = ({buttonText,onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style = {styles.container}>
       <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
 container: {
   backgroundColor: '#3B71F3',
   width: '100%',
   padding: 15,
   marginVertical: 5,
   borderRadius: 5,
   alignItems: 'center'
 },
 text: {
    fontWeight: 'bold',
    color: 'white'
 }
});
export default CustomButton;