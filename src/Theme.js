import {DefaultTheme, configureFonts} from 'react-native-paper';

const fontConfig = {
   default: {
      regular: {
         fontFamily: 'iran-sans',
         fontWeight: 'normal',
         fontSize:12
      }
   }
};

/*const fontConfig = {
   web: {
      regular: {
         fontFamily: 'iran-sans',
         fontWeight: 'normal',
      },
      medium: {
         fontFamily: 'iran-sans-medium',
         fontWeight: 'normal',
      },
      light: {
         fontFamily: 'iran-sans-light',
         fontWeight: 'normal',
      },
      thin: {
         fontFamily: 'iran-sans-thin',
         fontWeight: 'normal',
      },
   },
   ios: {
      regular: {
         fontFamily: 'iran-sans',
         fontWeight: 'normal',
      },
      medium: {
         fontFamily: 'iran-sans-medium',
         fontWeight: 'normal',
      },
      light: {
         fontFamily: 'iran-sans-light',
         fontWeight: 'normal',
      },
      thin: {
         fontFamily: 'iran-sans-thin',
         fontWeight: 'normal',
      },
   },
   android: {
      regular: {
         fontFamily: 'iran-sans',
         fontWeight: 'normal',
      },
      medium: {
         fontFamily: 'iran-sans-medium',
         fontWeight: 'normal',
      },
      light: {
         fontFamily: 'iran-sans-light',
         fontWeight: 'normal',
      },
      thin: {
         fontFamily: 'iran-sans-thin',
         fontWeight: 'normal',
      },
   }
};*/

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

export const buttonWhiteTheme = {
   ...mainTheme,
   roundness: 100,
   colors: {
      ...mainTheme.colors,
      primary: '#fff',
      accent: '#000000',
      text: '#000000',
   }
};

export const whiteHeader = {
   headerStyle: {
      backgroundColor: '#ffffff',
      elevation: 0
   },
   headerTintColor: '#000000',
   headerTitleStyle: {
      fontSize: 17,
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
      fontSize: 17,
      fontFamily: 'iran-sans'
   }
};

export const whitTextInput = {
   colors: {
      background: '#fff',
      primary: '#171717',
      accent: '#ffffff',
      text: '#000000'
   }
};
