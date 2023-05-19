import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ButtonSingup } from '../Components/Button';

export default function RegistrationScreen() {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginFocus, setLoginFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <TextInput
        placeholder="Login"
        onChangeText={(newLogin) => setLogin(newLogin)}
        defaultValue={login}
        style={loginFocus ? styles.inputOnFocus : styles.input}
        onFocus={() => setLoginFocus(true)}
        onBlur={() => setLoginFocus(false)}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(newEmail) => setEmail(newEmail)}
        defaultValue={email}
        style={emailFocus ? styles.inputOnFocus : styles.input}
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
        style={passwordFocus ? styles.passwordOnFocus : styles.password}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
      />
      <ButtonSingup />
      <Text style={styles.text}>Do you already have an account? Log In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 219,
    // marginTop: 263,
    backgroundColor: '#fff',
    // borderRadius: '25px 25px 0 0',
  },
  input: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  inputOnFocus: {
    borderColor: '#FF6C00',
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 16,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',   
    borderRadius: 8,
  },
  title: {
    marginTop: 92,
    marginBottom: 32,
    // fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    textAlign: 'center',
    color: '#212121',
  },
  password: {
    height: 50,
    padding: 16,
    borderWidth: 1,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderRadius: 8,
    marginBottom: 43,
  },
  passwordOnFocus: {
    borderColor: '#FF6C00',
    height: 50,
    padding: 16,
    borderWidth: 1,
    marginBottom: 43,
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#F6F6F6',    
    borderRadius: 8,
  },
  text: {
    marginTop: 16,
    // marginBottom: 78,
    marginBottom: 114,
    textAlign: 'center',
    // fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});
