import { Text, TouchableOpacity, View } from "react-native";
import ButtonComponent from "../Button/ButtonComponent";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { TipoMedicamento } from "@/enuns/TipoMedicamento";

type Props = {
  titulo: string;
  horario: string;
  children?: React.ReactNode;
  tipoMedicamento: TipoMedicamento;
  onPressEdit: () => void;
  onPressDelete: () => void;
};

const config = {
  [TipoMedicamento.PENDENTE]: {
    label: "Pendente",
    background: "#d5282833",
    color: "#d52828",
  },
  [TipoMedicamento.ANDAMENTO]: {
    label: "Andamento",
    background: "#133aff33",
    color: "#4613ff",
  },
  [TipoMedicamento.FINALIZADO]: {
    label: "Finalizado",
    background: "#28a74533",
    color: "#28a745",
  },
  [TipoMedicamento.CANCELADO]: {
    label: "Cancelado",
    background: "#71717a33",
    color: "#71717a",
  },
};

const Card = ({
  titulo,
  horario,
  children,
  tipoMedicamento,
  onPressEdit,
  onPressDelete,
}: Props) => {
  const { label, background, color } = config[tipoMedicamento];

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.container}
      onPress={() => onPressEdit()}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text>
          Horário para tomar:
          <Text style={{ fontWeight: "bold" }}> {horario}</Text>
        </Text>
      </View>
      <View style={styles.children}>{children}</View>
      <View style={styles.footer}>
        <View style={[styles.cardStatus, { backgroundColor: background }]}>
          <Text style={{ color: color, fontWeight: "bold" }}>{label}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={() => onPressDelete()}>
          <Ionicons name="trash" color={"#d52828"} size={25} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
