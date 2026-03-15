import { SafeAreaView } from "react-native-safe-area-context";
import NavComponent from "../../components/nav";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Card from "@/components/card";
import AntDesign from "@expo/vector-icons/AntDesign";

const MedicamentosView = () => {
  const itens: any = [
    {
      id: 1,
      nomeMedicamento: "Dipirona",
      quantidade: 3,
      dataVencimento: "04/01/2026",
    },
    {
      id: 2,
      nomeMedicamento: "Prenazol",
      quantidade: 1,
      dataVencimento: "21/02/2026",
    },
    {
      id: 3,
      nomeMedicamento: "AAAA",
      quantidade: 2,
      dataVencimento: "01/02/2026",
    },
  ];

  return (
    <SafeAreaView>
      <NavComponent />
      <View
        style={{
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20 }}>Seus medicamentos:</Text>
        <TouchableOpacity>
          <AntDesign name="plus" size={24} color="#1bb432" />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}>
        <FlatList
          data={itens}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card titulo={item.nomeMedicamento}>
              <Text>Quantidade: {item.quantidade}</Text>
              <Text>Data de vencimento: {item.dataVencimento}</Text>
            </Card>
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.emptyText}>Nenhum medicamento cadastrado</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default MedicamentosView;
