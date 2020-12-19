import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Card, Text, TextInput} from 'react-native-paper';
import {buttonTheme, whitTextInput} from '../Theme';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import {strongRegex} from '../Const';


const SignUp = ({navigation, setSignIn}) => {
   const [phone, setPhone] = useState('');
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
      setPassError(!strongRegex.test(text) && text !== '');
   };

   const handleConfPassChange = text => {
      setConfPassword(text);
      setConfError(!strongRegex.test(text) || (text !== password));
   };

   return (
      <Card.Content>
         {step === 1 && <View>
            <Text style={{marginBottom: 20}}>برای ثبت نام در سامانه ابتدا شماره همراه خود را بدون کد کشور وارد کنید</Text>
            <TextInput
               mode='outlined'
               style={{marginBottom: 20}}
               keyboardType={'numeric'}
               label="موبایل"
               right={<Text style={{color: '#000'}}>+98</Text>}
               maxLength={10}
               theme={whitTextInput}
               placeholder='شماره موبایل بدون صفر وارد کنید'
               value={phone}
               onChangeText={text => setPhone(text)}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
               <Button disabled={phone.length !== 10} theme={buttonTheme} style={{flex: 2}} icon='arrow-right' mode="contained" onPress={() => setStep(step + 1)}>
                  بعدی
               </Button>
               <View style={{flex: 1}}></View>
               <Button theme={buttonTheme} style={{flex: 2}} icon={{source: 'arrow-left', direction: 'ltr'}} mode="contained" onPress={() => setSignIn(true)}>
                  بازگشت
               </Button>
            </View>
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
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
               <Button disabled={code.length !== 4} theme={buttonTheme} style={{flex: 2}} icon='arrow-right' mode="contained" onPress={() => setStep(step + 1)}>
                  بعدی
               </Button>
               <View style={{flex: 1}}></View>
               <Button theme={buttonTheme} style={{flex: 2}} icon={{source: 'arrow-left', direction: 'ltr'}} mode="contained" onPress={() => setStep(step - 1)}>
                  بازگشت
               </Button>
            </View>
         </View>}
         {step === 3 && <View>
            <Text style={{marginBottom: 20}}>رمز عبور شامل حروف و عدد را وارد کنید</Text>
            <TextInput
               mode='outlined'
               style={{marginBottom: 20, textAlign: 'left'}}
               label="رمز عبور جدید"
               error={passError}
               theme={whitTextInput}
               placeholder='رمز عبور جدید خود را وارد کنید'
               value={password}
               onChangeText={text => handlePassChange(text)}/>
            <TextInput
               mode='outlined'
               style={{marginBottom: 20, textAlign: 'left'}}
               label="تکرار رمز عبور"
               error={confError}
               theme={whitTextInput}
               placeholder='رمز عبور جدید خود را مجددا وارد کنید'
               value={confPassword}
               onChangeText={text => handleConfPassChange(text)}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
               <Button disabled={(confError || passError) || (!confPassword || !password)} theme={buttonTheme} style={{flex: 2}} icon='arrow-right' mode="contained"
                       onPress={() => setStep(step + 1)}>
                  بعدی
               </Button>
               {/*<View style={{flex:1}}></View>
                <Button theme={buttonTheme} style={{flex:2}} icon={{ source: "arrow-left", direction: 'ltr' }} mode="contained" onPress={() => setStep(step - 1)}>
                بازگشت
                </Button>*/}
            </View>
         </View>}

         {step === 4 && <View>
            <Text style={{marginBottom: 20}}>نام کاربری و کشور مودر نظر خود را انتخاب کنید</Text>
            <TextInput
               mode='outlined'
               style={{marginBottom: 20, textAlign: 'left'}}
               label="کشور"
               autoComplete="off"
               error={passError}
               theme={whitTextInput}
               placeholder='رمز عبور جدید خود را وارد کنید'
               value={password}
               onChangeText={text => handlePassChange(text)}/>
            <TextInput
               mode='outlined'
               style={{marginBottom: 20, textAlign: 'left'}}
               label="تکرار رمز عبور"
               error={confError}
               theme={whitTextInput}
               placeholder='رمز عبور جدید خود را مجددا وارد کنید'
               value={confPassword}
               onChangeText={text => handleConfPassChange(text)}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
               <Button disabled={(confError || passError) || (!confPassword || !password)} theme={buttonTheme} style={{flex: 2}} icon='arrow-right' mode="contained"
                       onPress={() => setStep(step + 1)}>
                  بعدی
               </Button>
               {/*<View style={{flex:1}}></View>
                <Button theme={buttonTheme} style={{flex:2}} icon={{ source: "arrow-left", direction: 'ltr' }} mode="contained" onPress={() => setStep(step - 1)}>
                بازگشت
                </Button>*/}
            </View>
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
      marginBottom: 20,
      textAlign: 'center'
   },
   focusCell: {
      borderColor: '#000'
   }
});