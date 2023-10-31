import React from "react";
import { Text, View } from "react-native";
import { Redirect, Route, Navigate, Routes} from "react-router-native";
import StartPage from "../pages/StartPage.jsx"

export default function Main() {
  return (
    <StartPage />
  );
}
