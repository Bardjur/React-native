import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import { Octicons } from '@expo/vector-icons';
import { useState } from "react";
import * as Location from "expo-location";

export default function createPostForm({setIsKeyboardShow, onSubmit, disabled}) {
  const [name, setName] = useState('');
  const [locationName, setLocationName] = useState('');

  const  getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.log("Permission to access location was denied");
      return null
    }
    
    let location = await Location.getCurrentPositionAsync({});
    const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
    };
    return coords
  }
  
  const handlePress = async () => {
    const location = await getLocation();
    onSubmit({name, locationName, location})
    setName('');
    setLocationName('');
  }

  return (
    <KeyboardAvoidingView
    behavior={'position'}
    contentContainerStyle={{backgroundColor:"#fff",}}
  >
    <View style={{marginTop:16}}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#BDBDBD"
        placeholder="Назва..."
        onFocus={() => { setIsKeyboardShow(true)}}
        value={name}
        onChangeText={(e)=>{setName(e)}}
      />
    </View>

    <View style={{marginTop:16}}>
      <TextInput
        style={[styles.input, { paddingLeft: 28 }]}
        placeholderTextColor="#BDBDBD"
        placeholder="Місцевість..."
        onFocus={() => { setIsKeyboardShow(true)}}
        value={locationName}
        onChangeText={(e)=>{setLocationName(e)}}
      />

      <Octicons name="location" style={styles.locationIcon} size={24} />
    </View>

    <TouchableOpacity style={styles.button} onPress={handlePress} disabled={disabled}>
      <Text style={styles.buttonText}>Опубліковати</Text>
    </TouchableOpacity>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#212121",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingVertical: 10,
  },

  locationIcon: {
    position: "absolute",
    bottom: 10,
    color: "#BDBDBD",
  },

  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginTop: 16,
  },

  buttonText: {
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto",
    color: "#FFFFFF",
    textAlign: "center",
  },
})