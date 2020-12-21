import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import {Button, Text} from 'react-native-paper';
import {buttonWhiteTheme} from '../../Theme';
import {SIGN_IN_PAGE, SIGN_UP_PAGE} from '../../Const';


const Sign = ({navigation}) => {
   return (
      <View style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor="#000"/>
         <Text style={styles.welcome}>خوش آمدید</Text>
         <LottieView style={styles.lottie} source={require('../../assets/lottie/login.json')} autoPlay loop/>
         <Button theme={buttonWhiteTheme} mode="contained"
                 onPress={() => navigation.navigate(SIGN_IN_PAGE)}
                 style={styles.signIn}>ورود</Button>
         <Button onPress={() => navigation.navigate(SIGN_UP_PAGE)}
                 style={styles.signUp} mode="outlined">ثبت نام</Button>
      </View>
   );
};

export default Sign;

const styles = StyleSheet.create({
   lottie: {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto',
      top: 10,
      flexDirection: 'row',
      left: 0,
      right: 0
   },
   welcome: {
      paddingTop: 10,
      alignSelf: 'center',
      color: '#fff',
      fontSize: 20
   },
   container: {
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#000',
      padding: 10,
      height: '100%'
   },
   signUp: {
      borderWidth: 1,
      borderColor: '#fff',
      borderRadius: 5,
      padding: 5,
      backgroundColor: '#000',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 40
   },
   signIn: {marginLeft: 15, marginRight: 15, marginBottom: 20, padding: 5}
});