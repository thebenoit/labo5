import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View,TextInput } from "react-native";
//import { TextInput } from "react-native-web";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ButtonBox = () => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "#6e7276" }]}
      >
        <Text style={styles.buttonText}>Annuler</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "#2199de" }]}
      >
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};

const NewMessage = () => {

  return(
    <View style={styles.container}>
    <TextInput style={styles.inputStyle}/>
    <ButtonBox/>
    </View>

  )
}

export default function App() {
  return <NewMessage/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
   alignItems:'flex-end',
  },
  buttonStyle: {
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
  inputStyle:{
    backgroundColor: '#f2f3f3',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: '95%',
    height: 40,

  },
});
