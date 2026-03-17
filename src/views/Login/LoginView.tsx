import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import ButtonComponent from "../../components/Button/ButtonComponent";
import { useState } from "react";
import InputComponent from "../../components/Input";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import InfoComponent from "../../components/Info";
import { UserCreateDTO, UserLoginDTO } from "@/dto/user.dto";
import { userStorage } from "@/storage/UserStorage";

const LoginView = ({ navigation }: any) => {
  const [isLogin, setIsLogin] = useState(false);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [emailUsuario, setEmailUsuario] = useState("");
  const [senhaUsuario, setSenhaUsuario] = useState("");
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoTitulo, setInfoTitulo] = useState("");
  const [infoMensagem, setInfoMensagem] = useState("");
  const [infoErro, setInfoErro] = useState(false);

  const setIsRegistrer = () => {
    setIsLogin((prev) => !prev);
  };

  const mostrarInfo = (titulo: string, mensagem: string, erro = false) => {
    setInfoTitulo(titulo);
    setInfoMensagem(mensagem);
    setInfoErro(erro);
    setInfoVisible(true);
  };

  const isRegistrando = isLogin;

  const logar = async () => {
    if (!nomeUsuario.trim() || !senhaUsuario.trim()) {
      mostrarInfo("Erro", "Preencha todos os campos!", true);
      return;
    }

    if (isRegistrando) {
      if (!emailUsuario.trim()) {
        mostrarInfo("Erro", "Informe um e-mail válido!", true);
        return;
      }

      const payload: UserCreateDTO = {
        nome: nomeUsuario,
        email: emailUsuario,
        senha: senhaUsuario,
      };

      console.log("Registrando:", payload);
      mostrarInfo("Sucesso", "Cadastro realizado com sucesso!");
      return;
    }

    const payloadLogin: UserLoginDTO = {
      nome: nomeUsuario,
      senha: senhaUsuario,
    };

    const storage = await userStorage.save("aasdad.token", payloadLogin);

    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <FontAwesome5 name="pills" size={25} color="black" />
        <Text style={{ fontSize: 25 }}>Bem Vindo ao DoseCerta</Text>
      </View>
      <Text style={styles.header}>{isLogin ? "Registrar" : "Login"}</Text>
      <View style={styles.input}>
        <InputComponent
          placeHolder="Usuário"
          onChangeText={setNomeUsuario}
          icon="people"
        ></InputComponent>
        {isLogin && (
          <InputComponent
            placeHolder="Email"
            onChangeText={setEmailUsuario}
            icon="mail"
            keyboardType="email-address"
          ></InputComponent>
        )}
        <InputComponent
          placeHolder="Senha"
          onChangeText={setSenhaUsuario}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          icon="eye"
        ></InputComponent>
      </View>
      <View
        style={{ gap: 20, marginTop: 20, width: "100%", alignItems: "center" }}
      >
        <TouchableOpacity onPress={() => setIsRegistrer()}>
          <Text style={{ fontSize: 20, color: "#e78027" }}>
            {isLogin ? "Possuo Registro" : "Não possuo Registro"}
          </Text>
        </TouchableOpacity>
        <ButtonComponent
          title={isLogin ? "Registrar" : "Logar"}
          onPress={() => logar()}
          style={{ width: 200 }}
        ></ButtonComponent>
      </View>
      <InfoComponent
        titulo={infoTitulo}
        mensagem={infoMensagem}
        isErro={infoErro}
        visible={infoVisible}
        onClose={() => setInfoVisible(false)}
      />
    </View>
  );
};

export default LoginView;
