import {
  StyleSheet,
  View,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function CommentsScreen({ route }) {

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...route.params,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {route.params && (
          <Marker title="I am here" coordinate={route.params} description="Hello" />
        )}
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});
