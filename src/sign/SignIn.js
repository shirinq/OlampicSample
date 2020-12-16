import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {buttonTheme, whitTextInput} from '../Theme';
import {strongRegex} from '../Const';


const SignIn = ({setSignIn}) => {
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
      <Card.Content>
         <TextInput
            mode='outlined'
            style={{marginBottom: 20, textAlign: 'left'}}
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
            style={{flexDirection: 'column-reverse'}}
            placeholder='رمز عبور خود را وارد کنید'
            value={password}
            secureTextEntry={true}
            password={true}
            onChangeText={handleChange}
         />
         <View style={styles.actions}>
            <Button style={styles.signIn} mode="contained" onPress={() => {}}>
               ورود
            </Button>
            <Button theme={buttonTheme} mode="contained" onPress={() => setSignIn(false)}>
               ثبت نام
            </Button>
         </View>
      </Card.Content>
   );
};

export default SignIn;

const styles = StyleSheet.create({
   actions: {
      marginTop: 30,
      alignSelf: 'center',
      flexDirection: 'row'
   },
   signIn: {
      borderWidth: 1,
      width:80,
      borderColor: '#000000',
      borderRadius: 100,
      color: '#000',
      marginRight: 20,
      backgroundColor: '#fff'
   }
});