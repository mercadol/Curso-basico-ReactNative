import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen (props) {
    const {navigation} = props;
    const goToPage=(pageName)=>{
        navigation.navigate(pageName)
    };
    return (
        <View>
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
        </View>
    );
}
