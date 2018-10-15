import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

import Interaction from "./Interaction";

export default class CreatorMimimi extends Component {
  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Gerador de Mimimi</Text>
        </View>
        <Interaction />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#999",
    paddingTop: 30,
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },

  titulo: {
    fontSize: 30,
    color: "#FFF"
  }
});
