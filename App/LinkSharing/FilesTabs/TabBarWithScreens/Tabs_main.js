import React, { Component } from 'react';
import {View,ActivityIndicator,StatusBar} from 'react-native';
import { Container, Tab, Tabs, TabHeading, Icon, Text} from 'native-base';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';


import Head from './HeaderForTab';
import TabsForProjectScreen from './TabsForProjectScreen';


class TabBar extends Component {
 render(){
        

return(

                <ButtomTabs
                                    db = {Props.db}
                                    Links={State.Links}
                                    LoadingDatabase={State.isLoading}
                                    
                                />);
       /* return ( !State.isLoading ?
            (<Container>
                

                <Head  />
                


                <TabsForProjectScreen 
                    db={Props.db}
                    LoadingForRefreshControl={State.isLoading}
                    Links={State.Links}
                    VisibleOverlay={State.VisibleOverlay}
                    Refresh={()=> this._refresh()}             
                    HandleOverlay={(bool)=> this._handleOverlay(bool)}
                    
                />
            </Container> ): (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                <Text>Loading Remote Database...</Text>
                                <ActivityIndicator size="large" color="#00ff00" />
                            </View>)
        );
        */
  //<Text>Camera</Text>
    //return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><ActivityIndicator size="large" color="#00ff00" /></View>);
    }
}


//ToggleOverlay={()=> this._handleOverlay(true)}



export default TabBar;
/*rules

this tab gives data to every child component
overlay is in same scope to tabs
*/