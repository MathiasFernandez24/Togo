import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
// import useLocalDataBase from "./app/hooks/useLocalDataBase";
import MainNavigation from "./app/navigation/MainNavigation";
import { TogoProvider } from "./app/context/TogoContext";

export default function App() {
  // const { initToGoDB } = useLocalDataBase();
  // useEffect(() => {
  //   initToGoDB();
  // }, []);

  return (
    <TogoProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <MainNavigation />
      </NavigationContainer>
    </TogoProvider>
  );
}
