import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import {
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Text,
  Caption,
  Paragraph,
  Drawer,
  
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';

export default function DrawerContent(props) {
  //console.log('drawerContent Props: ',props);
  let index = props.state.index;
  const theme = useTheme();
  const [userName,setUserName] = React.useState('loading');
  (async()=> {let username = await SecureStore.getItemAsync('UserName');setUserName(username)})();
  //console.log('userName: ', SecureStore.getItemAsync('UserName'));

  return (
    <DrawerContentScrollView {...props}>
      <View
        style={
          styles.drawerContent
        }
      >
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <Title style={styles.title}>{userName}</Title>
          <Caption style={styles.caption}>Active</Caption>
          <View style={styles.row}>
            {/* <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                202
              </Paragraph>
              <Caption style={styles.caption}>Following</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                159
              </Paragraph>
              <Caption style={styles.caption}>Followers</Caption>
            </View> */}
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            focused={index===0}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Home"
            onPress={() => {props.navigation.navigate('Home')}}
          />
          <DrawerItem
          focused={index===1}
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="alpha-r-circle-outline" color={color} size={size} />
            )}
            label="Room Finder"
            onPress={() =>
                        //await SecureStore.setItemAsync('AccessApp', 'false')
                        props.navigation.navigate('Room Finder')}
          />
          <DrawerItem
          focused={index===2}
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label="Bookmarks"
            onPress={() => {}}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => props.toogleTheme()}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={theme.dark} />
              </View>
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
              <Text>RTL</Text>
              <View pointerEvents="none">
                <Switch value={false} />
              </View>
            </View>
          </TouchableRipple>
          </Drawer.Section>
          <Drawer.Section>
          <TouchableRipple onPress={async() => {
                                          await SecureStore.setItemAsync('AccessApp', 'false');
                                          console.log('logout');
                                          props.signIn(false);
                                    }}>
            <View style={styles.preference}>
              <Text>Log Out</Text>
              <View pointerEvents="none">
                <MaterialCommunityIcons
                  name="logout"
                  color={'red'}
                  size={20}
                />
              </View>
            </View>
          </TouchableRipple>
          </Drawer.Section>
          
        
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color:'green',
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
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});