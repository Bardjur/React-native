import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import PostItem from "../../../components/PostItem"

export default function DefaultPostsScreen({navigation, route}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevPosts) => [...prevPosts, route.params])
    }
  }, [route.params]);
  
  return (
    <View style={styles.container}>
      <View style={styles.mainBlock}>
        <View style={styles.authorBlock}>
          <View style={styles.authorImgWrap}>
            <Image source={require('../../../assets/imgs/Rectangle22.png')} />
          </View>
          <View>
            <Text style={styles.authorTextName}>Natali Romanova</Text>
            <Text style={styles.authorTextMail}>email@example.com</Text>
          </View>
        </View>
        <FlatList
          data={posts}
          renderItem={({ item }) => { return (<PostItem postData={item} navigation={navigation} />)}}
          keyExtractor={(_, idx) => idx.toString()}
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