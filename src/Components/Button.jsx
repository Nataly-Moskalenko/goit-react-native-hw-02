import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export function ButtonSingup(props) {
  const {
    onPress = () => {
      console.log('click');
    },
    title = 'Sing Up',
  } = props;

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export function ButtonLogin(props) {
  const {
    onPress = () => {
      console.log('click');
    },
    title = 'Log In',
  } = props;

  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    borderRadius: 100,
    backgroundColor: '#FF6C00',
    alignItems: 'center',
    justifyContent: 'center',   
  },  
  text: {
    fontSize: 16,
    lineHeight: 19,   
    color: 'white',
  },
});
