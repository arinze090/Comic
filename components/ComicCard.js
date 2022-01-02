/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {windowWidth} from '../utilities/Dimension';

function ComicCard({item, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.text}>{item.name}</Text>
      <hr />
      <View style={styles.actions}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="star" size={20} />
          <Text>{item.rating} </Text>
        </View>
        <Ionicons name="bookmark" size={20} />
      </View>
    </TouchableOpacity>
  );
}

export default ComicCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: 156,
    height: 317,
    borderRadius: 5,
  },
  image: {
    width: 145,
    height: 224,
    marginBottom: 10,
  },
  text: {
    fontSize: 17,
    fontFamily: 'Bangers',
    color: 'white',
    lineHeight: 18,
  },
  actions: {
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
});
