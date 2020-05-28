
import React from 'react';
//import { YellowBox } from 'react-native';

import Home from './HomeStackScreen';
import Details from './DetailsStackScreen';

//import { NavigationContainer } from '@react-navigation/native'; //must be removed while integrating
import { createStackNavigator } from '@react-navigation/stack';

//import Database from '../../Functions/GetDB';

const Stack = createStackNavigator();

function MyStack(props) {
    // YellowBox.ignoreWarnings([
    //     'Debugger and device times have drifted by more than 60s. Please correct this by running adb shell "date `date +%m%d%H%M%Y.%S`" on your debugger machine.',
    //     'Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).',
    //     'Setting a timer for a long period of time, i.e. multiple minutes, is a performance and correctness issue on Android as it keeps the timer module awake, and timers can only be called when the app is in the foreground. See https://github.com/facebook/react-native/issues/12981 for more info.(Saw setTimeout with duration 548502ms)',
    //   ]);
      
      const db = props.route.params.db;
      //console.log('stack: ',db);


  return (
      
        <Stack.Navigator
            initialRouteName='Home'
            headerMode='none'
        >
        <Stack.Screen name="Home" component={Home} initialParams={{db:db}}/>
        <Stack.Screen name="Details" component={Details} initialParams={{db:db}}/>
        </Stack.Navigator>
    
  );
}

export default MyStack;