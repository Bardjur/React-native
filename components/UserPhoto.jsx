import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { FontAwesome } from '@expo/vector-icons';

export default function UserPhoto({style, photo, setPhoto}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [snap, setSnap] = useState(null);
  const [isOpenCamera, setIsOpenCamera] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const takePhoto = async () => {
    const img = await snap.takePictureAsync();
    setPhoto(img.uri)
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{...styles.imgWrap, ...style}}>
    <View style={styles.cameraWrap}>
      {isOpenCamera && (<Camera  ref={setSnap} style={styles.cameraView}>
        <TouchableOpacity style={styles.photoBtn} onPress={takePhoto}>
          <FontAwesome name="camera" size={18} color="#fff" />
        </TouchableOpacity>
      </Camera>
    )}
    {photo && (
      <Image source={{ uri: photo }} style={styles.snap} />
    )}</View>
      {!isOpenCamera && (<TouchableOpacity style={styles.addBtn} onPress={() => { setIsOpenCamera(true) }}>
        <ImageBackground
          source={require("../assets/imgs/add.png")}
          resizeMode="cover"
          style={styles.addBtnBg}></ImageBackground>
      </TouchableOpacity>)}
    </View>
  )
}

const styles = StyleSheet.create({
  imgWrap: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    alignSelf: "center",
    borderRadius: 16,
  },

  addBtn: {
    position: "absolute",
    bottom: 14,
    right: -12,
    width: 25,
    height: 25,
  },

  addBtnBg: {
    flex: 1,
    justifyContent: 'center',
  },

  cameraWrap: {
    borderRadius: 16,
    overflow: "hidden",
  },

  cameraView: {
    width: "100%",
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F6F6F6',
  },

  photoBtn: {
    width: 30,
    height: 30,
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  snap: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0
  },
})
