import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartPage from "../pages/StartPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";

const Stack = createNativeStackNavigator();

function StackGroup() {
  return (
    <Stack.Navigator initialRouteName="StartPage">
      <Stack.Screen name="StartPage" component={StartPage} />
      <Stack.Screen name="SignUpPage" component={SignUpPage} />
    </Stack.Navigator>
  );
}

export default function Main() {
  return (
    <NavigationContainer>
      <StackGroup />
    </NavigationContainer>
  );
}
