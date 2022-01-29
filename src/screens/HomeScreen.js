import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen (props) {
    const {navigation} = props;
    const goToSettings=()=>{
        navigation.navigate("Settings")
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
            <Button onPress={goToSettings} title="Ajustes" />
        </View>
    );
}
