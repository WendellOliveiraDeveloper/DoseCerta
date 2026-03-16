import { SafeAreaView } from "react-native-safe-area-context";
import NavComponent from "@/components/nav";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Card from "@/components/card";
import AntDesign from "@expo/vector-icons/AntDesign";
import ModalComponent from "@/components/modal";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { TipoMedicamento } from "@/enuns/TipoMedicamento";
import InputComponent from "@/components/Input";
import ButtonComponent from "@/components/Button/ButtonComponent";

const MedicamentosView = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [nomeMedicamento, setNomeMedicamento] = useState<string>("");
  const [horarioMedicamento, setHorarioMedicamento] = useState<string>("");
  const [dataVencimento, setDataVencimento] = useState<Date>(new Date());
  const [quantidadeCaps, setQuantidadeCaps] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [statusMedicacao, setStatusMedicacao] = useState<TipoMedicamento>(
    TipoMedicamento.PENDENTE,
  );
  const [isNewMedicine, setIsNewMedicine] = useState<boolean>(false);

  const onChange = (event: any, selectedDate: any) => {
    setShowCalendar(false);
    if (selectedDate) {
      setDataVencimento(selectedDate);
    }
  };

  const abrirModalEdicao = (item: any) => {
    const [day, month, year] = item.dataVencimento.split("/");

    setNomeMedicamento(item.nomeMedicamento);
    setHorarioMedicamento(item.horario);
    setDataVencimento(new Date(Number(year), Number(month) - 1, Number(day)));
    setStatusMedicacao(item.statusMedicamento);
    setQuantidadeCaps(item.quantidade);

    setIsNewMedicine(true);
    setIsVisible(true);
  };

  const abrirModalCriacao = () => {
    setIsNewMedicine(false);
    setIsVisible(true);
  };

  const saveNewMedicine = () => {
    if (
      !nomeMedicamento.trim() ||
      !horarioMedicamento.trim() ||
      !dataVencimento ||
      !quantidadeCaps.trim()
    ) {
      return;
    }

    const payload = {
      nomeMedicamento,
      horarioMedicamento,
      dataVencimento,
      quantidadeCaps,
      statusMedicacao,
    };

    console.log("dados de medicamento", payload);
  };

  const updateMedicine = () => {};

  const itens: any = [
    {
      id: 1,
      nomeMedicamento: "Dipirona",
      horario: "13h00",
      quantidade: "3",
      dataVencimento: "04/01/2026",
      statusMedicamento: TipoMedicamento.CANCELADO,
    },
    {
      id: 2,
      nomeMedicamento: "Prenazol",
      horario: "21h00",
      quantidade: "1",
      dataVencimento: "21/02/2026",
      statusMedicamento: TipoMedicamento.FINALIZADO,
    },
    {
      id: 3,
      nomeMedicamento: "AAAA",
      horario: "15h30m",
      quantidade: "2",
      dataVencimento: "01/02/2026",
      statusMedicamento: TipoMedicamento.ANDAMENTO,
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
        <TouchableOpacity onPress={() => abrirModalCriacao()}>
          <AntDesign name="plus" size={24} color="#1bb432" />
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}>
        <FlatList
          data={itens}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Card
              titulo={item.nomeMedicamento}
              horario={item.horario}
              tipoMedicamento={item.statusMedicamento}
              onPressEdit={() => abrirModalEdicao(item)}
              onPressDelete={() => console.log("funfa")}
            >
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
      <ModalComponent
        title={
          isNewMedicine ? "Editar Medicamento" : "Adicionar novo medicamento"
        }
        visible={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <View style={styles.inputModal}>
          <InputComponent
            placeHolder="Nome do medicamento"
            icon="medkit"
            onChangeText={setNomeMedicamento}
            value={nomeMedicamento}
          ></InputComponent>
          <InputComponent
            placeHolder="Horário para tomar"
            icon="timer"
            onChangeText={setHorarioMedicamento}
            value={horarioMedicamento}
          ></InputComponent>
          <InputComponent
            placeHolder="Quantidade de Capsulas"
            icon="medical"
            onChangeText={setQuantidadeCaps}
            value={quantidadeCaps}
          ></InputComponent>
          <TouchableOpacity onPress={() => setShowCalendar(true)}>
            <InputComponent
              placeHolder="Data de vencimento"
              icon="calendar"
              value={dataVencimento.toLocaleDateString()}
              editable={false}
            />
          </TouchableOpacity>

          <ButtonComponent
            style={{ backgroundColor: "#1bb432" }}
            title={
              isNewMedicine ? "Salvar alterações" : "Adicionar novo medicamento"
            }
            onPress={() =>
              isNewMedicine ? updateMedicine() : saveNewMedicine()
            }
          >
            <AntDesign
              name={isNewMedicine ? "edit" : "plus"}
              color={"#fff"}
              size={20}
            />
          </ButtonComponent>
          {showCalendar && (
            <DateTimePicker
              value={dataVencimento}
              mode="date"
              display="default"
              onChange={onChange}
            />
          )}
        </View>
      </ModalComponent>
    </SafeAreaView>
  );
};

export default MedicamentosView;
