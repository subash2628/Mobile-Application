import React, { Component } from 'react';
import { Image, StyleSheet, FlatList, Alert } from 'react-native';
import { Container, Header,Card,CardItem,Text,Body,Left, Right, Button, Icon, Segment} from 'native-base';
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';


import database from '../LinkSharing/Functions/GetDB';
import Form2 from './Form_2';

export default class showData extends Component {

    state={
        loading:true,
        data:null,
        room:true,
        form:false,
    }

    componentDidMount(){
        this._fetchRoom();
    }

    _fetchRoom=()=>{
      const db = database().db();
        const Arrays = [];
        db.collection('Room_Finder').get().then((docs)=>{
            docs.forEach((doc)=>{
                const data = doc.data();
                //console.log('data: ',data);
                Arrays.push(data);
            });
        })
        .then(()=>{
            //console.log('data: ',Arrays);
            this.setState({data:Arrays,loading:false});//this needs editing...
        })
        .catch((err)=>console.log('fetching doc error: ',err));
    }

    _formComplete=()=>{
      this.setState({room:true,form:false});
      this._refresh();
    }
    _refresh=()=>{
      this.setState({loading:true});
      this._fetchRoom();
    }
    _keyExtractor = (item, index) => index.toString()

    _renderItem = ({ item }) => (
      <Card>
        <CardItem style={{paddingTop:0,paddingBottom:0,paddingRight:0,paddingLeft:0}}>
          <Image source={{uri: item.imageUrl}} style={{height: 200, width: '100%', flex: 1}}/>
        </CardItem>
        <CardItem >
            <Body>
                <Text note style={styles.label}>Location: <Text style={styles.textData}>{item.location}</Text></Text>
                <Text note style={styles.label}>Can Use Kitchen: <Text style={styles.textData}>{item.kitchen?'Yes':'No'}</Text></Text>
                <Text note style={styles.label}>Contact: <Text style={styles.textData}>{item.contact}</Text></Text>
                <Text note style={styles.label}>No_of_Room: <Text style={styles.textData}>{item.no_of_room}</Text></Text>
                <Text note style={styles.label}>Price/month: <Text style={styles.textData}>{item.price}</Text></Text>

            </Body>
                
        </CardItem>
      </Card>

      
    )

  render() {
    return (
      <Container>
        <Header hasSegment>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Segment>
              <Button first active={this.state.room} onPress={()=>this.setState({room:true,form:false})}><Text>ROOMS</Text></Button>
              <Button last active={this.state.form} onPress={()=>this.setState({room:false,form:true})}><Text>FORM</Text></Button>
            </Segment>
          </Body>
          <Right>
            <Button transparent onPress={()=>Alert.alert('Comming Soon...')}>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
        {this.state.room &&
        <FlatList 
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          onRefresh={this._refresh}
          refreshing={this.state.loading}                                                    
        />
        }
        {this.state.form &&
            <Form2 onComplete={this._formComplete}/>

        }
      </Container>
      
    );
  }
}


const styles = StyleSheet.create({
    label:{
        
        fontStyle:'italic',
    },
    cover:{
      padding: 0,
    },
    textData:{
      fontWeight:'bold',
      color:'tomato',
    }
    
});
/*
(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:20,color:'tomato'}}>Loading</Text></View>)
<CardItem>
                   <Left>//this is for image section
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left> 
                  </CardItem>
*/