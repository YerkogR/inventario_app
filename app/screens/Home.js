import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Boton from "../components/boton";

export default function Home({ navigation }){
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Encabezado Home</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Contenido</Text>
        <Boton onPress={()=>{navigation.navigate('Screen_1')}} text="Ir a Screen 1"></Boton>
        <Boton onPress={()=>{navigation.navigate('Screen_2')}} text="Ir a Screen 2"></Boton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    flex: 0.2,
    backgroundColor: '#CCC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  content:{
    flex: 0.8,
    backgroundColor: '#fff',
    marginVertical: 20,
    paddingHorizontal: 20
  },
  contentText:{
    fontSize: 18
  }
});