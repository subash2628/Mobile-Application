import React, { Component } from 'react';
import { View, Text ,StyleSheet,FlatList,Alert,ToastAndroid} from 'react-native';
import { Container } from 'native-base';
import { ListItem } from 'react-native-elements'

import Header from './HeaderDetailScreen';
import Link from '../../Functions/DeepLinking';
import AddVideoOverlay from './addVideoOverlay';

export default class HomeStackScreen extends Component {
  state={
    Details:null,//object
    isLoading:true,
    addVideoOverlay:false,
  }

  componentDidMount(){
      this._fetchDetails();
  }

  _refresh=()=>{
      this.setState({isLoading:true,addVideoOverlay:false});
      this._fetchDetails();
  }

  _fetchDetails=()=>{
    try{
        const db = this.props.route.params.db;
        const docRef = db.collection("Videos").doc(this.props.route.params.id);
        //let Arrays = [];
        docRef.get().then((doc)=>{
          const docObject = doc.data();
          const data = Object.keys(docObject).map((key)=>({ [key]: docObject[key]}));
          //console.log(data);

          this.setState({Details:data, isLoading:false})
        });
        
        //.then(()=> {this.setState({Details:Arrays, isLoading:false})}); 
    }catch(error){console.log(error)} 
  }

_addVideo=({name,link})=>{
  try{
    //console.log('length: ',name.length);
    const db = this.props.route.params.db;
    const docRef = db.collection("Videos").doc(this.props.route.params.id);
    docRef.update({[name]:link}).then(()=>{this._refresh();ToastAndroid.show("new Video added!", ToastAndroid.SHORT);});

}catch(error){console.log('_addVideo: ',error)}
}

  _keyExtractor = (item, index) => index.toString()

_renderItem = ({ item }) => {
      const key = Object.keys(item)[0];
      //console.log('link: ', item[key]);
      return(
        <ListItem
            title={key}
            //subtitle={item.subtitle}
            //leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            chevron
            onPress={()=> Link(item[key])}
            />
      )}


  render() {
    return (
      <Container>
         <Header 
            title={this.props.route.params.id}
            navigation={this.props.navigation}
            
            toggleOverlay={()=>this.setState(prevState => ({addVideoOverlay: !prevState.addVideoOverlay}))}
            />
          <AddVideoOverlay 
              visible={this.state.addVideoOverlay}
              toggleOverlay={()=>this.setState(prevState => ({addVideoOverlay: !prevState.addVideoOverlay}))}
              addVideo={this._addVideo}
          />

          <FlatList
               data={this.state.Details}
               renderItem={this._renderItem}
               keyExtractor={this._keyExtractor}
               onRefresh={()=> this._refresh()}
               refreshing={this.state.isLoading}                 
          />

      </Container>
    );
  }
}

const styles = StyleSheet.create({
    common:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});