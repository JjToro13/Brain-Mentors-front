import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

import { SelectList } from "react-native-dropdown-select-list";

export default function SignUpPage({ navigation }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "DNI",
    nuip: "",
    correo: "",
    fechaNacimiento: "",
    contraseña: "",
    codigoEstudiante: "",
    sexo: "",
    telefono: "",
  });

  const data = [
    { key: "1", value: "Cédula de ciudadanía" },
    { key: "2", value: "Tarjeta de Identidad" },
    { key: "3", value: "Certificado Nacional" },
    { key: "4", value: "Cédula de Extranjería" },
  ];

  const handleRegister = () => {
    // Lógica para manejar el registro, puedes enviar los datos a un servidor, etc.
    console.log("Datos de registro:", formData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Registro</Text>

        <SelectList
          style={styles.input}
          setSelected={(val) =>
            setFormData({ ...formData, tipoDocumento: val })
          }
          data={data}
          save="value"
        />
        <TextInput
          style={styles.input}
          placeholder="NUIP"
          onChangeText={(text) => setFormData({ ...formData, nuip: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          onChangeText={(text) => setFormData({ ...formData, nombre: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          onChangeText={(text) => setFormData({ ...formData, apellido: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Correo"
          onChangeText={(text) => setFormData({ ...formData, correo: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha de Nacimiento"
          onChangeText={(text) =>
            setFormData({ ...formData, fechaNacimiento: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          onChangeText={(text) =>
            setFormData({ ...formData, contraseña: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Código de Estudiante (opcional)"
          onChangeText={(text) =>
            setFormData({ ...formData, codigoEstudiante: text })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Sexo (opcional)"
          onChangeText={(text) => setFormData({ ...formData, sexo: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Número de Teléfono (opcional)"
          onChangeText={(text) => setFormData({ ...formData, telefono: text })}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleRegister();
            navigation.navigate("LoginPage");
          }}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F3", // Color de fondo de la SafeAreaView
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
    color: "#223843",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "#223843",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
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
