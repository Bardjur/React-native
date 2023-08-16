import { NavigationContainer } from "@react-navigation/native";
import { useRoute } from "../router";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectIsLoggedIn } from "../redux/auth/selectors";
import { useEffect } from "react";
import { stateChangedUser } from "../redux/auth/operations";
import { authSlice } from "../redux/auth/slice";

export default Main = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const routing = useRoute(IsLoggedIn);

  

authSlice
  useEffect(() => {
    dispatch(stateChangedUser(authSlice));
  }, []);

  return isLoading
    ? <LoadingSpinner />
    : (
      <NavigationContainer>
        {routing}
      </NavigationContainer>
    )
}
