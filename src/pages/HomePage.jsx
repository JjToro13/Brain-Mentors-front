import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Pagina principal</Text>
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
