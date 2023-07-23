import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { FontAwesome, Octicons, Feather} from '@expo/vector-icons';
import { useEffect, useState } from "react";

export default function CreatePostsScreen() {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const hideKeyboard = () => {
    Keyboard.dismiss();
  }

  useEffect(() => {
    const hideKeyboard = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardShow(false);
    });

    return () => {
      hideKeyboard.remove();
    };
  }, []);

  return (
    <TouchableWithoutFeedback onPress={hideKeyboard}>
    <View style={styles.container}>
      <View>
        <View style={styles.photoWrap}>
          <TouchableOpacity style={styles.photoBtn}>
            <FontAwesome name="camera" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Завантажте фото</Text>
      </View>

      <KeyboardAvoidingView
        behavior={'position'}
        contentContainerStyle={{backgroundColor:"#fff",}}
      >
        <View style={{marginTop:16}}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#BDBDBD"
            placeholder="Назва..."
            onFocus={() => { setIsKeyboardShow(true)}}
          />
        </View>

        <View style={{marginTop:16}}>
          <TextInput
            style={[styles.input, { paddingLeft: 28 }]}
            placeholderTextColor="#BDBDBD"
            placeholder="Місцевість..."
            onFocus={() => { setIsKeyboardShow(true)}}
          />
          <TouchableOpacity style={styles.locationBtn} onPress={() => {}}>
            <Octicons name="location" size={24} color="#BDBDBD" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Опубліковати</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <TouchableOpacity activeOpacity={.6} style={[styles.clearForm,{marginTop: isKeyboardShow? 0 : "auto"}]} onPress={() => {}}>
        <Feather name="trash-2" size={24} color="#BDBDBD" />
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

  photoWrap: {
    backgroundColor: "#F6F6F6",
    aspectRatio: 1.43,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
  },
  photoBtn: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, .7)",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#BDBDBD",
  },

  input: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingVertical: 10,
  },

  locationBtn: {
    position: "absolute",
    bottom: 10,
  },

  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 16,
  },

  buttonText: {
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#FFFFFF",
    textAlign: "center",
  },

  clearForm: {
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