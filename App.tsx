import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./app/navigation/MainNavigation";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import useLocalDataBase from "./app/hooks/useLocalDataBase";

export default function App() {
  const { initToGoDB } = useLocalDataBase();
  useEffect(() => {
    initToGoDB();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <MainNavigation />
    </NavigationContainer>
  );
}
