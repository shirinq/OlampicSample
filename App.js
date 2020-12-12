import * as React from 'react';
import {Provider as PaperProvider, Text} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ChooseLang from './src/ChooseLang';
import {blackHeader, mainTheme, whiteHeader} from './src/Theme';
import {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import Login from './src/Login';
import {LOGIN_PAGE, CHOOSE_LANG_PAGE} from './src/Const';

const fetchFonts = () => {
   return Font.loadAsync({
      'iran-sans': require('./src/assets/fonts/iransansnormal.ttf')
   });
};

export default function App() {
   const [fontLoaded, setFontLoaded] = useState(false);
   const Stack = createStackNavigator();

   if (!fontLoaded) {
      console.log(fontLoaded)
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
               <Stack.Screen name={CHOOSE_LANG_PAGE} component={ChooseLang} options={{...whiteHeader, title: 'زبان مورد نظر خود را انتخاب کنید'}}/>
               <Stack.Screen name={LOGIN_PAGE} component={Login} options={{...blackHeader, title: 'ورود'}}/>
            </Stack.Navigator>
         </NavigationContainer>
      </PaperProvider>
   );
}