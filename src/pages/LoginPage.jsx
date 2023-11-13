import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function LoginPage({ navigation }) {
  const [formData, setFormData] = useState({
    correo: "",
    contraseña: "",
    recordarSesion: false,
  });

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión, puedes enviar los datos a un servidor, etc.
    console.log("Datos de inicio de sesión:", formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          style={styles.input}
          placeholder="Correo"
          onChangeText={(text) => setFormData({ ...formData, correo: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) =>
            setFormData({ ...formData, contraseña: text })
          }
        />

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() =>
              setFormData({
                ...formData,
                recordarSesion: !formData.recordarSesion,
              })
            }
          >
            {formData.recordarSesion ? (
              <Text style={styles.checkboxText}>✓</Text>
            ) : (
              <Text style={styles.checkboxText}></Text>
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxLabel}>Recordar Sesión</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F3",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: "#223843",
    borderWidth: 2,
    borderRadius: 3,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxText: {
    color: "#223843",
    fontSize: 16,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  button: {
    backgroundColor: "#D8B4A0",
    width: 200,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#223843",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
