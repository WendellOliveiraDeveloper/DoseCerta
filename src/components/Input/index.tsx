import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, View, ViewStyle, TextInputProps } from "react-native";

type Props = TextInputProps & {
  placeHolder?: string;
  icon?: keyof typeof Ionicons.glyphMap;
  style?: ViewStyle;
};

const InputComponent = ({ placeHolder, icon, style, ...rest }: Props) => {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <Ionicons name={icon} size={25} style={styles.icon} color="#666" />
      )}
      <TextInput style={styles.input} placeholder={placeHolder} {...rest} />
    </View>
  );
};

export default InputComponent;
