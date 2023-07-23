import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {authContext} from "../authContext";
import { useContext } from 'react';
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
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

const TabNav = createBottomTabNavigator();

export default function Home({navigation}) {
  const {setIsAuth} = useContext(authContext);

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
          headerStyle: {borderBottomWidth: 1,},
          headerTitle:"Публікації", 
          headerTitleAlign: "center",
          headerTitleStyle:{fontSize: 17, color: "#212121", fontWeight: 500,fontFamily: "Roboto",  },
          headerRight: () => (
            <TouchableOpacity  style={styles.logout} onPress={()=> {setIsAuth(false)}}>
              <MaterialIcons name="logout" size={25} />
            </TouchableOpacity>
          ),
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

  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 11,
    borderBottomWidth: 1,
    borderBottomColor:"#E8E8E8",
  },

  headTitle: {
    fontFamily: "Roboto",
    fontWeight: 500,
    fontSize: 17,
    color: "#212121",
  },

  logout: {
    marginRight:10,
  },

  mainBlock: {
    paddingTop: 32,
    paddingHorizontal: 16,
  },

  authorBlock: {
    flexDirection: "row",
    alignItems: "center",
  },

  authorImgWrap: {
    width: 60,
    height: 60,
    overflow: "hidden",
    borderRadius: 16,
    marginRight: 8,
  },

  authorTextName: {
    fontFamily: "Roboto",
    fontWeight: 700,
    fontSize: 13,
  },

  authorTextMail: {
    fontFamily: "Roboto",
    fontSize: 11,
  },




  footerBlock: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 9,
    paddingBottom: 22,
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
    marginTop: "auto",
  },

  footerAddBtn: {
    width: 70,
    marginHorizontal: 30
  }
});
