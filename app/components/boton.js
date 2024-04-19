import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default function Boton({ onPress, text = "Boton" }) {
  return (
    <>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.btnText}>{text}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#0000ff",
    color: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
  },
});
