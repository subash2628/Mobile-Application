

import React from 'react';
import { Button, Overlay } from 'react-native-elements';
import {View,StyleSheet,Platform,KeyboardAvoidingView,TextInput} from 'react-native';
import {Text} from 'native-base';

export default function({visible, toggleOverlay,addVideo}){
    const [name, onChangeName] = React.useState('');
    const [link, onChangeLink] = React.useState('');
    //const [disabled, toggleDisabled] = React.useState(true);


  return (
    <View>
      <Overlay 
            isVisible={visible} 
            onBackdropPress={toggleOverlay}
            overlayStyle={{height:'60%'}}
            >
            <View style={styles.form}> 
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                        style={{flex: 1}}
                    >
                        <Text style={styles.text}>Add Video</Text>  
                        <TextInput
                                style={styles.input}
                                onChangeText={text => { onChangeName(text)}}
                                value={name}
                                placeholder="video name"
                        />
                        <TextInput
                                style={styles.input}
                                onChangeText={text => { onChangeLink(text)}}
                                value={link}
                                placeholder="video link "
                        />

                        <Button
                            disabled={!(name.length>=4 && link.length>=10) }
                            onPress={()=>{addVideo({name:name,link:link});onChangeName('');onChangeLink('')}}
                            icon={{
                                name: "check",
                                size: 20,
                                color: "white",

                            }} 
                        />  
                    </KeyboardAvoidingView>
                    
            </View>
        
      </Overlay>
    </View>
  );
};

const styles = StyleSheet.create({
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        marginTop:10,
        marginBottom:10
    },
    form:{
        paddingLeft:20,
        paddingRight:20,
        flex:1,
        flexDirection:'column',
       
    },
    text:{
        fontSize:20,
        color:'tomato',
    }
});