

import React from 'react';
import { Button, Overlay } from 'react-native-elements';
import {View,StyleSheet,Platform,KeyboardAvoidingView,TextInput} from 'react-native';
import {Text} from 'native-base';

export default function({visible, toggleOverlay,addCatag}){
    const [catagory, onChangeCatag] = React.useState('');
    //const [disabled, toggleDisabled] = React.useState(true);


  return (
    <View>
      <Overlay 
            isVisible={visible} 
            onBackdropPress={toggleOverlay}
            overlayStyle={{height:'50%'}}
            >
            <View style={styles.form}> 
                    <KeyboardAvoidingView
                        behavior={Platform.OS == "ios" ? "padding" : "height"}
                        style={{flex: 1}}
                    >
                        <Text style={styles.text}>Add Catagories</Text>  
                        <TextInput
                                style={styles.input}
                                onChangeText={text => { onChangeCatag(text)}}
                                value={catagory}
                                placeholder="catagory name"
                        />
                        <Button
                            disabled={!(catagory.length>=5)}
                            onPress={()=>{addCatag(catagory);onChangeCatag('')}}
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
        marginTop:20,
        marginBottom:20
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