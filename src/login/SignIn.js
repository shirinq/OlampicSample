import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, Text, TextInput} from 'react-native-paper';
import {buttonTheme, whitTextInput} from '../Theme';
import {strongRegex} from '../Const';
import WhiteTextInput from "../component/textInput/WhiteTextInput";


const SignIn = () => {
   const [username, setUsername] = useState();
   const [password, setPassword] = useState();
   const [error, setError] = useState(false);

   const handleChange = text => {
      setPassword(text);
      if (!strongRegex.test(text) && text !== '')
         setError(true);
      else setError(false);
   };

   return (
      <View style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
         <Text style={{fontSize: 23}}>سلام!</Text>
         <Text style={{color:'#6e768e'}}>به حساب خود وارد شوید</Text>
         <WhiteTextInput
            style={{marginTop: 20, marginBottom: 20, textAlign: 'right'}}
            keyboardType={'numeric'}
            label="موبایل"
            maxLength={10}
            right={<Text>+98</Text>}
            theme={whitTextInput}
            textAlign='left'
            placeholder='شماره موبایل بدون صفر وارد کنید'
            value={username}
            onChangeText={text => setUsername(text)}/>
         <WhiteTextInput
            label="رمز عبور"
            error={error}
            maxLength={6}
            theme={whitTextInput}
            placeholder='رمز عبور خود را وارد کنید'
            value={password}
            secureTextEntry={true}
            password={true}
            textAlign='left'
            onChangeText={handleChange}
         />
         {/*<TextInput
            mode='outlined'
            style={{marginTop: 20, marginBottom: 20, textAlign: 'left'}}
            keyboardType={'numeric'}
            label="موبایل"
            maxLength={10}
            right={<Text>+98</Text>}
            theme={whitTextInput}
            placeholder='شماره موبایل بدون صفر وارد کنید'
            value={username}
            onChangeText={text => setUsername(text)}/>
         <TextInput
            mode='outlined'
            label="رمز عبور"
            error={error}
            maxLength={6}
            theme={whitTextInput}
            placeholder='رمز عبور خود را وارد کنید'
            value={password}
            secureTextEntry={true}
            password={true}
            onChangeText={handleChange}
         />*/}
         <Button theme={buttonTheme} style={styles.signIn} mode="contained" onPress={() => {
         }}>ورود</Button>
      </View>
   );
};

export default SignIn;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: 50,
      paddingBottom: 100,
      paddingLeft: 20,
      paddingRight: 20,
   },
   signIn: {
      marginTop: 20,
   }
});