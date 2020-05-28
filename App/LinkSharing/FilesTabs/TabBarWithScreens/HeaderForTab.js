
//used by Bottom Tabs Folder



import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import React from 'react';
//import { ShadowPropTypesIOS } from 'react-native';
import { StyleSheet,ToastAndroid } from 'react-native';

import * as Updates from 'expo-updates';

//onPress={}

export default function(props){
    return(
        <Header hasTabs >
            <Left>
                <Button transparent onPress={async() => {
                                                ToastAndroid.show("Reloading !", ToastAndroid.SHORT);
                                                await Updates.reloadAsync();                                                           
                                            }}>
                    <Icon name='menu' />
                </Button>
            </Left>
            <Body>
                <Title>Home</Title>
            </Body>
            <Right>
                <Button transparent >
                    <Icon name='search' />
                </Button>
                
                <Button transparent>
                    <Icon name='more' />
                </Button>
            </Right>
      </Header>
    );
}
/*<Button transparent onPress={() => {props.ToggleOverlay()}}>
<Icon name='md-add' />
</Button>
*/