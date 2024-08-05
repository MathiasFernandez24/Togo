import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { TogoProvider } from "./app/context/TogoContext";
import MainNavigation from "./app/navigation/MainNavigation";

export default function App() {
  return (
    <TogoProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <MainNavigation />
      </NavigationContainer>
    </TogoProvider>
  );
}
