import React from 'react'
import {TextInput, StyleSheet, I18nManager, View} from 'react-native'

const WhiteTextInput = ({
                           placeholder, value, onChange,
                           multiline = false, style = {},
                           keyboardType, error,
                           password = false, secureTextEntry = false,
                           textAlign = I18nManager.isRTL ? 'right' : 'left',
                           ...props
                        }) => {


   return <View style={{...styles.container, ...style}}>
      <TextInput style={{...styles.textInput, color: error ? '#b00020' : '#000'}}
                 keyboardType={keyboardType} onChange={onChange}
                 value={value} multiline={multiline}
                 password={password} secureTextEntry={secureTextEntry}
                 placeholder={placeholder} textAlign={textAlign}>

      </TextInput>
   </View>
}

const styles = StyleSheet.create({
   container: {
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 12},
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
      fontFamily: 'iran-sans',
      backgroundColor: "#fff",
      padding: 15,
      borderRadius: 3,
   },
   textInput: {
      fontFamily: 'iran-sans',
      backgroundColor: "#fff",
   }
})

export default WhiteTextInput;