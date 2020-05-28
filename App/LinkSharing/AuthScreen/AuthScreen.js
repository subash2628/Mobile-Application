import * as SecureStore from 'expo-secure-store';

import React from 'react';
import {View,Text,StyleSheet , TouchableOpacity,ToastAndroid, Alert} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import { Button } from 'react-native-elements';
import { SplashScreen } from 'expo';
import { useIsFocused } from '@react-navigation/native';
//import HomeScreenWithTabs from '../FilesTabs/BottomTabs/Entry';
//import Drawer from '../DrawerTabs/Entry';
//import { SplashScreen } from 'expo';

import { Tile ,Caption,Title,ImageBackground,Spinner} from '@shoutem/ui';

class Auth extends React.Component{
    state={
        //GiveAccess:null,
        username:'',
        password:'',
        buttonLoading:false,
        //flag:true,
    }
    // componentDidMount(){
    //   SplashScreen.hide();
    // }
    // async componentDidMount(){//username and password also saving offline  
    //     console.log('component did mount');   
    //     const Access = await SecureStore.getItemAsync('AccessApp');
    //     (Access==='true' ? this.setState({GiveAccess:true})  : null);
    //     SplashScreen.hide();
    // }
    // _checkOffline= async()=>{
    //   const Access = await SecureStore.getItemAsync('AccessApp');
    //   let GiveAccess = Access==='true' ? true : false; 
    //   this.setState({GiveAccess});
    // }

    _handleSubmit= ()=>{
      const db = this.props.route.params.db;
      //console.log('AuthScreen: ',db);
      this.setState({buttonLoading:true});
      
      db.collection("Users").doc(this.state.username).set(
        {
            Name: this.state.username,
            Password :  this.state.password
        }
    ).then(async()=>{
       this.setState({GiveAccess:true, buttonLoading:false});
       await SecureStore.setItemAsync('AccessApp', 'true')
       await SecureStore.setItemAsync('UserName', this.state.username)
       
       this.setState({username:'',password:''});
       ToastAndroid.show("Login Success!", ToastAndroid.SHORT);
       this.props.route.params.signIn(true);

    })
     .catch((error)=>{
       console.log('Error: ',error);
     })}

    // _check = ()=>{
    //   let logOut = null;
    //   if(this.state.flag) {
    //     logOut = this.props.route.params ? this.props.route.params.logOut : false;
    //     logOut && this.setState({GiveAccess:false,flag:0});
    //   }
    // }
      
    
    render() {
      //this._check();
      let Username = this.state.username;
      let Password = this.state.password;
      //console.log('giveAccess: ',this.state.GiveAccess);
      //const isFocused = useIsFocused();
      //console.log(isFocused);
      //this._checkOffline();
      

      //this.state.GiveAccess===true && this.props.navigation.navigate('Drawer');

        return(
        
            <Container>
                      
                      <ImageBackground
                        styleName="large"
                        source={{ uri: 'https://shoutem.github.io/img/ui-toolkit/examples/image-4.png' }}
                      >
                        <Tile>
                          <Title styleName="md-gutter-bottom">WELCOME TO THIS APP</Title>
                          <Caption>This is SignUp Page</Caption>
                        </Tile>
                      </ImageBackground>
            <Content>
              <Form>
                <Item fixedLabel>
                  <Label>Username</Label>
                  <Input 
                        value={Username}
                        autoCompleteType='username'
                        onChangeText={(username)=>this.setState({username})}
                  />
                </Item>
                <Item fixedLabel last>
                  <Label>Password</Label>
                  <Input 
                        secureTextEntry={true}
                        value={Password}
                        //keyboardType='visible-password'        
                        onChangeText={(password)=>this.setState({password})}
                  />
                </Item>
              </Form>
          
              <Button
                title="Sign Up"
                disabled={!(Username&&Password&&Username.length>=3&&Password.length>=4)}
                onPress={this._handleSubmit}
                containerStyle={{marginTop:25,alignItems:'center'}}
                loading={this.state.buttonLoading}

            />
            </Content>
          </Container>
        ); 
      }
    }
    
export default Auth;

    const styles = StyleSheet.create({
      container: {
        justifyContent: 'center',
        marginTop: 50,
        padding: 20,
        backgroundColor: '#ffffff',
      },
    });



/*
:(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Spinner /></View>)
*/