import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../const/index';
import {windowHeight, windowWidth} from '../utilities/Dimension';
import Ionicons from 'react-native-vector-icons/Ionicons';

function ResturantCard({containerStyle, imageStyle, item, onPress}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <ImageBackground source={item.image} style={styles.imageback}>
        <View style={styles.favorite}>
          <Ionicons name="heart-outline" size={25} color={COLORS.black} />
        </View>
      </ImageBackground>
      <View style={styles.cardDetails}>
        <Text style={styles.details}>{item.name}</Text>
        <View style={styles.ratings}>
          <Text style={styles.rating}>{item.rating} / 5</Text>
          <Ionicons name="star" size={20} color="gold" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default ResturantCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    height: 226,
    width: '90%',
    elevation: 15,
    overflow: 'hidden',
    marginLeft: 20,
    marginTop: 20,
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
    left: 290,
    top: windowHeight / 43,
  },
  cardDetails: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  details: {
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  ratings: {
    marginRight: 20,
    flexDirection: 'row',
  },
  rating: {
    display: 'flex',
    color: COLORS.white,
    fontSize: SIZES.h3,
    marginRight: 10,
    fontWeight: 'bold',
  },
});


