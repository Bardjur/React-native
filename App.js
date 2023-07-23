import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {authContext} from "./authContext";

//Screens
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import Home from "./Screens/Home";

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
  });
  const [isAuth, setIsAuth] = useState(true);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <authContext.Provider value={{setIsAuth}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          { isAuth ? (
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown:false}} 
            />
          ) : (
            <>
              <Stack.Screen 
                name="Registration" 
                component={RegistrationScreen} 
                options={{headerShown:false}} 
              />
              <Stack.Screen 
                name="Login" 
                component={LoginScreen}
                options={{headerShown:false}} 
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </authContext.Provider>
  );
}
