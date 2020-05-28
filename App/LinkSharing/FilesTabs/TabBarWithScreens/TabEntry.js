import React from 'react';
import {Text,View,ActivityIndicator} from 'react-native';
import * as Font from 'expo-font';


//import TabContainer from './Tabs_main';
//import Test from '../Components/Test';
import ButtomTabs from '../BottomTabs/Entry';







class Tabs extends React.Component{
    state={
        loading:true,
    }


    async componentDidMount() {
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
        });
        this.setState({ loading: false });
    }

    render(){
        if(!this.state.loading){
            return(<TabContainer db={this.props.db}/>)
        }
        return (<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text>Loading Font...</Text>
                    <ActivityIndicator size="large" color="blue" />
                </View>);
    }
}


export default Tabs;