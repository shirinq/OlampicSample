import React from 'react';
import {I18nManager, StyleSheet, TextInput, View} from 'react-native';
import {IconButton} from 'react-native-paper';

const WhiteTextInput = ({
                           placeholder, value, onChange, multiline = false,
                           style = {}, keyboardType, error, password = false,
                           secureTextEntry = false, textAlign = I18nManager.isRTL ? 'right' : 'left', icon,
                           ...props
                        }) => {


   return <View style={{...styles.container, ...style}}>
      <TextInput style={{...styles.textInput, color: error ? '#b00020' : '#000'}}
                 keyboardType={keyboardType} onChange={onChange}
                 value={value} multiline={multiline}
                 password={password} secureTextEntry={secureTextEntry}
                 placeholder={placeholder} textAlign={textAlign}/>
      <IconButton icon={icon} size={16} color={error ? '#b00020' : '#000'} disabled={true}/>
   </View>;
};

const styles = StyleSheet.create({
   container: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 12},
      shadowOpacity: 0.58,
      shadowRadius: 16.00,
      elevation: 24,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: I18nManager.isRTL ? 'flex-end' : 'flex-start',
      fontFamily: 'iran-sans',
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 3
   },
   textInput: {
      fontFamily: 'iran-sans',
      backgroundColor: '#fff'
   }
});

export default WhiteTextInput;