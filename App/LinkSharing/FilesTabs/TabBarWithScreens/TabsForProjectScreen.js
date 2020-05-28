import React from 'react';

import { Container,Content, Tab, Tabs, TabHeading, Icon, Text} from 'native-base';
import Tab1 from './Tab_1';
import Tab2 from './Tab_2';
import Tab3 from './Tab_3';
import App from '../Network/CheckNetworkConnection';
//import Tab_0_camera from './Tab_0';

class GiveTabs extends React.Component{
    //function({db, isLoading, Links, Refresh}){
   // console.log(`loading: ${isLoading} Visibleoverlay:${VisibleOverlay}`);
   //const [ActiveTab, ChangeTab] = React.useState(0);
   //console.log(`ActiveTab: ${ActiveTab}`);

   state={
    DefaultTab: 0,
    ActivePage:0,
    ChangePasswordFlag:null,
   }

   _changeTab =(TabNo)=>{
       this.setState({ActivePage: TabNo});
   }
   _changePasswordFlag=(ChangePasswordFlag)=>{
       //console.log(`${}`);
        this.setState({ChangePasswordFlag});
   }
   render(){
        
        const {db, Links, LoadingForRefreshControl,Refresh} = this.props;

        return(
            <Container>
                <Tabs tabContainerStyle={{ elevation: 0 }} initialPage={this.state.DefaultTab} page={this.state.ActivePage}>
                                {/* <Tab heading={ <TabHeading style={{backgroundColor:'gray'}}><Icon name="camera" /></TabHeading>}>
                                    <Tab_0_camera />
                                </Tab> */}
                                <Tab heading={ <TabHeading style={{backgroundColor:'gray'}}><Icon name="apps" /></TabHeading>}>
                                    <Tab1 
                                        db={db} 
                                        LoadingForRefreshControl={LoadingForRefreshControl}
                                        Links={Links} 
                                        Refresh={()=> Refresh()}
                                        PasswordFlag={this.state.ChangePasswordFlag}
                                        ChangeTab={(no)=>this._changeTab(no)}
                                        //isVisibleOverlay = {VisibleOverlay}
                                        //HandleOverlay={(bool)=>{ HandleOverlay(bool)}}
                                        //Refresh = {()=> _refresh()}
                                    />
                                </Tab>
                                <Tab heading={ <TabHeading style={{backgroundColor:'gray'}}><Icon name="add" /></TabHeading>}>
                                    <Tab2 
                                        db={db} 
                                        Refresh={()=> {Refresh()}} 
                                        onChangeTab={(no)=>{this._changeTab(no)}}
                                    />
                                </Tab>
                                <Tab heading={ <TabHeading style={{backgroundColor:'gray'}}><Icon name="list" /></TabHeading>}>
                                    <Tab3 ChangePasswordFlag={(flag)=> {console.log(flag);this._changePasswordFlag(flag)}}/>
                                </Tab>
            </Tabs>
        </Container>
        );
    }
}


export default GiveTabs;
//Tab1 and Props, Tab2,Tab3
//console.log(`Tab1: ${bool}`);


//console.log(`ActiveTab: ${no}`);


