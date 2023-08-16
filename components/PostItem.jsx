import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import { FontAwesome, AntDesign, Octicons} from '@expo/vector-icons';

export default function PostItem({navigation, postData:{ location, locationName, caption, photo, like = 0,  id }}) {
  return (
    <View style={styles.container}>
      <View style={styles.photoWrap}>
        <Image
          source={{uri: photo}}
          style={styles.photo}
        />
      </View>
      <Text style={styles.title}>{ caption }</Text>
      <View style={styles.interactionWrap}>
        <Pressable style={styles.interaction} onPress={() => navigation.navigate('comments', {id,photo})}>
          <FontAwesome name="comment" style={styles.interactionIcon} size={24}  />
        </Pressable>
        {like ? (<View style={[styles.interaction, { marginLeft: 24 }]}>
          <AntDesign name="like2" size={24} style={styles.interactionIcon} />
          <Text>{like}</Text>
        </View>) : ""}
        <Pressable style={[styles.interaction,{marginLeft:"auto"}]} onPress={()=>navigation.navigate('map', location)}>
          <Octicons name="location" size={24}  style={[styles.interactionIcon,{color:"#BDBDBD"}]} />
          <Text>{locationName}</Text>
        </Pressable>
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