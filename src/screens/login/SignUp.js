import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {whitTextInput} from '../../Theme';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import {strongRegex} from '../../Const';
import {ProgressStep, ProgressSteps} from 'react-native-progress-steps';

const progressStepsStyle = {
   activeStepIconBorderColor: '#000000',
   activeLabelColor: '#000000',
   activeStepNumColor: '#000000',
   activeStepIconColor: '#ffffff',
   completedStepIconColor: '#000000',
   completedProgressBarColor: '#000000',
   completedCheckColor: '#ffffff'
};


const SignUp = ({navigation}) => {
   const [phone, setPhone] = useState('');
   const [code, setCode] = useState('');
   const [password, setPassword] = useState();
   const [confPassword, setConfPassword] = useState();
   const [confError, setConfError] = useState(false);
   const [passError, setPassError] = useState(false);
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
      <View style={styles.container}>
         <ProgressSteps {...progressStepsStyle}>
            <ProgressStep label="ثبت شماره">
               <View style={styles.stepView}>
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
               </View>
            </ProgressStep>
            <ProgressStep label="فعال سازی">
               <View style={styles.stepView}>
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
               </View>
            </ProgressStep>
            <ProgressStep label="ساخت رمز عبور">
               <View style={styles.stepView}>
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
               </View>
            </ProgressStep>
            <ProgressStep label="مشخصات">
               <View style={styles.stepView}>
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
               </View>
            </ProgressStep>
         </ProgressSteps>
      </View>
   );
};
export default SignUp;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff'
   },
   stepView: {
      justifyContent: 'center',
      padding: 20
   },
   codeFieldRoot: {
      marginTop: 20,
      marginBottom: 20,
      flexDirection: 'row-reverse'
   },
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
   backButtonStyle: {
      borderRadius: 0,
      borderTopEndRadius: 20,
      borderBottomEndRadius: 20,
      flex: 1,
      borderWidth: 1,
      borderColor: '#000000',
      color: '#000',
      backgroundColor: '#fff'
   },
   nextButtonStyle: {
      borderRadius: 0,
      borderTopStartRadius: 20,
      borderBottomStartRadius: 20,
      flex: 1
   },
   focusCell: {
      borderColor: '#000'
   }
});