import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {buttonTheme} from './Theme';
import {SIGN_PAGE} from './Const';

export default function ChooseLang({navigation }) {
   return (
      <View style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor="#fff" />
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(SIGN_PAGE)}>
            Eng
         </Button>
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(SIGN_PAGE)}>
            عربی
         </Button>
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(SIGN_PAGE)}>
            Turkish
         </Button>
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(SIGN_PAGE)}>
            کردی
         </Button>
         <Button theme={buttonTheme} mode="contained" onPress={() => navigation.navigate(SIGN_PAGE)}>
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
      paddingTop: 100,
      paddingBottom: 100,
      paddingLeft: 20,
      paddingRight: 20,
   },
});