import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {LOGIN_PAGE} from '../../Const';
import {buttonTheme} from '../../Theme';


const Terms = ({navigation}) => {
   return (
      <View style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
         <Text style={styles.title}>شرایط و قوانین</Text>
         <Text style={styles.rules}>شریط قوانین قوانین قوانین قوانین قوانین قوانین شریط  شریط  شریط  شریط  شریط قوانین قوانین قوانین قوانین قوانین قوانین قوانین قوانین </Text>

         <View style={{flexDirection: 'row', justifyContent: 'space-between', flex:1}}>
            <Button theme={buttonTheme} style={styles.cancel} onPress={() => navigation.navigate(LOGIN_PAGE)}>لغو</Button>
            <Button style={styles.confirm} onPress={() => navigation.goBack()}>تایید</Button>
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      padding: 5,
      backgroundColor: '#fff'
   },
   title: {
      alignSelf:'flex-end',
      fontSize:20,
      padding:15,
   },
   rules: {
      flex: 5,
      padding:20,
      color:'#6e768e',
      alignSelf:'center',
      textAlign:'center'
   },
   cancel: {
      flex: 1,
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 40,
      borderColor:'#000',
      borderWidth:1,
   },
   confirm: {
      flex: 1,
      backgroundColor: '#000',
      marginLeft: 15,
      marginRight: 15,
      marginBottom: 40
   }
});

export default Terms;