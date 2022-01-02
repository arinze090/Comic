/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Image} from 'react-native';

function BannerSlider({arinze}) {
  return (
    <View>
      <Image
        source={arinze.image}
        style={{height: 150, width: 300, borderRadius: 10}}
      />
    </View>
  );
}

export default BannerSlider;
