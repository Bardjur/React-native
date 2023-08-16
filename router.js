import { createStackNavigator } from "@react-navigation/stack";

//Screens
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import Home from "./Screens/Home";

const Stack = createStackNavigator();

export const useRoute = (IsLoggedIn) => (
  <Stack.Navigator initialRouteName="Login">
    {IsLoggedIn ? (
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    ) : (
      <>
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </>
    )}
  </Stack.Navigator>
);
