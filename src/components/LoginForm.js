import React from "react";
import { View, TextInput, Button } from "react-native";
//import {  } from "react-native-web";

export default function LoginForm() {
    return(
        <View>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Contraseña" />
            <Button title="Enviar" onPress={()=> console.log("Enviado")} />
            
        </View>
    );
}
