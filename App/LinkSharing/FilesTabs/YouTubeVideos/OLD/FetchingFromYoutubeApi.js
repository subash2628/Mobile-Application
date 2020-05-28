import * as React from 'react';
import {View,Text, FlatList, StyleSheet,ActivityIndicator} from 'react-native';
//import { WebView } from 'react-native-webview';
import TubeItem from './FetchingVideoScreen/TubeItem';

export default class App extends React.Component {
    state={
        listLoaded: false,
        videoList: null,
    }

    componentDidMount(){
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key='')
        .then((response)=> response.json())
        .then((responseJson)=> {
            this.setState({listLoaded: true, videoList: Array.from(responseJson.items)});
            console.log(responseJson.items);
        })
        .catch((error)=>{console.log(error)})
    }


  render() {
        //console.log('Now returning', this.state.videoList);
        const {navigate} = this.props.navigation;
    return (
    //   <WebView
    //     originWhitelist={['*']}
    //     source={{ html: '<h1>Hello world</h1>' }}
    //     style={{ marginTop: 20 }}
    //   />()
    <View style={styles.container}>
       {this.state.listLoaded ? (
          

            <View style={{paddingTop: 30}}>
               <FlatList
                    data={this.state.videoList}
                    renderItem={({item})=>{
                        //return <View><Text>{item.snippet.title}</Text></View>
                        return <TubeItem 
                            navigate={navigate}
                            id={item.id.videoId}
                            title={item.snippet.title}
                            imgSrc={item.snippet.thumbnails.high.url}
                        />
                    //console.log(item);
                    }} 
                    keyExtractor={item => item.id.videoId}
               />
           </View>

       ):(
           
            <View style={{paddingTop: 30}}>
                <Text> Youtube Videos Loading</Text>
                <ActivityIndicator size="large" color="green" />
            </View>
       )}
       
    </View>
    );
  }
}


/*
<TubeItem 
                            id={item.id.videoId}
                            title={item.snippet.title}
                            imgSrc={item.snippet.thumbnails.high.url}
                        />



<View style={styles.container}>
       {this.state.listLoaded ? (
           <View style={{paddingTop: 30}}>
               <FlatList
                    data={this.state.videoList}
                    renderItem={({item})=>{
                    <Text>{item.snippet.title}</Text>
                    }} 
                    keyExtractor={item => item.id.videoId}
               />
           </View>


 <View style={{paddingTop: 30}}>
           <Text> Youtube Videos Loading</Text>
           <ActivityIndicator size="large" color="blue" />
       </View>
                        */











const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});
