import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ButtonBox = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.buttonstyle, { backgroundColor: "#6e7276" }]}
      >
        <Text style={styles.buttonText}>Annuler</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonstyle, { backgroundColor: "#2199de" }]}
      >
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function App() {
  return <ButtonBox />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  buttonstyle: {
    borderRadius: 5,
    padding: 5,
    margin: 5,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 16,
    textAlign: "center",
  },
});
