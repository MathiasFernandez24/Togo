import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TogoCategoryProvider } from "./app/context/TogoCategoryContext";
import { TogoPlaceProvider } from "./app/context/TogoPlaceContext";
import MainNavigation from "./app/navigation/MainNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <TogoCategoryProvider>
      <TogoPlaceProvider>
        <GestureHandlerRootView>
          <NavigationContainer>
            {/* <StatusBar style="dark" /> */}
            <MainNavigation />
          </NavigationContainer>
        </GestureHandlerRootView>
      </TogoPlaceProvider>
    </TogoCategoryProvider>
  );
}
