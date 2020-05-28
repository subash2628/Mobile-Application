import * as Updates from 'expo-updates';
import React from 'react';
import {Alert, ToastAndroid} from 'react-native';

 export default async() =>
 {
    try {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
                const isNew = await Updates.fetchUpdateAsync();
                // ... notify user of update ...
                isNew ? Alert.alert(
                    "New Updates Available",
                    "Reload?",
                    [
                      {
                        text: "Cancel",
                        onPress: () => ToastAndroid.show("Loading Older Version !", ToastAndroid.SHORT),
                        style: "cancel"
                      },
                      { text: "OK", onPress: async() => {
                                            ToastAndroid.show("Loading New Version !", ToastAndroid.SHORT),
                                            await Updates.reloadAsync() 
                                                    }
                        }
                    ],
                    { cancelable: false }
                  ): null;
                
        }
    } catch (e) {
        // handle or log error
        console.log(e);
    }
 }

 