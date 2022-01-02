/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {windowHeight, windowWidth} from '../utilities/Dimension';
import {dummydata} from '../const';
import {COLORS, FONTS, icons, SIZES} from '../const/index';

function DetailsItemScreen({navigation, route}) {
  const item = route.params;
  console.log(item);

  const Display = ({item}) => {
    return (
      <View style={{marginTop: 6, marginRight: 6}}>
        <Image
          style={{borderRadius: 5, height: 100, width: 140}}
          source={item.explore_image}
        />
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground
        style={styles.headerImage}
        source={item.image}></ImageBackground>

      <View style={styles.headerTitle}>
        <View style={styles.headerInfo}>
          <Image style={{width: 65, height: 60}} source={item.image} />
          <View>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </View>
        <View style={{marginTop: 10, flexDirection: 'row', left: 21}}>
          <Ionicons name="people" size={20} />
          <Text style={styles.subTitle}>22 people picked this topic </Text>
        </View>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
          }}>
          <Ionicons
            name="share-outline"
            size={20}
            color="#37074d"
            style={{left: 21, marginTop: 6}}
          />
          <Text
            style={{
              left: 25,
              marginTop: 10,
              fontSize: 12,
              lineHeight: 16,
              color: '#37074d',
            }}>
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DetailsItemScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerImage: {
    height: windowHeight / 2.8,
    width: windowWidth,
  },
  header: {
    width: 36,
    height: 36,
    left: 20,
    top: windowHeight / 12,
  },
  headerTitle: {
    width: windowWidth / 1.1,
    height: 181,
    backgroundColor: '#fff',
    marginLeft: windowWidth / 19.9,
    borderRadius: 10,
    marginTop: -100,
    marginBottom: 30,
    // borderBottomColor: 'grey',
    shadowOpacity: 0.8,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    color: '#000',
    fontWeight: 'bold',
    left: 21,
    marginTop: 10,
  },
  subTitle: {
    marginLeft: 6,
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 5,
  },
  textContent: {
    marginTop: 15,
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  headerInfo: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
  },
});
