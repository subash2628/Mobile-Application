import React from 'react';
import {Text,View,Button} from 'react-native';
import { WebView } from 'react-native-webview';

export default class VideoDetail extends React.Component{

    static navigationOptions=({route,navigation})=>{
        headerTitle:`${route.params.ytubeId}`
    };

    render(){
        let {ytubeId} = this.props.route.params;
        let tubeUrl = `https://www.youtube.com/embed/${ytubeId}`;
        console.log(tubeUrl);
        const {navigation} = this.props; 
        return(
            <View style={{flex:1}}>
                <WebView 
                    style={{marginTop:20}}
                    javaScriptEnabled={true}
                    source={{uri: tubeUrl}}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                />
                <Button title="Go back" onPress={() => navigation.goBack()} />
          </View>
        );
    }
}

/*
  <View>
                <Text>
                    {ytubeId}
                </Text>
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
*/