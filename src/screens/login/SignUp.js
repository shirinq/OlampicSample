import React, {useState, useEffect} from 'react';
import {Picker, StatusBar, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {whitTextInput} from '../../Theme';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from 'react-native-confirmation-code-field';
import {SIGN_IN_PAGE, strongRegex, TERMS_PAGE, usernameRegex} from '../../Const';
import Icon from 'react-native-vector-icons/Entypo';
import countries from '../../assets/country.json';


const steps = ['ثبت شماره', 'فعال سازی', 'ساخت رمز عبور', 'مشخصات'];

const SignUp = ({navigation}) => {
   const [phone, setPhone] = useState('');
   const [code, setCode] = useState('');
   const [password, setPassword] = useState();
   const [confPassword, setConfPassword] = useState();
   const [username, setUsername] = useState();
   const [country, setCountry] = useState('+98');
   const [confError, setConfError] = useState(false);
   const [passError, setPassError] = useState(false);
   const [usernameError, setUsernameError] = useState(false);
   const ref = useBlurOnFulfill({value: code, cellCount: 4});
   const [props, getCellOnLayoutHandler] = useClearByFocusCell({value: code, setValue: setCode});
   const [step, setStep] = useState(0);

   const handlePassChange = text => {
      setPassword(text);
      setPassError(!strongRegex.test(text) && text !== '');
   };

   const handleConfPassChange = text => {
      setConfPassword(text);
      setConfError(!strongRegex.test(text) || (text !== password));
   };

   const handleUsernameChange = text => {
      setUsername(text);
      setUsernameError(!usernameRegex.test(text) && (text !== ''));
   };

   return (
      <View style={styles.container}>
         <StatusBar barStyle="dark-content" backgroundColor="#fff"/>
         <View style={{alignItems: 'center', marginTop: 5}}>
            <View style={{width: 300, height: 70}}>
               <View style={{alignItems: 'center'}}>
                  <View style={{height: 1, backgroundColor: '#000000', width: 270, position: 'absolute', top: 15, zIndex: 10}}/>
               </View>
               <View style={{flexDirection: 'row', width: '100%', position: 'absolute', zIndex: 20}}>
                  {steps.map((label, i) =>
                     <View key={i} style={{alignItems: 'center', width: 75}}>
                        {i > step && i != step && /* Not selected */
                        <View style={{
                           alignItems: 'center',
                           justifyContent: 'center',
                           width: 50,
                           height: 30,
                           backgroundColor: '#fff',
                           borderWidth: 2,
                           borderColor: '#000000',
                           borderRadius: 15,
                           marginBottom: 10
                        }}>
                           <Text style={{fontSize: 15, color: '#000000'}}>{i + 1}</Text>
                        </View>
                        }
                        {i < step && /* Checked */
                        <View style={{
                           alignItems: 'center',
                           justifyContent: 'center',
                           width: 50,
                           height: 30,
                           backgroundColor: '#0faf9a',
                           borderWidth: 2,
                           borderColor: '#0faf9a',
                           borderRadius: 15,
                           marginBottom: 10
                        }}>
                           <Icon name="check" size={20} color="#fff"/>
                        </View>
                        }
                        {i == step && /* Selected */
                        <View style={{
                           alignItems: 'center',
                           justifyContent: 'center',
                           width: 50,
                           height: 30,
                           backgroundColor: '#000000',
                           borderWidth: 2,
                           borderColor: '#000000',
                           borderRadius: 15,
                           marginBottom: 10
                        }}>
                           <Text style={{fontSize: 13, color: '#ffffff'}}>{i + 1}</Text>
                        </View>
                        }
                        <Text style={{fontSize: 12}}>{label}</Text>
                     </View>
                  )}
               </View>
            </View>
         </View>

         <View style={{marginTop: 90}}>
            {step == 0 &&
            <View>
               <View style={styles.stepView}>
                  <Text style={styles.description}>برای ثبت نام در سامانه ابتدا شماره همراه خود را بدون کد کشور وارد کنید.</Text>
                  <TextInput
                     mode='outlined'
                     style={{marginBottom: 20}}
                     keyboardType={'numeric'}
                     label="موبایل"
                     left={<TextInput.Affix text='+98' textStyle={{color: '#000000'}}/>}
                     maxLength={10}
                     theme={whitTextInput}
                     placeholder='شماره موبایل بدون صفر وارد کنید'
                     value={phone}
                     onChangeText={text => setPhone(text)}/>
               </View>
               <TouchableOpacity style={styles.buttonNextStyle} onPress={() => {
                  navigation.navigate(TERMS_PAGE);
                  setStep(step + 1);
               }}>
                  <Icon name="chevron-right" size={20} color="#fff"/>
                  <Text style={styles.textStyle}>تایید</Text>
               </TouchableOpacity>
            </View>
            }
            {step == 1 &&
            <View>
               <View style={styles.stepView}>
                  <Text style={styles.description}>{`کد 4 رقمی ارسال شده به شماره ${phone} را وارد کنید.`}</Text>
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
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TouchableOpacity style={styles.buttonPreviousStyle} onPress={() => setStep(step - 1)}>
                     <Text style={styles.textStyle}>بازگشت</Text>
                     <Icon name="chevron-left" size={20} color="#fff"/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonNextStyle} onPress={() => setStep(step + 1)}>
                     <Icon name="chevron-right" size={20} color="#fff"/>
                     <Text style={styles.textStyle}>تایید</Text>
                  </TouchableOpacity>
               </View>
            </View>
            }
            {step == 2 &&
            <View>
               <View style={styles.stepView}>
                  <Text style={styles.description}>رمز عبور باید شامل حرف و عدد باشد!</Text>
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
               <TouchableOpacity style={styles.buttonNextStyle} onPress={() => setStep(step + 1)}>
                  <Icon name="chevron-right" size={20} color="#fff"/>
                  <Text style={styles.textStyle}>تایید</Text>
               </TouchableOpacity>
            </View>
            }
            {step == 3 &&
            <View>
               <View style={styles.stepView}>
                  <Text style={styles.description}>نام کاربری و کشور خود را انتخاب کنید.</Text>
                  <TextInput
                     mode='outlined'
                     style={{marginBottom: 20, textAlign: 'left'}}
                     label="نام کاربری"
                     error={usernameError}
                     theme={whitTextInput}
                     placeholder='نام کاربری'
                     value={username}
                     onChangeText={text => handleUsernameChange(text)}/>

                  <View style={styles.picker}>
                     <Picker
                        selectedValue={country}
                        onValueChange={itemValue => setCountry(itemValue)}>
                        {countries.map((item)=><Picker.Item label={item.name} value={item.dialCode}/>)}
                     </Picker>
                  </View>
               </View>
               <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                  <TouchableOpacity style={styles.buttonPreviousStyle} onPress={() => setStep(step - 1)}>
                     <Text style={styles.textStyle}>بازگشت</Text>
                     <Icon name="chevron-left" size={20} color="#fff"/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.buttonNextStyle} onPress={() => navigation.navigate(SIGN_IN_PAGE, {phone})}>
                     <Icon name="check" size={20} color="#fff"/>
                     <Text style={styles.textStyle}>اتمام</Text>
                  </TouchableOpacity>

               </View>
            </View>}
         </View>
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
      margin: 20,
      flexDirection: 'row'
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
   },
   buttonNextStyle: {
      backgroundColor: '#000',
      borderRadius: 0,
      borderBottomLeftRadius: 5,
      borderTopLeftRadius: 5,
      flexDirection: 'row-reverse',
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontSize: 20,
      marginTop: 50,
      width: 100
   },

   buttonPreviousStyle: {
      backgroundColor: '#000',
      borderRadius: 0,
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5,
      flexDirection: 'row-reverse',
      alignSelf: 'flex-end',
      alignItems: 'center',
      justifyContent: 'space-around',
      fontSize: 20,
      marginTop: 50,
      width: 100
   },
   textStyle: {
      color: '#fff',
      padding: 13,
      fontSize: 13
   },
   description: {
      marginBottom: 20,
      alignSelf: 'center',
      fontSize: 13,
      textAlign: 'center'
   },
   picker: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#1a1a1a',
      backgroundColor: '#f1f1f1',
      padding: 3
   }
});