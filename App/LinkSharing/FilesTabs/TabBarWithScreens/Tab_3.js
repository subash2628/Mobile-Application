import Test from '../Components/Test';
//export default Test
import React from 'react';
import {KeyboardAvoidingView, View,Text,TextInput ,StyleSheet,ToastAndroid,Button} from 'react-native';
import { Container } from 'native-base';



function Password(){
    const [Password, onChangePassword] = React.useState('');

    return(
        <Container>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{flex: 1}}
            >
                
                    <View style={styles.form}>
                        <View>
                            <Text style={{fontSize:20,}}>Enter Password: </Text>
                        </View>
                        
                        <View style={{paddingTop: 10}}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => onChangePassword(text)}
                                value={Password}
                                placeholder="enter password"
                            />
                        </View>

                        <View style={{paddingTop: 10}}>
                            <Button title="submit" onPress={
                                ()=> {Password === 'RequestDelete' ? ChangePasswordFlag(true) : 
                                ToastAndroid.show("Password Incorrect !", ToastAndroid.SHORT);}
                                //alert(Password)
                            }/>
                        </View>
                    </View>
            </KeyboardAvoidingView>
        </Container>
    );
}

export default Password;

const styles = StyleSheet.create({
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        marginTop:10,
    },
    form:{
        paddingTop: 20,
        paddingLeft:20,
        paddingRight:20,
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        //alignItems:'center',
    }
});