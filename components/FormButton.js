/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utilities/Dimension';
import {COLORS, FONTS, icons, SIZES} from '../const/index';

const FormButton = ({buttonTitle, onPress, ...rest}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={onPress}
      {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: windowWidth / 1.15,
    height: windowHeight / 15,
    backgroundColor: COLORS.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
  },
});
