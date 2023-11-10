
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function StartPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Brain Mentors</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Ingresar")}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUpPage")}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => console.log("Terms of Use")}>
          <Text style={styles.bottomText}>Terms of Use</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("Privacy Policy")}>
          <Text style={styles.bottomText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D75177", // Color de fondo de la SafeAreaView
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20, // Espaciado superior para el título
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50,
    color: "#F2F2F2",
  },
  button: {
    backgroundColor: "#0CC0DF",
    width: 200,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#F2F2F2",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomContainer: {
    alignItems: "center",
    marginBottom: 20, // Espaciado inferior para los textos en la parte inferior
  },
  bottomText: {
    color: "#F2F2F2",
    fontSize: 16,
    marginVertical: 5,
  },
});
