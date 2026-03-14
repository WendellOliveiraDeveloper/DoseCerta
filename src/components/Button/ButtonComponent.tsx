import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";
import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
};

const ButtonComponent = ({ title, children, style, ...rest }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, style]}
      {...rest}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
        {children}
        {title && <Text style={styles.title}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
