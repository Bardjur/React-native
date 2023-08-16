import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import PostItem from "../../../components/PostItem";
import { useSelector } from "react-redux";
import { selectUser } from "../../../redux/auth/selectors";
import { collection, onSnapshot } from 'firebase/firestore'; 
import { db } from "../../../firebase/config";

export default function DefaultPostsScreen({ navigation }) {
  const { name, email } = useSelector(selectUser);
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      await onSnapshot(collection(db, 'posts'), (snapshot) => {
        const posts = snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }))
        setPosts(posts);
      })
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getPosts()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.mainBlock}>
        <View style={styles.authorBlock}>
          <View style={styles.authorImgWrap}>
            <Image source={require('../../../assets/imgs/Rectangle22.png')} />
          </View>
          <View>
            <Text style={styles.authorTextName}>{name}</Text>
            <Text style={styles.authorTextMail}>{email}</Text>
          </View>
        </View>
        <FlatList
          data={posts}
          renderItem={({ item }) => { return (<PostItem postData={item} navigation={navigation} />)}}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  mainBlock: {
    paddingTop: 32,
    paddingHorizontal: 16,
    flex:1
  },

  authorBlock: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom:32
  },

  authorImgWrap: {
    width: 60,
    height: 60,
    overflow: "hidden",
    borderRadius: 16,
    marginRight: 8,
  },

  authorTextName: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 13,
  },

  authorTextMail: {
    fontFamily: "Roboto",
    fontSize: 11,
  },

});