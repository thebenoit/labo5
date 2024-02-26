import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
//import { ScrollView } from "react-native-web";
//import { TextInput } from "react-native-web";
import { Colors } from "react-native/Libraries/NewAppScreen";

let tabInit = [];

const Message = ({ fromYou, text, id }) => {
  //si fromYou = true
  if (fromYou === "you") {
    return (
      //retourne ce texte avec le style messageFromYou
      //flex-end permet que le message soit à droite
      <View style={[styles.messageContainer, { alignItems: "flex-end" }]}>
        <Text style={styles.messageFromYou}>{text}</Text>
      </View>
    );
  } else {
    //sinon
    return (
      //retourne ce texte avec le style messageFromOther
      //flex-start permet que le message soit à gauche
      <View style={[styles.messageContainer, { alignItems: "flex-start" }]}>
        <Text style={styles.messageFromOther}>{text}</Text>
      </View>
    );
  }
};

const NewMessage = ({ textInput, textChanged, ajouterMessage }) => {
  return (
    <View style={styles.newMessageContainer}>
      <TextInput
        style={styles.inputStyle}
        onChangeText={textChanged}
        value={textInput}
        placeholder={"Saisisez votre message"}
      />

      {/* Passer textChanged en tant que prop à ButtonBox */}
      <ButtonBox text={textInput} ajout={ajouterMessage} textChanged={textChanged}/>
    </View>
  );
};


const ButtonBox = ({ text, ajout,textChanged }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "#6e7276" }]}
        onPress={() => textChanged("")} // Utilisez textChanged pour réinitialiser le texte
      >
        <Text style={styles.buttonText}>Annuler</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.buttonStyle, { backgroundColor: "#2199de" }]}
        onPress={() => ajout(text)}
        
      >
        <Text style={styles.buttonText}>Envoyer</Text>
      </TouchableOpacity>
    </View>
  );
};


const Conversation = ({ tabMessages }) => {
  
    tabInit = tabMessages.map((message) => (
    <Message fromYou={message.from} text={message.text} key={uuidv4()} />
  ))


  return <View>{tabInit}</View>;
};

export default function App() {
  const messages = [
    {
      text: "hello",
      from: "you",
    },
    {
      text: "Est-ce que tu va mieux qu'hier soir ?",
      from: "Solange",
    },
    {
      text: "Ouais, j'ai pris des 💊. J'arrive à penser à autre chose.",
      from: "you",
    },
    {
      text: "Veux-tu aller prendre un ☕️ au Tim en bas de chez toi ?",
      from: "Solange",
    },
    {
      text: "Je crois que j'ai plus besoin d'aller prendre une 🚶‍♀️",
      from: "you",
    },
    {
      text: "hello",
      from: "you",
    },
    {
      text: "Est-ce que tu va mieux qu'hier soir ?",
      from: "Solange",
    },
    {
      text: "Ouais, j'ai pris des 💊. J'arrive à penser à autre chose.",
      from: "you",
    },
    {
      text: "Veux-tu aller prendre un ☕️ au Tim en bas de chez toi ?",
      from: "Solange",
    },
    {
      text: "Je crois que j'ai plus besoin d'aller prendre une 🚶‍♀️",
      from: "you",
    },
    {
      text: "hello",
      from: "you",
    },
    {
      text: "Est-ce que tu va mieux qu'hier soir ?",
      from: "Solange",
    },
    {
      text: "Ouais, j'ai pris des 💊. J'arrive à penser à autre chose.",
      from: "you",
    },
    {
      text: "Veux-tu aller prendre un ☕️ au Tim en bas de chez toi ?",
      from: "Solange",
    },
    {
      text: "Je crois que j'ai plus besoin d'aller prendre une 🚶‍♀️",
      from: "you",
    },
  ];
  const [textInput, setTextInput] = useState("");
  const [listeMessage, setListeMessage] = useState([""]);

  const ajout = (t) =>{
    tabInit.push(<Message fromYou={'you'} text={t} key={uuidv4()}/>);
    setListeMessage((tabInit) => [...tabInit, <Message fromYou={'you'} text={t} key={uuidv4()}/>])
    Alert.alert(` ${tabInit.length} + ${t}`);
    //après l'envoie effacer les text
    setTextInput("")
  };

  
  
  

  return (
    <View style={styles.container}>
      <ScrollView>
        <Conversation tabMessages={messages} />
        {listeMessage}
      </ScrollView>
      <NewMessage 
      textInput={textInput} 
      textChanged={setTextInput} 
      ajouterMessage={ajout}
      
       />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: "#fff",

    //alignItems: "center",
    justifyContent: "center",
  },
  newMessageContainer: {
    borderWidth: 1,
    borderColor: "#2199de",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
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
  inputStyle: {
    color: "#6e7276",
    backgroundColor: "#f2f3f3",
    borderRadius: 10,
    padding: 10,
    margin: 10,
    width: "95%",
    height: 40,
  },
  messageContainer: {},
  messageFromYou: {
    color: "white",
    backgroundColor: "#2199de",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  messageFromOther: {
    color: "#6e7276",
    backgroundColor: "#f2f3f3",
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
