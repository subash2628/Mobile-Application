
import database from '../LinkSharing/Functions/GetDB';
import {Alert} from 'react-native';

export default async function({image,contact,location,no_of_room,kitchen,price,loadingButton,cleanForm,onComplete}){
        const id = Date.now();
        //console.log('id: ',id);
    try{
        const response = await fetch(image);
        const blob = await response.blob();
        //console.log('blob: ',blob);
        const db = database().db();
        //console.log('db: ',db);

        const storageRef = database().storage().ref();

        const ImageRef = storageRef.child(`Images/${id}.jpg`);

        ImageRef.put(blob).then(()=>{
            //console.log('image uploaded!');//now get url of image...
            ImageRef.getDownloadURL()
                .then((url)=>{
                    //console.log('remote url: ',url);

                    db.collection('Room_Finder').doc(`${id}`).set({
                        contact:contact,
                        location:location,
                        no_of_room:no_of_room,
                        kitchen: kitchen,
                        price:price,
                        imageUrl:url
                    }).then(()=>{
                        //console.log('adding done');

                        loadingButton(false);
                        cleanForm();
                        Alert.alert('Successfully added.');
                        onComplete();
                    }).catch((err)=>console.log('data adding error: ',err));

                })
                .catch((err)=>console.log('url download error: ',err));
        })
        .catch((error)=>{console.log('upload error: ',error)});


    }catch(E){
        console.log('Error trycatch: ',E);
    }
    
}

  

