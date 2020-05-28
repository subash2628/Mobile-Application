// import React from 'react';
// import {Text,View,StyleSheet, ActivityIndicator,Alert,ScrollView, RefreshControl} from 'react-native';
// import Test from '../Components/Test';
// //import DB from '../Functions/GetDB';


// //import Header from  '../Functions/GiveHeader';
// import ListItems from '../Functions/ListItem';
// //import OverLay from '../Functions/GiveOverLay';




// // import {Button } from 'react-native-elements'

// class RenderList extends React.Component {

//     render(){
  
//         //return( <Test/>);
//         const {Refresh, LoadingForRefreshControl,Links,db,ChangeTab, PasswordFlag} = this.props;
        
//         //console.log(`isvisibleoverlay: ${Props.isVisibleOverlay}`);

        
//             return( 
//                 <View style={styles.container}>
                    
                    

//                     {/* <OverLay 
//                          db={Props.db}
//                          isVisible={Props.isVisibleOverlay} 
//                          disableOverlay={()=> Props.HandleOverlay(false)}
//                          refresh={()=> Props.FetchLinks()}
//                     /> */}

                    

//                     <ScrollView refreshControl={ 
//                                     <RefreshControl
//                                         refreshing={LoadingForRefreshControl} 
//                                         onRefresh={()=> Refresh()} 
//                                     />
//                             }>
                        
//                         <ListItems 
//                             db={db} 
//                             list={Links} 
//                             Refresh={()=>Refresh()}
//                             ChangeTab={(no)=>ChangeTab(no)}
//                             PasswordFlag={PasswordFlag}
//                         /> 
//                     </ScrollView>
//                 </View>
//             );
//         } 
//     //return (<View style={styles.loadingView}><ActivityIndicator size="large" color="#00ff00" /></View>);
    
// }




// const styles = StyleSheet.create({
//     container:{
//         flex:1,
//     },
//     loadingView: {
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     }
// });


// export default RenderList



// //{/*this._changeVisibilityStatusBar()*/}
// state = {
//     isLoading: true,
//     Links: null,
//     VisibleOverlay: false,   
       
// }

//   componentDidMount(){
        
//          this._fetchLinks();
//   }

//   _fetchLinks =()=>{
      
//     try{
//         let db = this.props.db;
//         let PdfRef = db.collection("Pdf's");
//             let Arrays = [];
//             PdfRef.get().then((Documents)=>{
//                 Documents.forEach((doc)=>{
//                     //console.log(doc.id);
//                     let data = doc.data();
//                     let obj = { id: doc.id, Name: `${data.name}`, Link: `${data.Link}`, Author:`${data.Author}`};
//                     Arrays.push(obj);
//                     //console.log(obj)
//                 })}).then(()=> {this.setState({Links:[...Arrays], isLoading:false})}); 
//     }catch(error){Alert.alert("Error Network")}      
// }

// _handleOverlay=(bool)=>{ this.setState({VisibleOverlay:bool})}
// _refresh =()=> {this.setState({isLoading:true}); this._fetchLinks()}
// //console.log(`handleoverlay: ${bool}`);

// render() {
//     //let Props = this.props;
//     let Props = this.props;
//     let State = this.state;
 
//     return(

//             );