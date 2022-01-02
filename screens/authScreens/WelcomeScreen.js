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
import {windowHeight, windowWidth} from '../../utilities/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FormButton from '../../components/FormButton';

function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/Comicrunes.png')}
          style={styles.logo}
        />
      </View>
      <View style={styles.register}>
        <FormButton
          buttonTitle="Create Account"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
      <View style={styles.login}>
        <FormButton
          buttonTitle="Sign In"
          onPress={navigation.navigate('Login')}
        />
      </View>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    display: 'flex',
    marginBottom: 130,
  },
  logo: {
    width: '60%',
    height: 190,
    resizeMode: 'contain',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: windowWidth / 5,
  },
  register: {
    marginBottom: 30,
  },
});
