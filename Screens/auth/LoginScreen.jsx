import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import LoginForm from "../../components/LoginForm";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/auth/selectors";

export default function LoginScreen({ navigation }) {
  const isLoading = useSelector(selectIsLoading);

  return (
  <>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/imgs/PhotoBG.jpg")}
          style={styles.bgImages}
          imageStyle={styles.image}
        >
          <LoginForm navigation={navigation} />
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
    {isLoading && <LoadingSpinner/>}
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  bgImages: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  image: {
    resizeMode:'cover',
    width:'100%',
    height:'100%'
  }

})
