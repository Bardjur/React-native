import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Image,
} from "react-native";
import { db } from "../../../firebase/config";
import { collection, addDoc, doc, getDocs, onSnapshot } from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors";
import { useEffect } from "react";
import CommentItem from "../../../components/CommentItem";

export default function CommentsScreen({ route }) {
  const {userId, name:userName} = useSelector(selectUser);
  const {id, photo} = route.params;
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  },[]);

  const createPost = async ()=> {
    try {
      const ref = await doc(db, 'posts', id);
      const docRef = await addDoc(collection(ref, "comments"), {
        userId,
        userName,
        comment,
      });
      console.log('Document written with ID: ', docRef.id);
      setComment('');
    } catch (error) {
      console.log(error);
    }
  }

  const getComments = async () => {
    try {
      const ref = await doc(db, 'posts', id);

      await onSnapshot(collection(ref, 'comments'), (snapshot) => {
        const comments = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }))
        setComments(comments);
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.photoWrap}>
          <Image
            source={{uri: photo}}
            style={styles.photo}
          />
        </View>
        <FlatList
            data={comments}
            renderItem={({ item }) => { return (
              <CommentItem commentData={item}/>
            )}}
            keyExtractor={(_, idx) => idx.toString()}
            
          />
          <View style={{marginTop:"auto", backgroundColor: "#fff",}}>
            <TextInput
              multiline
              editable
              numberOfLines={2}
              style={styles.input}
              placeholderTextColor="#BDBDBD"
              placeholder="Залиште коментар"
              value={comment}
              onChangeText={(e)=>{setComment(e)}}
            />
            <TouchableOpacity style={styles.button} onPress={createPost} disabled={comment == ''}>
              <Text style={styles.buttonText}>Опубліковати</Text>
            </TouchableOpacity>
          </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#fff",
    paddingHorizontal: 15,
    paddingBottom:10,
  },
  photoWrap: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    alignSelf:"center",
    aspectRatio: 1.43,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    marginBottom:3,
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  input: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#212121",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
    maxHeight: 80,
    marginTop:5,
  },

  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 10,
  },

  buttonText: {
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#FFFFFF",
    textAlign: "center",
  },
})