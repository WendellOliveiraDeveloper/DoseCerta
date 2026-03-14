import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import NavComponent from "../../components/nav";
import ButtonComponent from "../../components/Button/ButtonComponent";

const HomeView = ({ navigation }: any) => {
  const nome = "Wendell";
  const medCount = 12;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <NavComponent />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text style={styles.headerText}>Bem vindo, {nome}!</Text>
          <Text style={styles.headerText}>
            {medCount <= 0
              ? "Você não tem medicamentos"
              : `Você tem ${medCount} medicamento(s)`}
          </Text>
        </View>
      </View>

      <View style={styles.footer}>
        <ButtonComponent
          title="Sair do sistema"
          onPress={() => navigation.navigate("Login")}
          style={{ width: 150 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeView;
