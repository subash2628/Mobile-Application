import React from 'react';
import {Alert,Text,View,Button} from 'react-native';
import { SplashScreen } from 'expo';
import * as SecureStore from 'expo-secure-store';

import {
         Provider as PaperProvider,
        DarkTheme as PaperDarkTheme,
        DefaultTheme as PaperDefaultTheme
       } from 'react-native-paper';
import { 
          NavigationContainer ,
          DefaultTheme as NavigationDefaultTheme,
          DarkTheme as NavigationDarkTheme
        } from '@react-navigation/native';

const CombinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: { ...PaperDarkTheme.colors, ...NavigationDarkTheme.colors },
};

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: { ...PaperDefaultTheme.colors, ...NavigationDefaultTheme.colors },
};

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import AuthScreen from './AuthScreen';
import DrawerScreen from '../DrawerTabs/Entry';

export default class StackScreen extends React.Component{
    state={
        dark:false,
        isSignedIn:null,
    }

    async componentDidMount(){
        
        const Access = await SecureStore.getItemAsync('AccessApp');
        //console.log('Acess: ', Access);
        Access==='true' && this.setState({isSignedIn:true});
        //for(let i=0;i<5000;i++){};//delay time
        await SecureStore.getItemAsync('AccessApp');//only for time delay
        //await SecureStore.getItemAsync('AccessApp');
        SplashScreen.hide()
        //setTimeout(()=>SplashScreen.hide(),1000);
        
    }


    
    _changeTheme=()=>{
        this.setState((prevState)=>({dark:!prevState.dark}));
    }
    _signIn=(bool)=>{
        this.setState({isSignedIn:bool});
    }

    render(){
        let Theme = this.state.dark ?  CombinedDarkTheme : CombinedDefaultTheme;
        //let initialScreen = this.state.flag ? 'Drawer' : 'Auth';
        //console.log('initialScreen: ', initialScreen);
        return (
            
            <PaperProvider theme={Theme}>
                <NavigationContainer theme={Theme}>
                    {this.state.isSignedIn ?
                    (<Stack.Navigator headerMode='none'>
                        
                        
                        <Stack.Screen name="Drawer" component={DrawerScreen} initialParams={{toogleTheme:this._changeTheme,db:this.props.db,signIn:this._signIn}}/>
                    
                    </Stack.Navigator>):
                    
                    (<Stack.Navigator headerMode='none'>
                       
                        <Stack.Screen name="Auth" component={AuthScreen} initialParams={{db:this.props.db,signIn:this._signIn }}/>
                    
                    </Stack.Navigator>)
                    
                    }
                    
                    
                </NavigationContainer>
            </PaperProvider>
            //if not ready render empty screen
            // <View style={{flex:1,justifyContent:'center',alignItems:'center'}} ><Text style={{fontSize:20}}>flag is false</Text></View>
        );
    }
}

function Default(props){
    const screen = props.route.params.flag ? 'Drawer' : 'Auth';
    console.log('screen: ', screen);
    props.navigation.navigate(screen)
    SplashScreen.hide();
    return(
        <View style={{flex:1}}></View>
    );
}

{/* (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{color:'red'}}>cannot sign in</Text></View>) */}