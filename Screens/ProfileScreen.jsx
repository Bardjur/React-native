import {authContext} from "../authContext";
import { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import PostItemCopy from "../components/PostItemCopy";

export default function ProfileScreen() {
  const { setIsAuth } = useContext(authContext);
  
  return (
    <View style={styles.container}>
      <View style={styles.userWrap}>
        <ImageBackground
        source={require("../assets/imgs/PhotoBG.jpg")}
        style={styles.bgImages}
      >
        <View style={styles.userInfo}>

          <View style={styles.avatarWrap}>
            <View style={styles.avatarImgWrap}>
              <Image
                source={require('../assets/imgs/Rectangle.png')}
              />
            </View>
            <TouchableOpacity style={styles.removeAvatarBtn}>
              <Entypo name="cross" size={23} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
            
          <TouchableOpacity  style={styles.logout} onPress={()=> {setIsAuth(false)}}>
            <MaterialIcons name="logout" size={25} color="#BDBDBD"/>
          </TouchableOpacity>

          <Text style={styles.avatarText}>User Name</Text>
        </View>
      </ImageBackground>
      </View>

      <ScrollView style={styles.postsWrap}>
        <PostItemCopy />
        <PostItemCopy />
        <PostItemCopy />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  userWrap: {
    height:290,
    backgroundColor: "#fff",
  },
  bgImages: {
    flex: 1,
    justifyContent: 'flex-end'
  },

  userInfo: {
    paddingTop:90,
    backgroundColor: '#ffffff',
    paddingBottom: 30,
    marginTop:60
  },

  logout: {
    position: "absolute",
    right: 10,
    top: 19,
  },

  avatarWrap: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    position: 'absolute',
    top: -62,
    alignSelf: "center",
    borderRadius: 16,
  },

  avatarImgWrap: {
    overflow: "hidden",
    borderRadius: 16,
  },

  removeAvatarBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 13,
    backgroundColor:"#fff",
  },

  avatarText: {
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: 700,
    color: "#212121",
    textAlign:"center",
  },

  postsWrap: {
    flex: 1,
    padding: 16,
    paddingTop: 0,
    backgroundColor: "#fff",
  },

})