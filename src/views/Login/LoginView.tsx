import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { useState } from "react";
import InputComponent from "../../components/Input";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const LoginView = ({ navigation }: any) => {
  const [isLogin, setIsLogin] = useState(false);

  const setIsRegistrer = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome5 name="pills" size={25} color="black" />
        <Text style={{ fontSize: 25 }}>Bem Vindo ao DoseCerta</Text>
      </View>
      <Text style={styles.header}>{isLogin ? "Registrar" : "Login"}</Text>
      <View style={styles.input}>
        <InputComponent placeHolder="Usuário" icon="people"></InputComponent>
        {isLogin && (
          <InputComponent
            placeHolder="Email"
            icon="mail"
            keyboardType="email-address"
          ></InputComponent>
        )}
        <InputComponent
          placeHolder="Senha"
          keyboardType="numeric"
          icon="eye"
        ></InputComponent>
      </View>
      <View
        style={{ gap: 20, marginTop: 20, width: "100%", alignItems: "center" }}
      >
        <TouchableOpacity onPress={() => setIsRegistrer()}>
          <Text style={{ fontSize: 20, color: "rgb(231, 128, 39)" }}>
            {isLogin ? "Possuo Registro" : "Não possuo Registro"}
          </Text>
        </TouchableOpacity>
        <ButtonComponent
          title="Logar"
          onPress={() => navigation.navigate("Home")}
          style={{ width: 200 }}
        ></ButtonComponent>
      </View>
    </View>
  );
};

export default LoginView;
