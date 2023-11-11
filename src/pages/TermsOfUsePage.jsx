import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function TermsOfUsePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Términos de uso de la app</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F3", // Color de fondo de la SafeAreaView
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
    color: "#223843",
  },
});
