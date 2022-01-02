import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {windowHeight, windowWidth} from '../utilities/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

function SearchBar() {
  return (
    <View style={{marginTop: 15, flexDirection: 'row'}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInputContainer: {
            backgroundColor: 'white',
          },
          textInput: {
            height: 38,
            color: '#000',
            fontSize: 16,
            marginTop: 5,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10, marginTop: 10}}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: 'row',
              marginRight: 8,
              borderRadius: 5,
              alignItems: 'center',
              marginLeft: 5
            }}>
            <AntDesign name="filter" size={24} />
          </View>
        )}
      />
    </View>
  );
}

export default SearchBar;
