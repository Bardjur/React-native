import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { FontAwesome, AntDesign, Octicons} from '@expo/vector-icons';

export default function PostItem() {
  return (
    <View style={styles.container}>
      <View style={styles.photoWrap}>
        <Image
          source={require('../assets/imgs/pic.png')}
          style={styles.photo}
        />
      </View>
      <Text style={styles.title}>Ліс</Text>
      <View style={styles.interactionWrap}>
        <View style={styles.interaction}>
          <FontAwesome name="comment" style={styles.interactionIcon} size={24}  />
          <Text>8</Text>
        </View>
        <View style={[styles.interaction,{marginLeft:24}]}>
          <AntDesign name="like2" size={24} style={styles.interactionIcon} />
          <Text>153</Text>
        </View>
        <View style={[styles.interaction,{marginLeft:"auto"}]}>
          <Octicons name="location" size={24}  style={[styles.interactionIcon,{color:"#BDBDBD"}]} />
          <Text>Ukraine</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom:32,
  },

  photoWrap: {
    backgroundColor: "#F6F6F6",
    aspectRatio: 1.43,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  title: {
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight:700,
    color: "#212121",
  },
  interactionWrap: {
    flexDirection:"row",
  },
  interaction: {
    flexDirection: "row",
    alignItems: "center",
  },
  interactionIcon: {
    marginRight: 8,
    color: "#FF6C00",
  },
})