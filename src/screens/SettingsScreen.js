import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen (props) {
    const {navigation}=props;

    const goToPage = (pageName) => {
        navigation.navigate(pageName)
    };
    return (
        <SafeAreaView>
            <Text> estamos en SettingsScreen</Text>
            <Text> estamos en SettingsScreen</Text>
            <Text> estamos en SettingsScreen</Text>
            <Text> estamos en SettingsScreen</Text>
            <Text> estamos en SettingsScreen</Text>
            <Text> estamos en SettingsScreen</Text>
            <Text> estamos en SettingsScreen</Text>
            <Text> estamos en SettingsScreen</Text>
            <Text> estamos en SettingsScreen</Text>
            <Button onPress={()=> goToPage("Home")} title="Home" />

        </SafeAreaView>
    );
}