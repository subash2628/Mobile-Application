import ApiFetch from './StackScreens/FetchingVideoScreen/FetchingFromYoutubeApi';
//export default ApiFetch;


import React from 'react';
import {Text,View} from 'react-native';


import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import VideoDetail from './StackScreens/VideoDetailScreen';


const Stack = createStackNavigator();

export default function MyStack() {
  return (
      <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home_Videos" 
                    component={ApiFetch}
                    options={ApiFetch.navigationOptions}
                />
                <Stack.Screen name="VideoDetail" component={VideoDetail} />
      
            </Stack.Navigator>
      </NavigationContainer>
    
  );
}


/*<Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */