import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import RegistrationScreen from "./components/RegistrationScreen";
import LoginScreen from "./components/LoginScreen";
import PostsScreen from "./Screens/PostsScreen";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/imgs/PhotoBG.jpg")}
          style={styles.bgImages}
          imageStyle={styles.image}
        >
          <RegistrationScreen />
          {/* <LoginScreen /> */}
        </ImageBackground>
        {/* <PostsScreen /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  bgImages: {
    flex: 1,
  },
  image: {},
});
