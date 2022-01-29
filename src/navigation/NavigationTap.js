import React from "react";
import { createButtomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Tap = createButtomTabNavigator();

export default function NavigationTab(){
    return(
        <Tap.Navigator initialRouteName="Home">
            <Tap.Screen name="Settings" component={SettingsScreen} />
            <Tap.Screen name="Home" component={HomeScreen} /> 
        </Tap.Navigator>
    )
}

