import React from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";
import InAppBrowser from 'react-native-inappbrowser-reborn';

// const supportedURL = "https://google.com";

// const unsupportedURL = "slack://open?team=123456";


const OpenInApp = async()=>{
  try {
      console.log('Inside OpenInApp');
        const isAvailable = await InAppBrowser.isAvailable()
        const url = 'https://www.google.com'
        console.log('isAvailable', isAvailable);
            if (isAvailable) {
                await Linking.open(url)
                // const result = await InAppBrowser.open(url, {
                //     // iOS Properties
                //     dismissButtonStyle: 'cancel',
                //     preferredBarTintColor: '#453AA4',
                //     preferredControlTintColor: 'white',
                //     readerMode: false,
                //     animated: true,
                //     modalPresentationStyle: 'overFullScreen',
                //     modalTransitionStyle: 'partialCurl',
                //     modalEnabled: true,
                //     enableBarCollapsing: false,
                //     // Android Properties
                //     showTitle: true,
                //     toolbarColor: '#6200EE',
                //     secondaryToolbarColor: 'black',
                //     enableUrlBarHiding: true,
                //     enableDefaultShare: true,
                //     forceCloseOnRedirection: false,
                //     // Specify full animation resource identifier(package:anim/name)
                //     // or only resource name(in case of animation bundled with app).
                //     animations: {
                //       startEnter: 'slide_in_right',
                //       startExit: 'slide_out_left',
                //       endEnter: 'slide_in_left',
                //       endExit: 'slide_out_right'
                //     },
                //     headers: {
                //       'my-custom-header': 'my custom header value'
                //     }
                //   })

                //   Alert.alert(JSON.stringify(result))
                }


                else Linking.openURL(url)
              } catch (error) {
                Alert.alert(error.message)
              }
            }




// const OpenURLButton = ({ url, children }) => {
//   const handlePress = useCallback(async () => {
//     // Checking if the link is supported for links with custom URL scheme.
//     const supported = await Linking.canOpenURL(url);

//     if (supported) {
//       // Opening the link with some app, if the URL scheme is "http" the web link should be opened
//       // by some browser in the mobile
//       await Linking.openURL(url);
//     } else {
//       Alert.alert(`Don't know how to open this URL: ${url}`);
//     }
//   }, [url]);

//   return <Button title={children} onPress={handlePress} />;
// };


const App = () => {
  return (
    <View style={styles.container}>
      
     <Button title='Browser Support' onPress={()=> OpenInApp()}/>
    </View>
  );
};

export default App;



const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});