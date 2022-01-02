/* eslint-disable prettier/prettier */
import * as React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

export function DrawerContent({navigation, ...props}) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View>
              <Avatar.Image
                source={require('../assets/users/arinze.jpg')}
                size={100}
              />
            </View>
            <View style={{right: 16}}>
              <Title style={styles.title}>Adewumi Demilade</Title>
            </View>
            <View>
              <TouchableOpacity>
                <Text>View Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color}) => (
              <Ionicons name="notifications-outline" color={color} size={20} />
            )}
            label="Notifications"
            onPress={() => {}}
          />

          <DrawerItem
            icon={({color}) => (
              <Ionicons name="settings-outline" color={color} size={20} />
            )}
            label="Account/Settings"
            onPress={() => {}}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={() => navigation.navigate('Landing')}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginTop: -50,
    backgroundColor: '#F9824F',
  },
  userInfoSection: {
    paddingLeft: 20,
    left: 60,
    marginTop: 60,
    marginBottom: 10,
    // backgroundColor: '#F9824F'
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: '#fff',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 5,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
