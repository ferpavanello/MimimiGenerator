import React, { Component } from "react";
import { View, StyleSheet, TextInput, Text, Image } from "react-native";

export default class Interaction extends Component {
  constructor(props) {
    super(props);
    this.state = { text1: "Something", text2: "Mimimi" };

    this.write = this.write.bind(this);
  }

  changeVowels(text) {
    let newText = text.toLowerCase();

    newText = newText.replace(/(a|e|o|u)/g, "i");
    newText = newText.replace(/(á|à|ã|â)/g, "i");
    newText = newText.replace(/(é|è|ẽ|ê)/g, "i");
    newText = newText.replace(/(í|ì|ĩ|î)/g, "i");
    newText = newText.replace(/(ó|ò|õ|ô)/g, "i");
    newText = newText.replace(/(ú|ù|ũ|û)/g, "i");

    return newText;
  }

  write(t) {
    let s = this.state;
    s.text1 = t;
    s.text2 = this.changeVowels(t);
    this.setState(s);
  }

  render() {
    return (
      <View>
        <View style={styles.inputArea}>
          <TextInput
            style={styles.input}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Digite seu mimimi"
            onChangeText={this.write}
          />
        </View>

        <View style={styles.area}>
          <Text style={styles.text}>{this.state.text1.toUpperCase()}</Text>
          <Image style={styles.boy} source={require("./images/mimimi.jpg")} />
          <Text style={[styles.text, styles.text2]}>
            {this.state.text2.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputArea: {
    alignSelf: "stretch"
  },

  input: {
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "#EEE",
    color: "#000",
    height: 40,
    margin: 20,
    padding: 10
  },

  area: {
    width: 300,
    height: 300,
    marginTop: 10
  },

  boy: {
    width: 300,
    height: 300,
    marginTop: -70,
    zIndex: 0
  },

  text: {
    fontSize: 20,
    color: "#FFF",
    padding: 10,
    backgroundColor: "transparent",
    fontWeight: "bold",
    textAlign: "center",
    height: 70,
    zIndex: 1
  },

  text2: {
    marginTop: -70
  }
});
