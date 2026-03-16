import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NavComponent from "@/components/nav";
import InputComponent from "@/components/Input";
import ButtonComponent from "@/components/Button/ButtonComponent";
import { styles } from "./styles";
import { useState } from "react";

const ConfiguracoesView = () => {
  const [nomeUser, setNomeUser] = useState("");
  const [emailUser, setEmailUser] = useState("");

  return (
    <SafeAreaView>
      <NavComponent />
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            Dados do usuário
          </Text>
        </View>
        <View style={styles.campos}>
          <InputComponent
            placeHolder="Nome de usuario"
            icon="person"
            value={nomeUser}
            onChangeText={setNomeUser}
          ></InputComponent>
          <InputComponent
            placeHolder="Email"
            icon="mail"
            value={emailUser}
            onChangeText={setEmailUser}
          ></InputComponent>
        </View>
        <TouchableOpacity activeOpacity={0.5} style={styles.alterarSenha}>
          <Text style={{ fontSize: 20, color: "#e78027" }}>Alterar senha</Text>
        </TouchableOpacity>
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <ButtonComponent
            title="Alterar dados"
            style={{ width: 200 }}
          ></ButtonComponent>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ConfiguracoesView;
