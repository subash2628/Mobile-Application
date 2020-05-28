import React from 'react';
import { StyleSheet, Text, View ,FlatList,RefreshControl,Alert,ActivityIndicator,StatusBar} from 'react-native';
import { ListItem } from 'react-native-elements'
//import { SafeAreaView } from 'react-native-safe-area-context';
import {Surface} from 'react-native-paper';

//import ListItems from '../Functions/ListItem';
import HeaderForHomepage from './HeaderForHomepage';
import OverlayLocation from './LocationOverlay';
import OverlayADD from './AddOverlay';
import Linking from '../../Functions/DeepLinking';
import getLocation from '../../Location/Entry';

//import * as Location from 'expo-location';



class Files extends React.Component{
  state={
    isLoading: true,
    Links: null,
    overlayLocation: false,
    overlayADD:false,
    address: null,
    isLocationPressed:false,
  }

  componentDidMount(){
    this._fetchLinks();
   // this._fetchLocation();
  }

  _fetchLocation=()=>{
    let location =  getLocation();
    console.log('component did mount',location);
    return(location? this.setState({location}): null);
  }

  _handleLocationPressed=()=>{this.setState({isLocationPressed:true})}

  _refresh =()=> {this.setState({isLoading:true}); this._fetchLinks()}

  _overlay= ({Action})=>{

      switch(Action){
        case 'LocationTrue': this.setState({overlayLocation:true}); break;
        case 'LocationFalse': this.setState({overlayLocation:false}); break;
        case 'AddTrue': this.setState({overlayADD:true}); break;
        case 'AddFalse': this.setState({overlayADD:false}); break;
        default: null
      }
  }

  _fetchLinks =()=>{
      //console.log(this.props.route.params.db);
    try{
            const db = this.props.route.params.db;
            let PdfRef = db.collection("Pdf's");
            let Arrays = [];
            PdfRef.get().then((Documents)=>{
                Documents.forEach((doc)=>{
                    //console.log(doc.id);
                    let data = doc.data();
                    let obj = {
                          Name: data.name,
                          Link: data.Link,
                          Author:data.Author
                        };
                    Arrays.push(obj);
                    //console.log(obj)
                })}).then(()=> {this.setState({Links:Arrays, isLoading:false})}); 
    }catch(error){console.log(error)}      
  }
  _keyExtractor = (item, index) => index.toString()

  _renderItem = ({ item }) => (
        <ListItem
            title={item.Name}
            subtitle={item.Author}
            //leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            chevron
            onPress={()=> Linking(item.Link)}
            />
    )

  render(){
      //console.log('address', this.state.location);
        return( //in future FlatList is required!!!!
          
              <View style={{flex:1}}>
                  <HeaderForHomepage 
                        enableLocation={this._handleLocationPressed} 
                        handleOverlay={this._overlay}
                        drawerNavigation={this.props.route.params.drawerNavigation}
                        />          
                  
                   { this.state.isLocationPressed && 
                      <OverlayLocation 
                        visible={this.state.overlayLocation} 
                        handleOverlay={this._overlay}
                        
                        //location={this.state.location}
                        />}
                  <OverlayADD 
                          visible={this.state.overlayADD} 
                          handleOverlay={this._overlay}
                          db={this.props.route.params.db}
                          Refresh={this._refresh}
                          />
                    
                      
                      <FlatList
                        data={this.state.Links}
                        renderItem={this._renderItem}
                        keyExtractor={this._keyExtractor}
                        onRefresh={()=> this._refresh()}
                        refreshing={this.state.isLoading}
                      />
                      


                  
                </View>
               
        );
      

      
    }
}

export default Files

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      //backgroundColor: '#fff',
      //alignItems: 'center',
      //justifyContent: 'center',
    },
  });



  /*

//   _fetchLocation= async()=>{

//             let { status } = await Location.requestPermissionsAsync();
//             if(status !== 'granted'){
//                 Alert.alert('Permission not given') }else{
                
//                 let { coords}=  await Location.getCurrentPositionAsync({});
//                 console.log(coords);
//                 let address = await Location.reverseGeocodeAsync(coords);
                
//                 console.log(address);
//             }
            
//     }

  _fetchLocation=async()=>{
    let loc = await getLocation();
    console.log(loc);
  }
  */