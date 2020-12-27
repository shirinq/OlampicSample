import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {buttonTheme, whitTextInput} from '../../Theme';
import {strongRegex} from '../../Const';


const SignIn = () => {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
   const [error, setError] = useState(false);

   const handleChange = text => {
      setPassword(text);
      setError(!strongRegex.test(text) && text !== '');
   };

   return (
      <View style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
         <Text style={{fontSize: 20, alignSelf:'flex-end'}}>سلام!</Text>
         <Text style={{color: '#6e768e', alignSelf:'flex-end'}}>به حساب خود وارد شوید</Text>
         <TextInput
            style={{marginTop: 20, marginBottom: 20, textAlign: 'left'}}
            keyboardType={'numeric'}
            label="موبایل"
            mode="outlined"
            maxLength={10}
            right={<TextInput.Icon name='account' />}
            textAlign='right'
            theme={whitTextInput}
            placeholder='شماره موبایل بدون صفر وارد کنید'
            value={username}
            onChangeText={text => setUsername(text)}/>
         <TextInput
            label="رمز عبور"
            error={error}
            style={{textAlign: 'left'}}
            mode="outlined"
            right={<TextInput.Icon name='lock' />}
            theme={whitTextInput}
            placeholder='رمز عبور خود را وارد کنید'
            value={password}
            secureTextEntry={true}
            password={true}
            textAlign='right'
            onChangeText={handleChange}
         />
         <Button theme={buttonTheme} style={styles.signIn} mode="contained" onPress={() => {
         }}>ورود</Button>
         <Button mode="text" color='#6e768e' style={styles.signIn} onPress={() => {console.log('forgetPassword');}}>رمز عبور خود را فراموش کرده اید؟</Button>
      </View>
   );
};

export default SignIn;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: 50,
      paddingBottom: 100,
      paddingLeft: 20,
      paddingRight: 20
   },
   signIn: {
      borderRadius:5,
      padding:5,
      fontSize:24,
      marginTop: 30
   },
   forgetPassword: {
      marginTop: 20,
      color: '#6e768e'
   }
});