import Test from '../Components/Test';

import React from 'react';
import {KeyboardAvoidingView, View,Text,TextInput ,StyleSheet,ToastAndroid} from 'react-native';
import { Container } from 'native-base';
import {Button} from 'react-native-elements';
//export default Test



function AddData({db, Refresh, onChangeTab}) {
    const [Name, onChangeName] = React.useState('');
    const [Link, onChangeLink] = React.useState('');
    const [author, onChangeAuthor] = React.useState('');
    const [Message, setMessage] = React.useState('');

    let PdfCollectionRef = db.collection("Pdf's");

        return(
            <Container>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={{flex: 1}}
            >
                
                    <View style={styles.form}>
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,}}>Add and Edit Data</Text>
                        </View>
                        
                        <View style={{flex:2,paddingTop: 0}}>
                            <TextInput
                                style={styles.input}
                                onChangeText={text => onChangeName(text)}
                                value={Name}
                                placeholder="Name"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={text => {onChangeLink(text)}}
                                value={Link}
                                placeholder="Link to Google Drive"
                            />
                            <TextInput
                                style={styles.input}
                                onChangeText={text => {onChangeAuthor(text)}}
                                value={author}
                                placeholder="Your(Contributor) Name"
                            />
                            <View style={{paddingTop: 10,}}>
    { Message === 'Done'? <Text style={{color:'green'}}>{Message}</Text> : <Text style={{color:'red'}}>{Message}</Text> }
                                <Button
                                    
                                    onPress={()=>{
                                        //onChangeTab(0);
                                        //console.log(author);
                                        //validate data here//
                            ((Name && Link && author) ? 
                            
                                        PdfCollectionRef.doc(`${Name}`).set(
                                            {
                                                name: `${Name}`,
                                                Link: `${Link}`,
                                                Author: `${author}` 
                                            }
                                        ).then(()=>{
                                            setMessage("Done");
                                           
                                            Refresh();
                                            onChangeTab(0);//changing tab to list 
                                            //clearing all old values...
                                            onChangeName('');
                                            onChangeLink('');
                                            onChangeAuthor('');
                                            setMessage('');
                                            //props.disableOverlay();
                                            ToastAndroid.show("Data Adding Success!", ToastAndroid.SHORT);
                                        }).catch((error)=>{
                                            setMessage("Error");
                                            console.log(error);
                                        })
                                        : setMessage("Invalid Data"))
                                    }}
                                    icon={{
                                        name: "check",
                                        size: 20,
                                        color: "white",

                                    }}
                                    //title="Button with icon object"
                                />
                            </View>
                        </View>
                        
                    </View>
                
        </KeyboardAvoidingView>
        </Container>
        );
    
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 5,
        marginTop:10,
    },
    form:{
        paddingLeft:20,
        paddingRight:20,
        flex:1,
        flexDirection:'column',
       
    }
});


export default AddData;