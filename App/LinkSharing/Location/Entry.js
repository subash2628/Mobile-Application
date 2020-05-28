import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Alert } from 'react-native';
import Constants from 'expo-constants';
import * as Location from 'expo-location';

export default function() {

  const [address, setAddress] = useState(null);
    useEffect(()=>{
      //console.log('useEffect');
      (async()=>{
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          //setErrorMsg('Permission to access location was denied');
          Alert.alert('denied');
        }
    
        let location = await Location.getCurrentPositionAsync({});
        let address = await Location.reverseGeocodeAsync(location.coords);
        console.log('location file',address);
        //setLocation(location);
        setAddress(address);
      })();

  },[]);
        

//return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,color:'tomato'}}>Country: {address?address[0].country: 'loading'}</Text></View>);


  return (address?{
        postalCode: address[0].postalCode,
        country: address[0].country,
        city: address[0].city,
        street: address[0].street,
        region: address[0].region
    }:null
  );
  
}

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});



return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>{text}</Text>
    </View>
  );


   <View style={styles.container}>
        
      <Text style={styles.paragraph}>postalCode: {address[0].postalCode}</Text>
      <Text style={styles.paragraph}>country: {address[0].country}</Text>
      <Text style={styles.paragraph}>city: {address[0].city}</Text>
      <Text style={styles.paragraph}>street: {address[0].street}</Text>
      <Text style={styles.paragraph}>region: {address[0].region}</Text>
    </View>

<View style={styles.container}><Text style={styles.paragraph}>{text}</Text></View>
 */