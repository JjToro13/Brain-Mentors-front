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
          onPress={() => navigation.navigate("LoginPage")}
        >
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignUpPage")}
        >
          <Text style={styles.buttonText}>REGISTRARSE</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("TermsOfUsePage")}>
          <Text style={styles.bottomText}>Términos del Servicio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("PrivacyPolicyPage")}>
          <Text style={styles.bottomText}>Política de Privacidad</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "  #EFF1F3", // Color de fondo de la SafeAreaView
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
    color: "#223843",
  },
  button: {
    backgroundColor: "#D8B4A0",
    width: 200,
    paddingVertical: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "#223843",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  bottomContainer: {
    alignItems: "center",
    marginBottom: 20, // Espaciado inferior para los textos en la parte inferior
  },
  bottomText: {
    color: "#223843",
    fontSize: 16,
    marginVertical: 5,
  },
});
