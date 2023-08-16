import {
  StyleSheet,
  Text,
  View,
} from "react-native";
export default CommentItem = ({commentData}) => {
  return (
    <View style={styles.wrap}>
      <Text style={styles.comment}>{commentData.comment}</Text>
      <Text style={styles.name}>{commentData.userName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    borderRadius: 6,
    marginTop: 5,
    padding: 5,
    paddingHorizontal: 10,
  },
  comment: {
    
  },
  name: {
    fontSize:13,
    textAlign: "right",
    fontWeight: "700",
    fontStyle: "italic",
  }

})