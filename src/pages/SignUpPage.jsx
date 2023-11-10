import { Text, View, StyleSheet, SafeAreaView } from "react-native";

export default function SignUpPage() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}> Crea tu Usuario</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D75177", // Color de fondo de la SafeAreaView
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50,
    textAlign: "center",
    color: "#F2F2F2",
  },
});
