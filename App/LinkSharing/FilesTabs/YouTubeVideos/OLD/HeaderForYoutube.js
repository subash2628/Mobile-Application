
//used by Bottom Tabs Folder



import { Container, Header, Item, Input, Icon, Button, Text,} from 'native-base';
import React from 'react';
import { View, Alert,TouchableOpacity } from 'react-native';
//import { StyleSheet,ToastAndroid,TextInput } from 'react-native';

import * as Updates from 'expo-updates';

export default function({searchVideos}){
    const [value, onChangeText] = React.useState('corona virus');
    return(
        <Header searchBar rounded >
            <Item>
                
                <Input
                    placeholder="Search" 
                    onChangeText={text => onChangeText(text)}
                    value={value}/>
                    <TouchableOpacity onPress={()=> onChangeText('')}><Icon type="AntDesign" name='closecircleo'/></TouchableOpacity>
                <TouchableOpacity onPress={()=>{  value? searchVideos({query: value}) :Alert.alert('Bad search')}}>
                    <Icon name='search'/>
                </TouchableOpacity>
          </Item>
           
      </Header>
    );
}




/*<Button transparent onPress={()=> {Alert.alert(value);searchBooks({query: value})}}>
                    <Text>search</Text>
                </Button>

<Button transparent onPress={() => {props.ToggleOverlay()}}>
<Icon name='md-add' />
 <Icon name="ios-search" /> 
</Button>
<Button transparent>
                <Text>Search</Text>
            </Button>
<Left>
             <Title>Home</Title> 
                <Button transparent onPress={async() => {
                                                ToastAndroid.show("Reloading !", ToastAndroid.SHORT);
                                                await Updates.reloadAsync();                                                           
                                            }}>
                    <Icon name='menu' />
                </Button>
            </Left> 
            
            <View>    
            <TextInput
                style={{ height: 40,borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => onChangeText(text)}
                value={value}
                placeholder="search here..."
                placeholderTextColor="white"
            /> 
    
     
        
            <Button transparent >
                <Icon name='search' />
            </Button>
        
        </View>
*/