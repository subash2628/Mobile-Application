
//used by Bottom Tabs Folder



import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

import React from 'react';
import { StyleSheet,ToastAndroid ,TouchableOpacity,Text} from 'react-native';

import * as Updates from 'expo-updates';


export default function({handleOverlay,drawerNavigation,enableLocation}){   
    return(
        <Header hasTabs >
            <Left>
                <Button transparent onPress={()=>{drawerNavigation.toggleDrawer()}}>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>Home</Title>
            </Body>
            <Right>
                <Button transparent onPress={()=>{ handleOverlay({Action: 'AddTrue'})} }>
                    <Icon name='add' />
                </Button>
                <Button transparent onPress={()=> {enableLocation();handleOverlay({Action: 'LocationTrue'})}}>
                    <Text style={{color:'#ffffff'}}>ABOUT</Text>
                </Button>
               
            </Right>
      </Header>
    );
}
/*<Button transparent onPress={() => {props.ToggleOverlay()}}>
<Icon name='md-add' />
</Button>

<Button transparent >
                    <Icon name='search' />
                </Button>


<Button onPress={this._openMenu}>Show menu</Button>

<Menu
            visible={this.state.visible}
            onDismiss={this._closeMenu}
            anchor={
              <Button onPress={this._openMenu}>Show menu</Button>
            }
          >
            <Menu.Item onPress={() => {}} title="Item 1" />
            <Menu.Item onPress={() => {}} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => {}} title="Item 3" />
          </Menu>


          <Button transparent >
                    <Icon name='more' />
                </Button>


                async() => {
                                                ToastAndroid.show("Reloading !", ToastAndroid.SHORT);
                                                await Updates.reloadAsync();                                                           
                                            }
*/