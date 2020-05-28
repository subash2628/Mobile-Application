
//used by Bottom Tabs Folder



import { Container, Header,Body,Title, Item, Input, Icon, Button, Text, Right} from 'native-base';
import React from 'react';
//import { View, Alert,TouchableOpacity } from 'react-native';
//import { StyleSheet,ToastAndroid,TextInput } from 'react-native';

export default function({toggleOverlay}){
    //const [value, onChangeText] = React.useState('corona virus');
    return(
        
             <Header rounded >
                <Body>
                    <Title>Catagories</Title>
                </Body>
                <Right>
                    <Button transparent onPress={toggleOverlay}>
                        <Icon type="Ionicons" name="md-add"/>
                    </Button>
                </Right>
            </Header>
        
       
    );
}
