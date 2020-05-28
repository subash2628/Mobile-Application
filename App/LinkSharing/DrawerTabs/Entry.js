import React from 'react';
import {Alert,Text,View,Button} from 'react-native';
import { SplashScreen } from 'expo';

import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

import HomeScreen from '../FilesTabs/BottomTabs/Entry';
import Room_Finder from '../../Room Finder/showData';

// function NotoficationScreen({navigation,route}) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Notofications Screen</Text>
//     </View>
//   );
// }

function DrawerScreen(props){
      //SplashScreen.hide();
      const Route = props.route;
      const Navigation = props.navigation;
    return (
          <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <DrawerContent {...props} toogleTheme={Route.params.toogleTheme} stackNavigation={Navigation} signIn={Route.params.signIn}/>}>
            <Drawer.Screen name="Home" component={HomeScreen} initialParams={{db:Route.params.db}}/>
            <Drawer.Screen name="Room Finder" component={Room_Finder} initialParams={{}}/>
          </Drawer.Navigator>
    );
  

}

export default DrawerScreen;
