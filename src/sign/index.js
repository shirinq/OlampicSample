import React, {useState} from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import SignIn from './SignIn';
import SignUp from './SignUp';
import {Card} from 'react-native-paper';


const Sign = () => {
   const [signIn, setSignIn] = useState(true);

   return (
      <View style={styles.container}>
         <StatusBar barStyle="light-content" backgroundColor="#000000"/>
         <LottieView style={styles.lottie} source={require('../assets/lottie/login.json')} autoPlay loop/>
         <Card style={styles.card}>
            {signIn ? <SignIn setSignIn={setSignIn}/> : <SignUp setSignIn={setSignIn}/>}
         </Card>
      </View>
   );
};

export default Sign;

const styles = StyleSheet.create({
   lottie: {
      position: 'relative',
      marginBottom:20,
      left: '28%',
      width: 120,
      height: 120
   },
   card: {
      color: '#000',
      padding: 25,
      flex:4,
      justifyContent: 'center',
      backgroundColor: '#fff',
      borderRadius:0,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
   },
   container: {
      flexDirection: 'column',
      backgroundColor: '#000000',
      height: '100%',
   }
});