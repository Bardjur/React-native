import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function PostsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headBlock}>
        <Text style={styles.headTitle}>Публікації</Text>
        <TouchableOpacity style={styles.logout}  activeOpacity={0.7}>
          <Image source={require('../assets/imgs/log-out.png')}/>
        </TouchableOpacity>
      </View>

      <View style={styles.mainBlock}>
        <View style={styles.authorBlock}>
          <View style={styles.authorImgWrap}>
            <Image source={require('../assets/imgs/Rectangle22.png')} />
          </View>
          <View>
            <Text style={styles.authorTextName}>Natali Romanova</Text>
            <Text style={styles.authorTextMail}>email@example.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.footerBlock}>
        <TouchableOpacity style={styles.footerBtn} activeOpacity={0.5}>
          <Image source={require('../assets/imgs/grid.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerBtn, styles.footerAddBtn]} activeOpacity={0.5}>
          <Image source={require('../assets/imgs/new.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerBtn} activeOpacity={0.5}>
          <Image source={require('../assets/imgs/user.png')}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 11,
    borderBottomWidth: 1,
    borderBottomColor:"#E8E8E8",
  },

  headTitle: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 17,
    color: "#212121",
  },

  logout: {
    position: "absolute",
    width: 24,
    height: 24,
    right: 10,

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




  footerBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 22,
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
    marginTop: "auto",
  },

  footerBtn: {
    width: 40,
    height: 40,
    overflow: "hidden",
  },

  footerAddBtn: {
    width: 70,
    marginHorizontal: 30
  }
});