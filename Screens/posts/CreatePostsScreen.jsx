import {
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import CreatePostForm from "../../components/createPostForm";
import CreatePostsCamera from "../../components/createPostCamera";

export default function CreatePostsScreen({navigation}) {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShow(false);
  });
    return () => {
      hideKeyboard.remove();
    };
  }, []);

  const handleSubmit = (data) => {
    navigation.navigate('defaultPostsScreen', {...data, photo});
    setPhoto(null);
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