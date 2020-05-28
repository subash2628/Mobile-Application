import React from 'react';
import { Image, Alert,Button,TouchableWithoutFeedback ,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Subtitle } from 'native-base';

import Linking from '../../../Functions/DeepLinking';

export default function({id, title, image,channelName,channelId}){
    const Link = `https://www.youtube.com/embed/${id}`;
    const channelLink =`https://www.youtube.com/embed/${channelId}`;
return(
    
        <Card>
                
                <CardItem cardBody>
                    <Left>
                        <Image source={{uri: image}} style={{height: 100, width: 130}}/>                    
                        <Body>
                            <Text style={{marginBottom:10}}>{title}</Text>
                            
                            <TouchableOpacity><Text note style={{color:'green', marginBottom: 10}}> channel: {channelName}</Text></TouchableOpacity>
                            <TouchableOpacity onPress={()=>{Linking(Link)}}><Text style={{color:'blue'}}> WATCH</Text></TouchableOpacity>
                    </Body>
                </Left>
                
                </CardItem>
                {/* <CardItem>
                    <Text>{title}</Text>
                </CardItem> */}
        </Card>
    
    
);
}

/*
                            <Text note >channel: {channelName}</Text>
                            <Text note>{subtitle}</Text>
                            <Text style={{marginTop:5}}note>pageCount: {pageCount}</Text>
                            <Text note >publisher: {publisher} </Text>
                            <Text note>catagory: {catagory}</Text>
                            <Text note style={{marginBottom:5}}>rating: {rating? rating: 'Not Available'} </Text>
<Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
*/