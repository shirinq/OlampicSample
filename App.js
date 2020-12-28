import * as React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChooseLang from './src/ChooseLang';
import {blackHeader, mainTheme, whiteHeader} from './src/Theme';
import {useEffect, useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Login from './src/screens/login';
import SignIn from './src/screens/login/SignIn';
import SignUp from './src/screens/login/SignUp';
import Terms from './src/screens/login/TermsAndCondition';
import {LOGIN_PAGE, CHOOSE_LANG_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE, TERMS_PAGE} from './src/Const';
import {I18nManager} from 'react-native';

const fetchFonts = () => {
   return Font.loadAsync({
      'iran-sans': require('./src/assets/fonts/iransansnormal.ttf')
   });
};

export default function App() {
   const [fontLoaded, setFontLoaded] = useState(false);
   const Stack = createStackNavigator();

  /* useEffect(()=>{
      I18nManager.forceRTL(true);
   },[])*/

   if (!fontLoaded) {
      return (
         <AppLoading
            startAsync={fetchFonts}
            onFinish={() => setFontLoaded(true)}
         />
      );
   }

   return (
      <PaperProvider theme={mainTheme}>
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name={CHOOSE_LANG_PAGE} component={ChooseLang} options={{...whiteHeader, title: 'انتخاب زبان'}}/>
               <Stack.Screen name={LOGIN_PAGE} component={Login} options={{...blackHeader, title: 'آناماکا'}}/>
               <Stack.Screen name={SIGN_IN_PAGE} component={SignIn} options={{...whiteHeader, title: 'ورود به سامانه'}}/>
               <Stack.Screen name={TERMS_PAGE} component={Terms} options={{...whiteHeader, title: ' '}}/>
               <Stack.Screen name={SIGN_UP_PAGE} component={SignUp} options={{...whiteHeader, title: 'ثبت نام'}}/>
            </Stack.Navigator>
         </NavigationContainer>
      </PaperProvider>
   );
}