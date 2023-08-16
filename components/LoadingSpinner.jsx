import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  Pressable,
  KeyboardAvoidingView,
  ActivityIndicator
} from "react-native";

export default LoadingSpinner = () => (
  <View style={styles.spinner}>
    <ActivityIndicator size="large" color="#ffffff" />
    <Text style={styles.text}>Loading...</Text>
  </View>
)

const styles = StyleSheet.create({
  spinner: {
    position: 'absolute',
    zIndex: 999999,
    flex: 1,
    width: '100%',
    height:'100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .6)',
  },
  text: {
    fontWeight: '700',
    fontSize: 20,
    color:"#ffffff",
  },
})