import {DefaultTheme, configureFonts} from 'react-native-paper';

const fontConfig = {
   default: {
      regular: {
         fontFamily: 'iran-sans',
         fontWeight: 'normal'
      }
   }
};

export const mainTheme = {
   ...DefaultTheme,
   roundness: 3,
   colors: {
      ...DefaultTheme.colors,
      primary: '#ffffff',
      accent: '#000000'
   },
   fonts: configureFonts(fontConfig),
   animation: {
      scale: 1.0
   }
};

export const buttonTheme = {
   ...mainTheme,
   roundness: 100,
   colors: {
      ...mainTheme.colors,
      primary: '#000000',
      accent: '#ffffff',
      text: '#ffffff'
   }
};

export const whiteHeader = {
   headerStyle: {
      backgroundColor: '#ffffff',
      elevation: 0
   },
   headerTintColor: '#000000',
   headerTitleStyle: {
      fontSize: 20,
      fontFamily: 'iran-sans'
   }
};

export const blackHeader = {
   headerStyle: {
      backgroundColor: '#000000',
      elevation: 0
   },
   headerTintColor: '#ffffff',
   headerTitleStyle: {
      fontSize: 20,
      fontFamily: 'iran-sans'
   }
};

export const whitTextInput = {
   colors: {
      primary: '#171717',
      accent: '#ffffff',
      text: '#000000'
   }
};
