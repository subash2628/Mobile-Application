import React, { Component } from 'react';
import { View, Text ,StyleSheet,FlatList,Alert,ToastAndroid} from 'react-native';
import { Container} from 'native-base';

import { ListItem } from 'react-native-elements'

import Header from './HeaderHomeScreen';
import AddCatagOverlay from './addCatagOverlay';

export default class HomeStackScreen extends Component {
  state={
    catagories:null,
    isLoading:true,
    catagOverlay:false,
    
  }

  componentDidMount(){
      this._fetchCatagories();
  }

  _refresh=()=>{
      this.setState({isLoading:true,catagOverlay:false});
      this._fetchCatagories();
  }

  _fetchCatagories=()=>{
    try{
        const db = this.props.route.params.db;
        const catagRef = db.collection("Videos");
        let Arrays = [];
        catagRef.get().then((Documents)=>{
            Documents.forEach((doc)=>{
                //console.log(doc.id);
                Arrays.push({title: doc.id});
            });
                //console.log(Arrays);
            })
        .then(()=> {this.setState({catagories:Arrays, isLoading:false})}); 
    }catch(error){console.log('_fetchCatagories: ',error)} 
  }

  _addCatagories =(name)=>{
    try{
        //console.log('length: ',name.length);
        const db = this.props.route.params.db;
        const catagRef = db.collection("Videos");
        catagRef.doc(name).set({}).then(()=>{this._refresh();ToastAndroid.show("new catagory added!", ToastAndroid.SHORT);});

    }catch(error){console.log('_addCatagories: ',error)}
  }

  _keyExtractor = (item, index) => index.toString()

_renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            //subtitle={item.subtitle}
            //leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            chevron
            onPress={()=> this.props.navigation.navigate('Details',{id: item.title})}
            />
)

  render() {
    return (
        <Container>
            <Header toggleOverlay={()=>this.setState(prevState => ({catagOverlay: !prevState.catagOverlay}))}/>
            <AddCatagOverlay
                
                visible={this.state.catagOverlay}
                addCatag={this._addCatagories}
                toggleOverlay={()=>this.setState(prevState => ({catagOverlay: !prevState.catagOverlay}))}
            />
            <FlatList
               data={this.state.catagories}
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
        
    },
    text:{
        fontSize:20,
        color:'tomato',
    }
});