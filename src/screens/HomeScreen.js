import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen (props) {
    const {navigation} = props;
    const goToPage=(pageName)=>{
        navigation.navigate(pageName)
    };
    return (
        <SafeAreaView>
            <Text> estamos en Home Screen</Text>
            <Text> estamos en Home Screen</Text>
            <Text> estamos en Home Screen</Text>
            <Text> estamos en Home Screen</Text>
            <Text> estamos en Home Screen</Text>
            <Text> estamos en Home Screen</Text>
            <Text> estamos en Home Screen</Text>
            <Text> estamos en Home Screen</Text>
            <Text> estamos en Home Screen</Text>
            <Button onPress={()=> goToPage("Settings")} title="Ajustes" />
        </SafeAreaView>
    );
}
