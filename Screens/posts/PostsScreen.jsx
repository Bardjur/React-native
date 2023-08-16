import {
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import DefaultPostsScreen from "./nestedScreen/DefaultPostScreen";
import CommentsScreen from "./nestedScreen/CommentsScreen";
import MapScreen from "./nestedScreen/MapScreen";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operations";

const Nested = createStackNavigator();

export default function PostsScreen() {
  const dispatch = useDispatch();
  return (
    <Nested.Navigator
      screenOptions={{
        headerStyle: {borderBottomWidth: 1,},
        headerTitleAlign: "center",
        headerTitleStyle:styles.headTitle,
      }}
    >
      <Nested.Screen
        name="defaultPostsScreen"
        component={DefaultPostsScreen}
        options={{
          headerTitle: "Публікації",
          headerRight: () => (
            <TouchableOpacity  style={styles.logout} onPress={() => dispatch(logOut())}>
              <MaterialIcons name="logout" size={25} />
            </TouchableOpacity>
          ),
        }}
      />
      <Nested.Screen
        name="comments"
        component={CommentsScreen} 
        options={{
          headerStatusBarHeight: -5,
          headerTitle: "Коментарі", 
          headerLeftContainerStyle: {
            justifyContent:"flex-end",
          },
        }}
      />
      <Nested.Screen
        name="map"
        component={MapScreen}
        options={{
          headerTitle:"Карта", 
        }}
      />
    </Nested.Navigator>
  )
}
const styles = StyleSheet.create({
  headTitle: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 17,
    color: "#212121",
  },

  logout: {
    marginRight:10,
  },
});
