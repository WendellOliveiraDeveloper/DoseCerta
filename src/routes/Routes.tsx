import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginView from "@/views/login/LoginView";
import HomeView from "@/views/home/HomeView";
import MedicamentosView from "@/views/medicamentos/MedicamentosView";
import ConfiguracoesView from "@/views/configuracoes/ConfiguracoesView";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginView} />

        <Stack.Screen name="Home" component={HomeView} />

        <Stack.Screen name="Medicamentos" component={MedicamentosView} />

        <Stack.Screen name="Configuracoes" component={ConfiguracoesView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
