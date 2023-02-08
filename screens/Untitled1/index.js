import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.nozhTbzA}></View><Pressable onPress={() => navigation.navigation.navigate("onboarding2", {})}><Text style={styles.wUvXVGZC}>Lorem ipsum…</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  nozhTbzA: {
    height: 170,
    width: 325,
    backgroundColor: "#dd6666",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    top: 201.5,
    left: 16
  },
  wUvXVGZC: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled1;