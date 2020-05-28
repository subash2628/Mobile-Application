


import { Container, Header,Body,Title,Left,Right, Item, Input, Icon, Button, Text,} from 'native-base';
import React from 'react';
//import { View, Alert,TouchableOpacity } from 'react-native';
//import { StyleSheet,ToastAndroid,TextInput } from 'react-native';

export default function({title,navigation,toggleOverlay}){
    //const [value, onChangeText] = React.useState('corona virus');
    return(
        
             <Header rounded >
                <Left>
                    <Button transparent onPress={()=>navigation.goBack()}>
                        <Icon type="AntDesign" name="arrowleft"/>
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right>
                    <Button transparent onPress={()=> toggleOverlay()}>
                        <Icon type="Ionicons" name="md-add"/>
                    </Button>
                </Right>
            </Header>
        
       
    );
}
