import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

type IconName = ComponentProps<typeof Ionicons>["name"];

const NavComponent = () => {
  const navigation: any = useNavigation();
  const route = useRoute();

  const labels: { label: string; icon: IconName; screen: string }[] = [
    { label: "Inicio", icon: "home", screen: "Home" },
    { label: "Medicamentos", icon: "medkit", screen: "Medicamentos" },
    { label: "Configurações", icon: "settings", screen: "Configuracoes" },
  ];

  return (
    <View style={styles.container}>
      {labels.map((item, index) => {
        const isActive = route.name === item.screen;

        return (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate(item.screen)}
            style={[styles.navItem, isActive && styles.navItemActive]}
          >
            <Ionicons
              name={item.icon}
              size={23}
              color={isActive ? "#73adde" : "white"}
            />
            <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavComponent;
