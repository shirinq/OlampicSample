import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {buttonTheme, whitTextInput} from '../Theme';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import {strongRegex} from '../Const';


const SignUp = ({navigation}) => {
   const [phone, setPhone] = useState();
   const [code, setCode] = useState('');
   const [password, setPassword] = useState();
   const [confPassword, setConfPassword] = useState();
   const [confError, setConfError] = useState(false);
   const [passError, setPassError] = useState(false);
   const [step, setStep] = useState(1);

   const ref = useBlurOnFulfill({value: code, cellCount: 4});
   const [props, getCellOnLayoutHandler] = useClearByFocusCell({value: code, setValue: setCode});

   const handlePassChange = text => {
      setPassword(text);
      if (!strongRegex.test(text) && text !== '')
         setPassError(true);
      else setPassError(false);
   };

   const handleConfPassChange = text => {
      setConfPassword(text);
      if (!strongRegex.test(text) && text !== '' && confPassword !== password)
         setConfError(true);
      else setConfError(false);
   };

   return (
      <Card.Content>
         {step === 1 && <View>
            <Text style={{marginBottom: 20}}>برای ثبت نام در سامانه ابتدا شماره همراه خود را بدون کد کشور وارد کنید</Text>
            <TextInput
               mode='outlined'
               style={{marginBottom: 20, textAlign: 'left'}}
               keyboardType={'numeric'}
               label="موبایل"
               maxLength={10}
               right={<Text>+98</Text>}
               theme={whitTextInput}
               placeholder='شماره موبایل بدون صفر وارد کنید'
               value={phone}
               onChangeText={text => setPhone(text)}/>
            <Button disabled={!phone} theme={buttonTheme} icon='arrow-right' mode="contained" onPress={() => setStep(step + 1)}>
               بعدی
            </Button>
         </View>}
         {step === 2 && <View>
            <Text style={{marginBottom: 20}}>{`کد 4 رقمی ارسال شده به شماره ${phone} را وارد کنید`}</Text>
            <CodeField
               ref={ref}
               {...props}
               value={code}
               onChangeText={setCode}
               cellCount={4}
               rootStyle={styles.codeFieldRoot}
               keyboardType="number-pad"
               textContentType="oneTimeCode"
               renderCell={({index, symbol, isFocused}) => (
                  <Text
                     key={index}
                     style={[styles.cell, isFocused && styles.focusCell]}
                     onLayout={getCellOnLayoutHandler(index)}>
                     {symbol || (isFocused ? <Cursor/> : null)}
                  </Text>
               )}
            />
            <Button disabled={!code} theme={buttonTheme} icon='arrow-right' mode="contained" onPress={() => setStep(step + 1)}>
               بعدی
            </Button>
         </View>}
         {step === 3 && <View>
            <Text style={{marginBottom: 20}}>رمز عبور شامل حروف و عدد را وارد کنید</Text>
            <TextInput
               mode='outlined'
               style={{marginBottom: 20, textAlign: 'left'}}
               label="رمز عبور جدید"
               maxLength={6}
               error={passError}
               theme={whitTextInput}
               placeholder='رمز عبور جدید خود را وارد کنید'
               value={password}
               onChangeText={text => handlePassChange(text)}/>
            <TextInput
               mode='outlined'
               style={{marginBottom: 20, textAlign: 'left'}}
               label="تکرار رمز عبور"
               maxLength={6}
               error={confError}
               theme={whitTextInput}
               placeholder='رمز عبور جدید خود را مجددا وارد کنید'
               value={confPassword}
               onChangeText={text => handleConfPassChange(text)}/>
            <Button disabled={(!confError && passError)} theme={buttonTheme} icon='arrow-right' mode="contained" onPress={() => setStep(step + 1)}>
               بعدی
            </Button>
         </View>}
      </Card.Content>
   );
};
export default SignUp;

const styles = StyleSheet.create({
   codeFieldRoot: {marginTop: 20, marginBottom: 20, flexDirection: 'row-reverse'},
   cell: {
      width: 40,
      height: 40,
      lineHeight: 39,
      fontSize: 14,
      borderWidth: 2,
      borderColor: '#2b2b2b',
      borderRadius: 9,
      textAlign: 'center'
   },
   focusCell: {
      borderColor: '#000'
   }
});