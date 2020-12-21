import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {buttonTheme} from './Theme';
import {LOGIN_PAGE} from './Const';

export default function ChooseLang({navigation}) {
   const langs = ['Eng','عربی','Turkish','کردی','فارسی']
   return (
      <View style={styles.container}>
         <Text style={{marginBottom:20,fontSize: 23}}>زبان مورد نظر خود را انتخاب کنید</Text>
         <StatusBar barStyle="dark-content" backgroundColor="#fff" />
         {langs.map((item, index)=><Button key={index} theme={buttonTheme} style={{padding:5}} mode="contained" onPress={() => navigation.navigate(LOGIN_PAGE)}>
            {item}
            </Button>)}
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "space-around",
      backgroundColor: "#fff",
      paddingTop: 50,
      paddingBottom: 100,
      paddingLeft: 20,
      paddingRight: 20,
   },
});