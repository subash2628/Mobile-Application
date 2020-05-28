import React from 'react';
import {View,Text,ToastAndroid,Button} from 'react-native';
//import { Button } from 'native-base';
import * as Updates from 'expo-updates';

class Test extends React.Component{
    render(){
        let Message = this.props.Message;
        let Color = this.props.Color || 'green';

        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:40,color:Color,}}>
                        {Message || 'Comming Soon'}
                </Text>
                <Button title="Reload" onPress={async() => {
                                            ToastAndroid.show("Reloading !", ToastAndroid.SHORT),
                                            await Updates.reloadAsync() 
                                            }
                                }/>
            </View>
        );
    }
}


export default Test
//

//{/* {Message || 'Comming Soon'} */}