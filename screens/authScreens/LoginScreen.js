/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
// import {COLORS, FONTS, icons, SIZES} from '../const/index';
import {windowHeight, windowWidth} from '../../utilities/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email address')
    .required('Email Address is required'),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required !'),
});

function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require('../../assets/Comicrunes.png')}
        />
      </View>

      <View>
        <Text style={styles.text}>Email Address</Text>
        <View style={styles.action}>
          <FormInput
            placeholderText="Email"
            iconType="user"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Feather
            name="check-circle"
            size={15}
            color="green"
            style={styles.auth}
          />
        </View>
      </View>

      <View>
        <Text style={styles.text}>Password</Text>
        <View style={styles.action}>
          <FormInput
            placeholderText="Password"
            iconType="lock"
            secureTextEntry={true}
          />
          <Feather name="eye-off" size={15} color="black" style={styles.auth} />
        </View>
      </View>
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.color_textPrivate}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={{padding: 25}}>
        <FormButton
          buttonTitle="Login to your Account"
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
  image: {
    width: '60%',
    height: 190,
    resizeMode: 'contain',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: windowWidth / 5,
  },
  text: {
    marginBottom: 3,
    fontSize: 16,
    fontWeight: '600',
  },
  header: {
    fontSize: 28,
    marginBottom: 3,
    marginTop: windowHeight / 500,
    // marginRight: 91,
    color: '#440361',
    fontWeight: '500',
    alignItems: 'center',
    right: 71,
  },
  subTitle: {
    fontWeight: '400',
    fontStyle: 'normal',
    fontSize: 14,
    marginBottom: 20,
    color: '#69676A',
    right: 11,
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    //   marginVertical: 35,
    marginLeft: 200,
    marginTop: -6,
    fontSize: 12,
    marginBottom: 70,
  },
  action: {
    flexDirection: 'row',
    paddingBottom: 5,
  },
  auth: {
    marginTop: 25,
    alignItems: 'center',
    position: 'absolute',
    left: '90%',
    right: '-28%',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
    marginTop: 10,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#7207a1',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    color: 'grey',
  },
});
