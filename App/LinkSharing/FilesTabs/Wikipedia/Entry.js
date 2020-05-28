import React from 'react';
import {View,Text,FlatList,ScrollView,RefreshControl} from 'react-native';
import { ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';


import HeaderForWiki from './HeaderForWiki';
import Linking from '../../Functions/DeepLinking';
//import CardForVideos from './CardForVideos';
//import ListItem from '../LinkSharing/Functions/ListItem';

class Wiki extends React.Component{

    state={
        wikiLoaded: null,
        searchList: null,
        query:null,
    }

    componentDidMount(){
        this._refresh({query:'corona virus'});
    }

    _fetchWiki=({query})=>{
        //console.log('query', query);
        const Arrays =[];
        fetch(`https://en.wikipedia.org/w/api.php?%20action=opensearch&format=json&origin=*&profile=normal&search=${query}&limit=50`)
        .then((response)=> response.json())
        .then((responseJson)=> {
            const Links = responseJson[3];
            //console.log(responseJson);
            responseJson[1].forEach((wiki,index)=>{
                //console.log(wiki);
                const obj = { 
                    title: wiki,
                    link: Links[index]
                };
                //console.log(obj);
                Arrays.push(obj);
            })
        })
        .then(()=> { this.setState({wikiLoaded: true, searchList: Arrays});})
        .catch((error)=>{console.log(error);this.setState({wikiLoaded: false})})
    }

    _refresh =({query})=> {  
        if(query===null){ 
            this.setState({wikiLoaded:null}); 
            this._fetchWiki({query : this.state.query})
            
        }
        else{
            this.setState({wikiLoaded:null, query: query});
            this._fetchWiki({query})
        }  
    }

    _keyExtractor = (item, index) => index.toString()

    _renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            //subtitle={item.subtitle}
            //leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            chevron
            onPress={()=> Linking(item.link)}
            />
    )

    render(){
        return(
            
            <View style={{flex:1}}>
                <HeaderForWiki searchWiki={this._refresh}/>
                    { !this.state.wikiLoaded &&     
                        <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20}}>
                            search Loading...
                        </Text>
                        </View> 
                    }
                    {
                        this.state.wikiLoaded === false &&
                        <RefreshControl
                            refreshing={this.state.wikiLoaded === null} 
                            onRefresh={()=>this._refresh({query:null})} 
                        >
                            <View style={{ justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20, color:'red'}}>
                                search Loading Error...
                            </Text>
                            </View>
                        </RefreshControl>
                    }
                    {
                        this.state.wikiLoaded && 
                        <FlatList
                                data={this.state.searchList}
                                renderItem={this._renderItem}
                                keyExtractor={this._keyExtractor}
                                onRefresh={()=> this._refresh({query:null})}
                                refreshing={this.state.wikiLoaded === null}
                        />
                    }
                
            </View>
           
        );
    }
}

export default Wiki;