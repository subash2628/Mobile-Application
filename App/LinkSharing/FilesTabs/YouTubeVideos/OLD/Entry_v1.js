import React from 'react';
import {View,Text,FlatList} from 'react-native';

import HeaderForYouTube from './HeaderForYoutube';
import CardForVideos from './CardForVideos';
import { SafeAreaView } from 'react-native-safe-area-context';

class Videos extends React.Component{

    state={
        listLoaded: null,
        videoList: null,
    }

    componentDidMount(){
        this._fetchVideos({query:'corona virus'});
    }

    _fetchVideos=({query})=>{
        //console.log('query', query);
        const Arrays =[];
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=40&key=''`)
        .then((response)=> response.json())
        .then((responseJson)=> {

            responseJson.items.forEach((video)=>{
                //console.log(video);
                let obj = { id: video.id.videoId,
                            title: video.snippet.title,
                            channel: video.snippet.channelTitle,
                            channelId: video.snippet.channelId,
                            //subtitle: book.volumeInfo.subtitle, 
                            image: video.snippet.thumbnails? video.snippet.thumbnails.default.url : null,
                            //pageCount: book.volumeInfo.pageCount,
                            //previewLink: book.volumeInfo.previewLink,
                            //rating: book.volumeInfo.averageRating,
                            //publisher: book.volumeInfo.publisher,
                            //catagory: book.volumeInfo.categories? book.volumeInfo.categories : null
                        };
                Arrays.push(obj);
            })})
        .then(()=> { this.setState({listLoaded: true, videoList: [...Arrays]});})
        .catch((error)=>{this.setState({listLoaded:false})})
    }

    render(){
        return(
            
            <View style={{flex:1}}>
                <HeaderForYouTube searchVideos={this._fetchVideos}/>

                { this.state.listLoaded === null && 
                    <View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'green',fontSize:20}}>
                        Videos Loading...
                    </Text>
                    </View>
                }
                {
                    this.state.listLoaded === false &&
                    <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:20, color:'red'}}>
                        Videos Loading Error...
                    </Text>
                    </View>
                }
                {
                    this.state.listLoaded && 
                    <FlatList
                            data={this.state.videoList}
                            renderItem={({item})=> <CardForVideos 
                                                        id={item.id}
                                                        title={item.title} 
                                                        image={item.image}
                                                        channelName={item.channel}
                                                        channelId={item.channelId} 
                                                        //subtitle={item.subtitle}
                                                        //pageCount={item.pageCount}
                                                        //previewLink={item.previewLink}
                                                        //rating={item.rating}
                                                        //publisher={item.publisher}
                                                        //catagory={item.catagory}
                                                    />}
                            keyExtractor={item => item.id}
                    />
                }
                
            </View>
            
        );
    }
}

export default Videos;