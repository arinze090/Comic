/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
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

import {data, sliderData} from '../const/dummydata';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../components/BannerSlider';
import ComicCard from '../components/ComicCard';

const list = [
  {
    status: 'Browse',
  },
  {
    status: 'Popular',
  },
  {
    status: 'Recent',
  },
];

function HomeScreen({navigation}) {
  const [status, setStatus] = useState('Browse');
  const [dataList, setDataList] = useState(data);
  const setFilter = (st) => {
    // if (st !== 'Browse') {
    //   setDataList([...data.filter((e) => e.status === status)]);
    // } else {
    //   setDataList(data);
    // }
    setStatus(st);
  };

  const renderItem = ({item, index}) => {
    return <BannerSlider arinze={item} />;
  };
  return (
    <View style={styles.container}>
      {/* Tab Options */}
      <View style={styles.listTab}>
        {list.map((cur) => (
          <TouchableOpacity
            style={[
              styles.btnTab,
              status === cur.status && styles.btnTabActive,
            ]}
            onPress={() => setFilter(cur.status)}>
            <Text
              style={[
                styles.textTab,
                status === cur.status && styles.btnTabActive,
              ]}>
              {cur.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Carousel of Comics */}
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        data={sliderData}
        renderItem={renderItem}
        sliderWidth={windowWidth - 40}
        itemWidth={300}
        loop={true}
      />

      {/* Search Section */}
      <View style={styles.search}>
        <Ionicons
          name="search"
          color="black"
          size={20}
          style={{marginRight: 5}}
        />
        <TextInput placeholder="Search by Title" />
      </View>

      {/* Comic Data */}
      {/* <View>
        {data.map((cur) => (
          <ComicCard />
        ))}
      </View> */}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    marginTop: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  listTab: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  btnTab: {
    width: windowWidth / 3.5,
    flexDirection: 'row',
    borderColor: '#350472',
    borderWidth: 0.5,
    padding: 10,
    justifyContent: 'center',
  },
  btnTabActive: {
    backgroundColor: '#350472',
    color: 'white',
  },
  search: {
    flexDirection: 'row',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: windowWidth - 50,
    marginLeft: 25,
  },
});
