import React from 'react';
import {View,Text,FlatList,ScrollView,RefreshControl} from 'react-native';
import { ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';


import HeaderForGoogle from '../springerJournals/HeaderForJournal';
import Linking from '../../Functions/DeepLinking';
//import HeaderForGoogle from './HeaderForGoogle';
//import CardForVideos from './CardForVideos';
//import ListItem from '../LinkSharing/Functions/ListItem';

class Wiki extends React.Component{

    state={
        Gloaded: 'loading',
        searchList: null,
        query:null,
    }

    componentDidMount(){
        this._refresh({query:'lectures'});
    }

    _fetchWiki=({query})=>{
        //console.log('query', query);
        const Arrays =[];
        fetch(`https://www.googleapis.com/customsearch/v1?key=''&cx=017576662512468239146:omuauf_lfve&q=${query}`)
        .then((response)=> response.json())
        .then((responseJson)=> {
            //const Links = responseJson[3];
            //console.log(responseJson);
            responseJson.items.forEach((search)=>{
                //console.log(wiki);
                const obj = { 
                    title: search.title,
                    link: search.link,
                    mainLink: search.displayLink
                };
                //console.log(obj);
                Arrays.push(obj);
            })
        })
        .then(()=> { this.setState({Gloaded: 'OK', searchList: Arrays});})
        .catch((error)=>{console.log('Error: ',error);this.setState({Gloaded: 'ERROR'})})
    }

    _refresh =({query})=> {  
        if(query===null){ 
            this.setState({Gloaded:'loading'}); 
            this._fetchWiki({query : this.state.query})
            
        }
        else{
            this.setState({Gloaded:'loading', query: query});
            this._fetchWiki({query})
        }  
    }

    _keyExtractor = (item, index) => index.toString()

    _renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            subtitle={item.mainLink}
            //leftAvatar={{ source: { uri: item.avatar_url } }}
            bottomDivider
            chevron
            onPress={()=> Linking(item.link)}
            />
    )

    render(){
        //return(<View style={{ flex:1,justifyContent:'center',alignItems:'center'}}><Text>Hello</Text></View>);
        return(
            
            <View style={{flex:1}}>
                <HeaderForGoogle searchWiki={this._refresh}/>
                    { this.state.Gloaded==='loading' &&     
                        <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'green',fontSize:20}}>
                            search Loading...
                        </Text>
                        </View> 
                    }
                    {
                        this.state.Gloaded === 'ERROR' &&
                        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                                
                                <Text style={{fontSize:20, color:'red'}}>
                                    No Match Found...
                                </Text>
                                
                            
                        </View>
                    }
                    {
                        this.state.Gloaded ==='OK' && 
                        <FlatList
                                data={this.state.searchList}
                                renderItem={this._renderItem}
                                keyExtractor={this._keyExtractor}
                                onRefresh={()=> this._refresh({query:null})}
                                refreshing={this.state.Gloaded === null}
                        />
                    }
                
            </View>
            
        );
    }
}

export default Wiki;