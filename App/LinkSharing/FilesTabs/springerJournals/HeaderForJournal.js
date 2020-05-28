
import { Container, Header, Item, Input, Icon, Button, Text,} from 'native-base';
import React from 'react';
import { View, Alert,TouchableOpacity } from 'react-native';
//import { StyleSheet,ToastAndroid,TextInput } from 'react-native';

//import * as Updates from 'expo-updates';

export default function({searchJournal}){
    const [value, onChangeText] = React.useState('');
    return(
        <Header searchBar rounded >
            <Item>
                
                <Input
                    placeholder="keyword/Subject/no_of_search" 
                    onChangeText={text => onChangeText(text)}
                    value={value}/>
                <TouchableOpacity onPress={()=> onChangeText('')}><Icon type="AntDesign" name='closecircleo'/></TouchableOpacity>
                <TouchableOpacity onPress={()=>{
                        let search = null;
                        if(value){
                            const [keyword, subject , page] = value.split('/');
                            keyword&&subject&&page ? 
                            search = `(keyword:${keyword} and subject:${subject})&p=${page}`:
                            keyword&&subject ? search=`(keyword:${keyword} and subject:${subject})`: 
                            search=`${keyword}`;
                            searchJournal({query:search});
                            
                        }else{
                            Alert.alert('bad search');
                        }
                }}>
                    <Icon name='search'/>
                    
                </TouchableOpacity>
          </Item>
           
      </Header>
    );
}
