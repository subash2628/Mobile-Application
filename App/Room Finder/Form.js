import React, { Component } from 'react';
import { View, Text ,TextInput, StyleSheet} from 'react-native';
import { Container } from 'native-base';
import Constants from 'expo-constants';

export default class Form extends Component {
  state = {
        location:'',
        no_of_room:null,
        kitchen:null,
        price:null,
        Image:null,
        ExtraPrices:{water:''},

    };

  render() {
      
      let State = this.state;
      //console.log('state: ',State);
    return (
      <View style={styles.container}>
        <View style={{flex:1,flexDirection:'row'}}>
            <Text>Location: </Text>
            <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={location => this.setState({location})}
                    value={State.location}
                />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
            <Text>No_of_Room: </Text>
            <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={no_of_room => this.setState({no_of_room})}
                    value={State.no_of_room}
                />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
            <Text>kitchen: </Text>
            <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={kitchen => this.setState({kitchen})}
                    value={State.kitchen}
                />
        </View>
        <View style={{flex:1,flexDirection:'row'}}>
            <Text>price: </Text>
            <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={price => this.setState({price})}
                    value={State.price}
                />
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Constants.statusBarHeight,
        //backgroundColor:'tomato',
    }
});