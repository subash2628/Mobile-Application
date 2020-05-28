
import React from 'react';
import {View,Text,FlatList,ActivityIndicator, Alert} from 'react-native';
import { Card, ListItem, Button, Icon ,Image} from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context';


//import Head from '../TabBarWithScreens/HeaderForTab';
import HeaderForBooks from './HeaderForBooks';
import CardForElements from './cardForElements';

export default class Books extends React.Component{
    state={
        isLoading: true,
        bookList: null,
        message: null,
    }

    componentDidMount(){
        this._fetchBooks({query: 'machinelearning&maxResults=20'});
    }

    _fetchBooks=({query})=>{
        //console.log('fetching', query);
        let Arrays =[];
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
        .then((response)=> response.json())
        .then((responseJson)=> {

            //this.setState({bookList: responseJson.items , isLoading:false})
            //console.log(responseJson.items);

            responseJson.items.forEach((book)=>{
                //console.log(book);
                let obj = { id: book.id,
                            title: book.volumeInfo.title,
                            subtitle: book.volumeInfo.subtitle, 
                            image: book.volumeInfo.imageLinks? book.volumeInfo.imageLinks.thumbnail : null,
                            pageCount: book.volumeInfo.pageCount,
                            previewLink: book.volumeInfo.previewLink,
                            rating: book.volumeInfo.averageRating,
                            publisher: book.volumeInfo.publisher,
                            catagory: book.volumeInfo.categories? book.volumeInfo.categories : null
                        };
                Arrays.push(obj);
            })
        })
        .then(()=> {this.setState({bookList:Arrays, isLoading:false,message:'OK'})})
        .catch((error)=>{console.log('Error',error); this.setState({isLoading:false, message:'ERROR'});})
    }
    
//style={{flex:1}}
    render(){
        //console.log('List',this.state.bookList);
        return(
            
            <View style={{flex:1, marginBottom:60}}>
                <HeaderForBooks searchBooks={this._fetchBooks}/>
                {!this.state.isLoading && this.state.message==='OK' &&
                    (<View>
                        <FlatList
                            data={this.state.bookList}
                            renderItem={({item})=> <CardForElements 
                                                        title={item.title} 
                                                        image={item.image} 
                                                        subtitle={item.subtitle}
                                                        pageCount={item.pageCount}
                                                        previewLink={item.previewLink}
                                                        rating={item.rating}
                                                        publisher={item.publisher}
                                                        catagory={item.catagory}
                                                    />}
                            keyExtractor={item => item.id}
                            //onRefresh={()}
                    /></View>)
                }
                {this.state.isLoading &&
                    (<View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>   
                        <Text style={{fontSize:20,color:'green'}}>
                            Loading Recommended Books...
                        </Text>
                        
                    </View>)
                }
                {
                    this.state.message==='ERROR' && 
                    (<View style={{ flex:1,justifyContent:'center',alignItems:'center'}}>   
                        <Text style={{fontSize:20,color:'red'}}>
                            Error Loading Books
                        </Text>
                        
                    </View>)
                }
            </View>
            
        );
    }
}



/*
    _renderItem = ( {item} ) => {
        //console.log('image', item.image)
        //return(<CardForElements title={item.title} image={item.image}/>);
        return(
        //console.log('item', item)
        <Card
            title={item.title}>
            <Image
                  source={{ uri: `${item.image}` }}
                  style={{ width: '100%', height: 200 }}
                  PlaceholderContent={<ActivityIndicator />} 
            />
            <Text style={{marginBottom: 5,marginTop:5}}>
                {item.subtitle}
            </Text>
            <Button
                onPress={()=> {Alert.alert('Behaviour Not added')}}
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='VIEW NOW' />
      </Card>
    )}
*/