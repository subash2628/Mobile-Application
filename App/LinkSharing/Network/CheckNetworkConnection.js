import * as Network from 'expo-network';
// import TabsWithContent from '../TabBarWithScreens/TabEntry';
// import Test from '../Components/Test';
 


const App = async()=>{
    let response =  await Network.getNetworkStateAsync();
    //console.log(response);
    if(response.isConnected && response.isInternetReachable){
        return true;
    }
    return false;
}



export default App;