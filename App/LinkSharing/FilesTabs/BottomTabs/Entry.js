
import * as React from 'react';
import { Text, View ,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import HomeScreen from '../HomePage/Entry';
import VideosScreen from '../YouTubeVideos/Entry';
import BooksScreen from '../GoogleBooks/Entry';
import WikiSearch from '../Wikipedia/Entry';
//import GoogleSearch from '../GoogleSearch/Entry';
import Journals from '../springerJournals/Entry';

const Tab = createBottomTabNavigator();

export default function App(props) {
  //const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  //console.log('db: ',props.route.params.db);
  return (
    
    
      <Tab.Navigator
        initialRouteName="Videos"
        
        screenOptions={({ route }) => ({

            tabBarIcon: ({ focused, color, size }) => {
            let iconName;

                if (route.name === 'Files') {
                    iconName = focused
                    ? 'md-apps'
                    : 'md-apps';
                } else if (route.name === 'Videos') {
                    iconName = focused ? 'md-videocam' : 'md-videocam';
                } else if (route.name === 'Search') {
                    iconName = focused ? 'md-search' : 'md-search';
                } else if (route.name === 'Books') {
                    iconName = focused ? 'md-bookmarks' : 'md-bookmarks';
                } else if (route.name === 'Journals') {
                  iconName = focused ? 'logo-buffer' : 'logo-buffer';
              }
                
                

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
            keyboardHidesTabBar: true,
            //tabStyle:{marginBottom: -120, backgroundColor:'red',height:50},
            //labelStyle:{paddingBottom:0,margin:0,backgroundColor:'blue'},
            style:{marginBottom: windowHeight===640? -40:0 }
        }}
        >

        <Tab.Screen name="Files" component={HomeScreen} initialParams={{ db:props.route.params.db,drawerNavigation: props.navigation }}/>
        <Tab.Screen name="Books" component={BooksScreen} /> 
        <Tab.Screen name="Videos" component={VideosScreen} initialParams={{ db:props.route.params.db}}/>
        <Tab.Screen name="Journals" component={Journals} />
        <Tab.Screen name="Search" component={WikiSearch} />
        
        
      </Tab.Navigator>
    
     
  );
}