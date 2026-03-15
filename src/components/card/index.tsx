import { Text, TouchableOpacity, View } from "react-native";
import ButtonComponent from "../Button/ButtonComponent";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";

type Props = {
  titulo: string;
  children?: React.ReactNode;
};

const Card = ({ titulo, children }: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <View>
        <Text style={styles.titulo}>{titulo}</Text>
      </View>
      <View style={styles.children}>{children}</View>
      <View style={styles.footer}>
        <ButtonComponent title="Editar"></ButtonComponent>
        <TouchableOpacity activeOpacity={0.5}>
          <Ionicons name="trash" color={"#0000"} size={25} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
