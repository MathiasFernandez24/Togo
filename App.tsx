import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TogoCategoryProvider } from "./app/context/TogoCategoryContext";
import { TogoPlaceProvider } from "./app/context/TogoPlaceContext";
import MainNavigation from "./app/navigation/MainNavigation";

export default function App() {

  // cuenta B
  return (
    <TogoCategoryProvider>
      <TogoPlaceProvider>
        <NavigationContainer>
          <StatusBar style="dark" />
          <MainNavigation />
        </NavigationContainer>
      </TogoPlaceProvider>
    </TogoCategoryProvider>
  );
}
