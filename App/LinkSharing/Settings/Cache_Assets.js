import * as React from 'react';
import { View, Text, Image } from 'react-native';
import { AppLoading } from 'expo';
//import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
//import { FontAwesome } from '@expo/vector-icons';

function cacheImages(images) {
    console.log("Inside Cache function");
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

// function cacheFonts(fonts) {
//   return fonts.map(font => Font.loadAsync(font));
// }

class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      require('/Users/subashsharma/Documents/Projects/React Native/awesomeExpo/assets/Earth.png'),
    ]);

    //const fontAssets = cacheFonts([FontAwesome.font]);
    console.log(imageAssets);
    await Promise.all([...imageAssets]); //deleted->  ...fontAssets
  }

  render() {
    if (!this.state.isReady) {
        console.log("Inside AppLoading");
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => {console.log('inside set state');this.setState({ isReady: true })}}
          onError={console.warn}
          autoHideSplash={true}
        />
      );
    }
    console.log(this.state.isReady);
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text>Hello world, this is my app.</Text>
        <Image source={require('/Users/subashsharma/Documents/Projects/React Native/awesomeExpo/assets/Earth.png')} />
      </View>
    );
  }
}






import Test from '../Components/Test';
export default AppContainer