import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  TouchableOpacity,
} from "react-native";

//Screens
import PostsScreen from "./posts/PostsScreen";
import CreatePostsScreen from "./posts/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

//Icons
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const TabNav = createBottomTabNavigator();

export default function Home({ navigation }) {

  return ( 
    <TabNav.Navigator
      screenOptions={{
        tabBarStyle: {alignItems:"center"},
        tabBarActiveBackgroundColor:"#FF6C00",
        tabBarActiveTintColor: "#fff",
        backBehavior:"history",
      }}
    >
      <TabNav.Screen 
        name="Posts" 
        component={PostsScreen}
        options={{
          headerShown: false,
          tabBarShowLabel:false,
          tabBarItemStyle:[styles.footerBtn,{marginLeft:0,order:3}],
          tabBarActiveBackgroundColor:"#FF6C00",
          tabBarIcon: ({color, size}) => <SimpleLineIcons name="grid" size={size} color={color} />,
        }}
      />
      <TabNav.Screen 
        name="CreatePost" 
        component={CreatePostsScreen}
        options={{
          headerTitle:"Створити публікацію",
          headerStyle: {borderBottomWidth: 1,},
          headerTitleAlign: "center",
          headerTitleStyle:{fontSize: 17, color: "#212121", fontWeight: 500,fontFamily: "Roboto",},
          headerLeft:() => {return(
            <TouchableOpacity  style={{marginLeft:10}} onPress={()=> {navigation.goBack()}}>
              <Ionicons name="arrow-back" size={25} />
            </TouchableOpacity>
          )},
          tabBarStyle:{display:"none"},
          tabBarShowLabel:false,
          tabBarItemStyle:styles.footerBtn,
          tabBarIcon: ({color, size}) => <Feather name="plus" size={size} color={color} />
        }}
      />
      <TabNav.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarItemStyle:{alignItems:"flex-start", order:-1},
          tabBarItemStyle:styles.footerBtn,
          tabBarIcon: ({color, size}) => <Feather name="user" size={size} color={color} />
        }}
      />
    </TabNav.Navigator>
  )
}

const styles = StyleSheet.create({
  footerBtn: {
    maxWidth:70,
    width: 70,
    height:40,
    borderRadius:20,
    alignItems:"center",
    alignSelf:"center",
    marginLeft:20,
  },
});
