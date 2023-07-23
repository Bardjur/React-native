import {
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainBlock}>
        <View style={styles.authorBlock}>
          <View style={styles.authorImgWrap}>
            <Image source={require('../../assets/imgs/Rectangle22.png')} />
          </View>
          <View>
            <Text style={styles.authorTextName}>Natali Romanova</Text>
            <Text style={styles.authorTextMail}>email@example.com</Text>
          </View>
        </View>
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
  },

  authorBlock: {
    flexDirection: "row",
    alignItems: "center",
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