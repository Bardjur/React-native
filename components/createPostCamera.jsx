import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { FontAwesome } from '@expo/vector-icons';

export default function CreatePostsCamera({setPhoto, photo}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [snap, setSnap] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
      console.log(snap);
    })();
  },[snap]);

  const takePhoto = async () => {
    const photo = await snap.takePictureAsync();
    setPhoto(photo.uri)
  }

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
      <View>
        <View style={styles.photoContainer}>
          <Camera  ref={setSnap} style={styles.cameraView}>
            <TouchableOpacity style={styles.photoBtn} onPress={takePhoto}>
              <FontAwesome name="camera" size={24} color="#fff" />
            </TouchableOpacity>
          </Camera>
          
          {photo && (
            <Image source={{ uri: photo }} style={styles.snap} />
          )}
        </View>

        <Text style={styles.text}>Завантажте фото</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  photoContainer: {
    aspectRatio: 1.43,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    overflow:"hidden",
  },

  cameraView: {
    width: "100%",
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
  },

  photoBtn: {
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, .4)",
    borderRadius: 60,
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

  text: {
    marginTop: 8,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#BDBDBD",
  },
})
