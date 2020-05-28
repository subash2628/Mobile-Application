
import React from 'react';
import { Button, Overlay } from 'react-native-elements';
import {Text} from 'native-base';
import {View} from 'react-native';

import Location from '../../Location/Entry';


export default function({visible, handleOverlay}){
    //const [location, setLocation] = React.useState(null);
    let location  = Location();
    //console.log('locationOverlay->location',location);
    //setLocation(adress);

    return(
        <Overlay isVisible={visible} onBackdropPress={()=>handleOverlay({Action : 'LocationFalse'})}>
                <View style={{flex:1}}>
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>Current Location</Text>
                    </View>
                    <View style={{flex:2, justifyContent:'center',alignItems:'center'}}>
                        {location?
                            (<View style={{paddingTop: 20}}>
                                
                                <Text><Text style={{fontWeight:'bold'}}>PostalCode: </Text>{location.postalCode}</Text>
                                <Text><Text style={{fontWeight:'bold'}}>Country: </Text>{location.country}</Text>
                                <Text><Text style={{fontWeight:'bold'}}>City: </Text>{location.city}</Text>
                                <Text><Text style={{fontWeight:'bold'}}>Street: </Text>{location.street}</Text>
                                <Text><Text style={{fontWeight:'bold'}}>Region: </Text>{location.region}</Text>
                            </View>):(
                                <View><Text style={{fontStyle:'italic'}}>Loading Location...</Text></View>
                            )
                        }
                        
                        
                    </View>
                    <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                        <View style={{marginBottom: 20}}>
                            <Text note style={{fontStyle:'italic'}}>Developer: <Text style={{color:'blue',fontWeight:'bold'}}>subash sharma</Text></Text>
                        </View>
                        
                    </View>
                </View>
            </Overlay>
            
    );
}

/*
<Overlay isVisible={visible} onBackdropPress={()=>handleOverlay(false)}>
                <View style={{flex:1}}>
                    <View style={{flex:1,backgroundColor: 'green'}}>
                        <View style={{paddingTop: 20}}>
                            <Text>Hello from first view!</Text>
                        </View>
                        
                    </View>
                    <View style={{flex:1,backgroundColor: 'yellow'}}>
                        <View style={{paddingTop: 20}}>
                            <Text>About Developer</Text>
                        </View>
                        
                    </View>
                </View>
            </Overlay>
*/