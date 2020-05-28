import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Picker } from 'native-base';
import { View,Text,StyleSheet , Image,TouchableOpacity, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Checkbox } from 'react-native-paper';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

import UploadImage from './uploadData';

export default class InlineLabelExample extends Component {
    state = {
        location:'',
        contact:'',
        no_of_room:'0',//second boolean is for error reflecting
        kitchen:false,
        price:'',
        image:null,
        loading_Button:false,
        

    };
    render() {
        const {kitchen,location,no_of_room,price,image,contact} = this.state; 
        // const State = this.state;
        // const location,no_of_room = State.location;
        // const no_of_room =  State.no_of_room;
        // const kitchen = State.kitchen;
        // const price = State.price;
        // const image = State.image;
        
        
        //console.log(ExtraPrices);
  
      return (
      
          <Content style={styles.content}>
            <Form style={styles.form}>
              <Item inlineLabel rounded style={styles.item}  success={contact.length===10?true:false}>
                <Label style={styles.label}>Contact:</Label>
                  <Input 
                        keyboardType='number-pad' 
                        placeholder='98......'
                        onChangeText={(contact)=>this.setState({contact})}
                        value={contact}
                        />
              </Item>
  
              <Item inlineLabel rounded style={styles.item}  success={location.length>=4?true:false}>
                <Label style={styles.label}>Location:</Label>
                <Input 
                    placeholder='i.e lamachour chock'
                    onChangeText={(location)=>this.setState({location})}
                    value={location}
                    />
              </Item>
  
              <Item inlineLabel rounded style={styles.item}  success={no_of_room==='0'?false:true}>
                <Label style={styles.label}>No of Room:</Label>
                    <Picker
                        note
                        mode="dropdown"
                        style={{ width: 120 }}
                        selectedValue={no_of_room}
                        onValueChange={(value)=>this._pickerChanged(value)}
                        >
                        <Picker.Item label="None" value='0' />
                        <Picker.Item label="One" value="1" />
                        <Picker.Item label="Two" value="2" />
                        <Picker.Item label="Three" value="3" />
                        <Picker.Item label="More than Three" value="4" />
                    </Picker>
              </Item>
  
              <Item inlineLabel rounded style={styles.item}>
                <Label style={styles.label}>Can Use Kitchen:</Label>
                <Checkbox
                  status={kitchen ? 'checked' : 'unchecked'}
                  onPress={() => { this.setState({ kitchen: !kitchen }); }}
                  />
              </Item>
  
              <Item inlineLabel rounded style={styles.item}  success={price?true:false}>
                <Label style={styles.label}>Price/month:</Label>
                <Input 
                    keyboardType='number-pad' 
                    placeholder='i.e Rs.3000'
                    onChangeText={(price)=>this.setState({price})}
                    value={price}
                    />
              </Item>
  
              <Item inlineLabel rounded style={styles.item}  success={image?true:false}>
                <Label style={styles.label}>Image:</Label>
                {!image && <TouchableOpacity onPress={this._pickImage} ><Text style={styles.text}>Browse</Text></TouchableOpacity>}
                {image && <TouchableOpacity onPress={this._clearImage} ><Text style={{color:'red'}}>Clear</Text></TouchableOpacity>}
                    {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
              </Item>
              
            </Form>
            <Button
                    title="Submit"
                    loading={this.state.loading_Button}
                    disabled={(contact.length===10&& location.length>=3 && no_of_room!=='0' && price.length>=4 && image)?false:true}
                    containerStyle={styles.button}
                    buttonStyle={{borderRadius:20}}
                    onPress={this._onSubmitForm}
                    icon={
                        <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                        />
                    }
            />         
        </Content>
        
      );
    }

    componentDidMount() {
        this.getPermissionAsync();
      }
    
    
    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      };

      _pickImage = async () => {
        try {
        //let from_camera = await ImagePicker.launchCameraAsync();//direct from camera 
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          if (!result.cancelled && result.type==='image') {
            this.setState({ image: result.uri });
          }else{
              result.cancelled ? Alert.alert('canceled') : Alert.alert('Image Format Only');
          }

    
          //console.log(result);
        } catch (E) {
          console.log(E);
        }
      };
      _cleanForm=()=>{
          this.setState({location:'',
                        contact:'',
                        no_of_room:'0',//second boolean is for error reflecting
                        kitchen:false,
                        price:'',
                        image:null
                    });
      }
      _handleLoadingButton=(bool)=>{
        this.setState({loading_Button:bool});
      }

      _clearImage=()=>{
          this.setState({image:null});
      };
      _pickerChanged=(key)=>{
          
          this.setState({no_of_room:key});
          //console.log('Picker: ',typeof(key));
      };

      _onSubmitForm=()=>{
            //console.log('image name', this.state.image);
            // this.setState({loading_Button:true});
            this._handleLoadingButton(true);
            UploadImage({...this.state,
                        loadingButton:this._handleLoadingButton,
                        cleanForm:this._cleanForm,
                        onComplete:this.props.onComplete
            });
      };
}

const styles =StyleSheet.create({
    content:{
        margin:10,
    },
    form:{
        //margin:5,
        padding:10,
        borderColor:'#663399',
        borderWidth:2 ,
        borderRadius:20,
        backgroundColor:'#e3dffb',
        //opacity:0.6,

    },
    item:{
        paddingLeft:10,
        marginBottom:10,
        paddingRight:10,
    },
    label:{
        //fontWeight:'bold',
        color:'#800000',
        fontStyle:'italic',
    },
    text:{
        color:'blue',
        fontWeight:'bold'
    },
    button:{
        marginTop:30,
        backgroundColor:'green',
    }
});