import React, { Component } from 'react';
import { View, Text ,StyleSheet} from 'react-native';
import {YellowBox} from 'react-native';
import Constants from 'expo-constants';


//import Form from './Form';
import Form2 from './Form_2';
import showData from './showData';

export default class Entry extends Component {
    state={

    }

    componentDidMount(){
        //console.log('hello');
    this._hideYellowBox();
    }
    _hideYellowBox=()=>{
        YellowBox.ignoreWarnings(['Remote debugger is in a background tab which may cause apps to perform slowly. Fix this by foregrounding the tab (or opening it in a separate window).','Debugger and device times have drifted by more than 60s. Please correct this by running adb shell "date `date +%m%d%H%M%Y.%S`" on your debugger machine.']);
    }

  render() {

    return (
        <View style={styles.container}>
            <showData/>
        </View>
        
    );
  }
}

//style={{flex:1,justifyContent:'center',alignItems:'center'}}

const styles = StyleSheet.create({
    container:{
        flex:1,
        //marginTop:Constants.statusBarHeight,
        //backgroundColor:'tomato',
    }
});