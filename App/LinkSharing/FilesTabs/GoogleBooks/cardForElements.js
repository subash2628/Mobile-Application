import React from 'react';
import { Image, Alert,Button,TouchableWithoutFeedback ,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, Subtitle } from 'native-base';

import Linking from '../../Functions/DeepLinking';

export default function({title, image,subtitle,pageCount,previewLink,rating,publisher,catagory}){

return(
    
        <Card>
                
                <CardItem cardBody>
                    <Left>
                        <Image source={{uri: image}} style={{height: 180, width: 130}}/>                    
                        <Body>
                            <Text>{title}</Text>
                            <Text note>{subtitle}</Text>
                            <Text style={{marginTop:5}}note>pageCount: {pageCount}</Text>
                            <Text note >publisher: {publisher} </Text>
                            <Text note>catagory: {catagory}</Text>
                            <Text note style={{marginBottom:5}}>rating: {rating? rating: 'Not Available'} </Text>
                            <TouchableOpacity onPress={()=>{console.log('Linking',previewLink);Linking(previewLink)}}><Text style={{color:'blue'}}>READ</Text></TouchableOpacity>
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