import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {buttonTheme, whitTextInput} from './Theme';


const Login = ({navigation}) => {
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState();

   return (
      <View style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor="#000000"/>
         <LottieView style={styles.lottie} source={require('./assets/lottie/login.json')} autoPlay loop/>
         <Card style={styles.card}>
            <Card.Content>
               <TextInput
                  style={{marginBottom: 20, textAlign: 'right'}}
                  keyboardType={'numeric'}
                  label="موبایل"
                  maxLength={10}
                  theme={whitTextInput}
                  placeholder='شماره موبایل بدون صفر وارد کنید'
                  value={username}
                  onChangeText={text => setUsername(text)}/>
               <TextInput
                  label="رمز عبور"
                  theme={whitTextInput}
                  style={{textAlign: 'left'}}
                  placeholder='رمز عبور خود را وارد کنید'
                  keyboardType={'numeric'}
                  value={password}
                  secureTextEntry={true}
                  password={true}
                  onChangeText={text => setPassword(text)}
               />
               <View style={styles.actions}>
                  <Button theme={buttonTheme} style={{width: 80}} mode="contained" onPress={() => {}}>
                     ورود
                  </Button>
                  <Button style={styles.signIn} mode="contained" onPress={() => {}}>
                     ثبت نام
                  </Button>
               </View>
            </Card.Content>
         </Card>

      </View>
   );
};

export default Login;

const styles = StyleSheet.create({
   lottie: {
      position:'absolute',
      top:0,
      left:'28%',
      width:130,
      height: 130
   },
   container: {
      flexDirection: 'column',
      justifyContent:'center',
      backgroundColor: '#000000',
      height: '100%',
      padding: 15
   },
   card: {
      color: '#000',
      padding: 30,
      height:300,
      backgroundColor: '#fff',
   },
   actions: {
      marginTop:30,
      alignSelf: 'center',
      flexDirection: 'row-reverse'
   },
   signIn: {
      borderWidth: 1,
      borderColor: '#000000',
      borderRadius: 100,
      color: '#000',
      marginRight:20,
      backgroundColor: '#fff'
   }
});