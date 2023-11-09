import "react-native-gesture-handler";
import Main from "./src/components/Main.jsx";
import { StatusBar } from "expo-status-bar";


export default function App() {
  return (
    <>
      <StatusBar style="light" />
      
      <Main />
    </>
  );
}


