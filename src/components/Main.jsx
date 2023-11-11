import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StartPage from "../pages/StartPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import TermsOfUsePage from "../pages/TermsOfUsePage.jsx";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage.jsx";
import HomePage from "../pages/HomePage.jsx";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={HomePage} />
    </Tab.Navigator>
  );
}

function StackGroup() {
  return (
    <Stack.Navigator initialRouteName="StartPage">
      <Stack.Screen
        name="StartPage"
        component={StartPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpPage"
        component={SignUpPage}
        options={{
          title: "Crear Usuario",
          headerStyle: { backgroundColor: "#D8B4A0" },
          headerTitleStyle: { color: "#223843" },
        }}
      />
      <Stack.Screen
        name="LoginPage"
        component={LoginPage}
        options={{
          title: "Ingresa a tu Cuenta",
          headerStyle: { backgroundColor: "#D8B4A0" },
          headerTitleStyle: { color: "#223843" },
        }}
      />
      <Stack.Screen
        name="TermsOfUsePage"
        component={TermsOfUsePage}
        options={{
          title: "Términos de servicio",
          headerStyle: { backgroundColor: "#D8B4A0" },
          headerTitleStyle: { color: "#223843" },
        }}
      />
      <Stack.Screen
        name="PrivacyPolicyPage"
        component={PrivacyPolicyPage}
        options={{
          title: "Términos de servicio",
          headerStyle: { backgroundColor: "#D8B4A0" },
          headerTitleStyle: { color: "#223843" },
        }}
      />
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
