import {NavigationContainer} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import dummydata from '../const/dummydata';
import {FONTS, SIZES, COLORS, icons, dummyData} from '../const/index';
import HorizontalCard from './HorizontalCard';
import {useNavigation} from '@react-navigation/native';
import ResturantCard from './ResturantCard';

function Deals() {
  const navigation = useNavigation();

  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [selectedMenuType, setSelectedMenuType] = useState(1);
  const [popular, setPopular] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [menuList, setMenuList] = useState([]);

  const [showFilterModal, setShowFilterModal] = useState(false);

  useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  // Handler

  function handleChangeCategory(categoryId, menuTypeId) {
    // Retrieve the popular menu
    let selectedPopular = dummydata.menu.find((a) => a.name == 'Popular');

    // Retrieve the recommended menu
    let selectedRecommend = dummydata.menu.find((a) => a.name == 'Recommended');

    // Find the menu based on the menuTypeId
    let selectedMenu = dummydata.menu.find((a) => a.id == menuTypeId);

    // Set the popular menu based on the categoryId
    setPopular(
      selectedPopular?.list.filter((a) => a.categories.includes(categoryId)),
    );

    // Set the recommended menu based on the categoryId
    setRecommends(
      selectedRecommend?.list.filter((a) => a.categories.includes(categoryId)),
    );

    // Set the menu based on the categoryId
    setMenuList(
      selectedMenu?.list.filter((a) => a.categories.includes(categoryId)),
    );
  }

  function renderFoodCategories() {
    return (
      <FlatList
        data={dummydata.categories}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              height: 55,
              marginTop: 10,
              marginBottom: 10,
              marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index == dummydata.categories.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
              backgroundColor:
                selectedCategoryId == item.id ? COLORS.primary : COLORS.grey,
              borderColor:
                selectedCategoryId == item.id
                  ? COLORS.transparent
                  : COLORS.primary,
              borderWidth: selectedCategoryId ? 1 : '',
              borderStyle: selectedCategoryId ? 'solid' : '',
            }}
            onPress={() => {
              setSelectedCategoryId(item.id);
              handleChangeCategory(item.id, selectedMenuType);
            }}>
            <Image
              source={item.icon}
              style={{
                marginTop: 5,
                height: 50,
                width: 50,
              }}
            />

            <Text
              style={{
                alignSelf: 'center',
                marginRight: SIZES.base,
                color:
                  selectedCategoryId == item.id ? COLORS.white : COLORS.black,
                ...FONTS.h4,
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  return (
    <View>
      <View>
        {/* Food Categories */}
        {renderFoodCategories()}
      </View>

      {/* List */}
      <FlatList
        data={menuList}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Menu Type */}
            {/* {renderMenuTypes()} */}
          </View>
        }
        renderItem={({item, index}) => {
          return (
            <ResturantCard
              containerStyle={{
                alignItems: 'center',
                marginHorizontal: SIZES.padding,
                marginBottom: SIZES.radius,
                width: 333,
                height: 235,
                marginTop: 10,
              }}
              imageStyle={{
                marginTop: 20,
                height: 110,
                width: 110,
              }}
              item={item}
              key={index}
              onPress={() => navigation.navigate('Details', item)}
            />
          );
        }}
        ListFooterComponent={<View style={{height: 200}} />}
      />
    </View>
  );
}

export default Deals;

const styles = StyleSheet.create({
  categoryImage: {
    height: 90,
    width: 140,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginRight: 10,
  },
});
