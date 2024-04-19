import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import  Boton  from "./boton";

export default function Contador() {
  const [contador, SetContador] = useState(0);

  const aumentarContador = () => {
    const nuevoValor = contador + 1;
    SetContador(nuevoValor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContador}>{contador}</Text>
      <Boton onPress={aumentarContador} text="Aumentar" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ccc",
      alignItems: "center",
      justifyContent: "center",
    },
    textContador: {
      fontSize: 50,
    },
  });