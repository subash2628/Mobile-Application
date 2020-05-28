
import { Container, Header, Item, Input, Icon, Button, Text,} from 'native-base';
import React from 'react';
import { View, Alert,TouchableOpacity } from 'react-native';
//import { StyleSheet,ToastAndroid,TextInput } from 'react-native';

//import * as Updates from 'expo-updates';

export default function({searchWiki}){
    const [value, onChangeText] = React.useState('lectures');
    return(
        <Header searchBar rounded >
            <Item>
                
                <Input
                    placeholder="search Courses" 
                    onChangeText={text => onChangeText(text)}
                    value={value}/>
                <TouchableOpacity onPress={()=> onChangeText('')}><Icon type="AntDesign" name='closecircleo'/></TouchableOpacity>
                <TouchableOpacity onPress={()=>{  value? searchWiki({query: value}) :Alert.alert('Bad search')}}>
                    {/* <Text style={{color:'blue',marginRight:10}}>search</Text> */}
                    <Icon name='search'/>
                    
                </TouchableOpacity>
          </Item>
           
      </Header>
    );
}
