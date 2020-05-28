import React from 'react';
import {View,Text,FlatList,ScrollView,RefreshControl} from 'react-native';
import { ListItem } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';


import HeaderForGoogle from './HeaderForJournal';
import Linking from '../../Functions/DeepLinking';
//import HeaderForGoogle from './HeaderForGoogle';
//import CardForVideos from './CardForVideos';
//import ListItem from '../LinkSharing/Functions/ListItem';

class Journal extends React.Component{

    state={
        Gloaded: 'loading',
        searchList: [],
        query:null,
    }

    componentDidMount(){
        this._refresh({query:'(keyword:Geometry and subject:Mathematics)&p=5'});
    }

    _fetchJournal=({query})=>{
        //console.log('query', query);
        const Arrays =[];
        fetch(`http://api.springernature.com/meta/v2/json?q=${query}&api_key=''`)
        .then((response)=> response.json())
        .then((responseJson)=> {
            //const Links = responseJson[3];
           // console.log(responseJson.records);
            responseJson.records.forEach((search)=>{
                //console.loghJournal);
                const obj = { 
                    title: search.title,
                    subtitle:search.publicationName,
                    link: search.url[0].value
                    //mainLink: search.displayLink
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
            this._fetchJournal({query : this.state.query})
            
        }
        else{
            //const [keyword, subject , page] = query.split('/');
            //console.log(keyword, subject, page);
            this.setState({Gloaded:'loading', query: query});
            this._fetchJournal({query})
        }  
    }

    _keyExtractor = (item, index) => index.toString()

    _renderItem = ({ item }) => (
        <ListItem
            title={item.title}
            subtitle={item.subtitle}
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
                <HeaderForGoogle searchJournal={this._refresh}/>
                    { this.state.Gloaded==='loading' &&     
                        <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'green',fontSize:20}}>
                            search Loading...
                        </Text>
                        </View> 
                    }
                    {
                        this.state.Gloaded === 'ERROR' || (this.state.searchList.length===0 && this.state.Gloaded==='OK')&&
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

export default Journal;