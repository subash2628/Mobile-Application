import React from 'react';
import { Text, View, TouchableOpacity,Button ,Dimensions,Image} from 'react-native';
import { Camera } from 'expo-camera';
// import * as MediaLibrary from 'expo-media-library';
// import * as ImageManipulator from 'expo-image-manipulator';

class Photo extends React.Component {
   state={
     hasPermission:null,
     type:Camera.Constants.Type.front,
     uri:null,
   }
  // const [, setHasPermission] = useState(null);
  // const [type, setType] = useState(Camera.Constants.Type.back);
componentDidMount(){
  //this.setState({type:Camera.Constants.Type.back});
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      (status === 'granted') ? this.setState({hasPermission:true}) : this.setState({hasPermission:false});
    })();
  
}

render(){
  let State = this.state;
  const Width = Dimensions.get('window').width;
  const Height = Dimensions.get('window').height;
  //console.log(Height);

        if (State.hasPermission === null) {
            return <View />;
        }
        if (State.hasPermission === false) {
            return <Text>No access to camera</Text>;
        }
        if(!State.uri){
            return (
            <View style={{ flex: 1 }}>
                <Camera 
                    style={{ flex: 1 }} 
                    type={State.type}
                    autoFocus='on'
                    //onCameraReady={()=>alert('readyy')}
                    ref={ref => {
                        this.camera = ref;
                        }}
                >
                <View
                    style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            flex: 0.1,
                            alignSelf: 'flex-end',
                            alignItems: 'center',
                        }}
                        onPress={() => {
                            
                            State.type === Camera.Constants.Type.back
                                ? this.setState({type: Camera.Constants.Type.front})
                                : this.setState({type: Camera.Constants.Type.back})
                            
                        }}>
                    <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
                    
                </View>
                <Button title="Capture" onPress={async () => {
                                                    if (this.camera) {
                                                        let {uri} = await this.camera.takePictureAsync();
                                                        //console.log(photo);
                                                        //let uri = await ImageManipulator.manipulateAsync(photo.uri, [{flip:ImageManipulator.FlipType.Horinzontal}],
                                                        //{ compress: 1});
                                                        //console.log(uri);
                                                        this.setState({uri});
                                                        //const asset = await MediaLibrary.createAssetAsync(uri);
                                                        
                                                        //MediaLibrary.saveToLibraryAsync(uri);
                                                        //console.log(asset);
                        }}} />
                    </Camera>
                </View>
                );
            }
            return(
                <View style={{ flex: 1,flexDirection:'column' ,paddingBottom:5}}>
                    <Button title="Next" onPress={()=>this.setState({uri:null})} />
                <Image source={{uri:State.uri}} style={{width:Width,height:Height}} />
                    
                
                
                </View>
            );
        }
}

export default Photo
