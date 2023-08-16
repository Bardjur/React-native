import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import CreatePostForm from "../../components/CreatePostForm";
import CreatePostsCamera from "../../components/CreatePostCamera";
import { storage, db } from "../../firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import LoadingSpinner from "../../components/LoadingSpinner";



export default function CreatePostsScreen({navigation}) {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {userId, name:userName} = useSelector(selectUser);

  useEffect(() => {
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShow(false);
  });
    return () => {
      hideKeyboard.remove();
    };
  }, []);

  const handleSubmit = (data) => {
    setIsLoading(true);
    uploadPost(data);
    navigation.navigate('defaultPostsScreen');
    setPhoto(null);
  }

  const uploadPhoto = async () => {
    const response = await fetch(photo);
    const file = await response.blob();

    const imgId = Date.now().toString();

    const storageRef = await ref(storage, `picture/${imgId}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(ref(storage, `picture/${imgId}`))
  }

  const uploadPost = async (data) => {
    photoUrl = await uploadPhoto();
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        userId,
        userName,
        photo: photoUrl,
        ...data,
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    } finally {setIsLoading(false);}
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <CreatePostsCamera setPhoto={setPhoto} photo={photo}/>

      <CreatePostForm setIsKeyboardShow={setIsKeyboardShow} disabled={!photo} onSubmit={handleSubmit}/>

      <TouchableOpacity 
        disabled={!photo}
        activeOpacity={.6}
        style={{
          ...styles.clearSnap,
          backgroundColor:photo ? "#FF6C00":"#F6F6F6",
          marginTop: isKeyboardShow ? 0 : "auto"
        }}
        onPress={() => {setPhoto(null)}}>
        <Feather name="trash-2" size={24} color={ photo? "#fff" :"#BDBDBD"} />
      </TouchableOpacity>
      {isLoading && <LoadingSpinner/>}
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },

  clearSnap: {
    marginTop:"auto",
    maxWidth:70,
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems:"center",
    alignSelf: "center",
    justifyContent: "center",
    backgroundColor:"#F6F6F6",
  },
})