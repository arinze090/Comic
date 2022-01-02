/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
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
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {windowHeight, windowWidth} from '../utilities/Dimension';
import {dummydata} from '../const';
import {COLORS, FONTS, icons, SIZES} from '../const/index';
import DetailsCard from '../components/DetailsCard';

function DetailsScreen({navigation, route}) {
  const Tab = createMaterialTopTabNavigator();
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

  function Reviews() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>kshdbnjkkkkkkkkkkkkkkkkkkkkkkkkkkkkCH</Text>
      </View>
    );
  }

  function Contents() {
    return (
      <ScrollView>
        <View
          style={{
            marginTop: 20,
            flexWrap: 'wrap',
            display: 'flex',
            flexDirection: 'row',
          }}>
          {item.more.map((me, index) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('DetailsItem', me)}
              key={index}
              style={styles.card}>
              <ImageBackground source={me.image} style={styles.imageback}>
                <View style={styles.favorite}>
                  <Ionicons
                    name="heart-outline"
                    size={20}
                    color={COLORS.black}
                  />
                </View>
              </ImageBackground>
              <View style={styles.cardDetails}>
                <Text style={styles.details}>{me.name}</Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.ratingss}>
                    <Text style={styles.rating}>{me.rating} / 5</Text>
                    <Ionicons name="star" size={10} color="gold" />
                  </View>
                  <Text style={styles.price}>{me.prices}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <ImageBackground style={styles.headerImage} source={item.image}>
        <View style={styles.header}>
          <Ionicons
            name="chevron-back-outline"
            size={30}
            color={COLORS.black}
            onPress={navigation.goBack}
          />
        </View>
      </ImageBackground>

      <View style={styles.headerTitle}>
        <View style={styles.headerInfo}>
          <Image
            style={{width: 65, height: 60, marginLeft: 10, borderRadius: 7}}
            source={item.image}
          />
          <View style={styles.details}>
            <Text style={styles.title}>{item.name}</Text>
            <View style={styles.description}>
              <Text style={styles.ratings}>{item.rating} </Text>
              <Ionicons name="star" size={20} color="gold" />
            </View>
          </View>
        </View>
        <View style={styles.locations}>
          <Ionicons name="location" size={20} color="red" />
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>

      {/* Switch  [Contents & Reviews ] */}
      <NavigationContainer independent={true}>
        <Tab.Navigator
          tabBarOptions={{
            indicatorStyle: {
              borderBottomColor: '#350472',
              borderBottomWidth: 2,
            },
          }}>
          <Tab.Screen name="Menu Items" component={Contents} />
          <Tab.Screen name="Reviews" component={Reviews} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

export default DetailsScreen;

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
 
  title: {
    fontSize: 20,
    lineHeight: 24,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  ratings: {
    color: COLORS.black,
    fontWeight: 'bold',
    fontSize: SIZES.h3,
  },
  description: {
    display: 'flex',
    flexDirection: 'row',
  },
  locations: {
    marginLeft: 20,
    marginTop: 60,
    flexDirection: 'row',
  },
  location: {
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: 2,
  },
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    height: 226,
    width: '40%',
    elevation: 15,
    overflow: 'hidden',
    margin: 5,
    marginLeft: 20,
  },
  imageback: {
    width: '100%',
    height: 170,
    marginRight: 8,
    borderRadius: 10,
    backgroundColor: '#fff',
    opacity: 1,
    resizeMode: 'contain',
  },
  favorite: {
    width: 36,
    height: 36,
    left: 119,
    top: windowHeight / 63,
  },
  cardDetails: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  details: {
    color: COLORS.white,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  ratingss: {
    marginRight: 20,
    flexDirection: 'row',
  },
  rating: {
    display: 'flex',
    color: COLORS.white,
    fontSize: 10,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 10,
    color: COLORS.white,
    marginRight: 10,
  },
});
