import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {buttonTheme} from './Theme';
import {LOGIN_PAGE} from './Const';

export default function ChooseLang({navigation}) {
   return (
      <View style={styles.container}>
         <Text style={{marginBottom:20}}>زبان مورد نظر خود را انتخاب کنید</Text>
         <StatusBar barStyle="dark-content" backgroundColor="#fff" />
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(LOGIN_PAGE)}>
            Eng
         </Button>
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(LOGIN_PAGE)}>
            عربی
         </Button>
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(LOGIN_PAGE)}>
            Turkish
         </Button>
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(LOGIN_PAGE)}>
            کردی
         </Button>
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(LOGIN_PAGE)}>
            فارسی
         </Button>
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