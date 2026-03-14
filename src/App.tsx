import Routes from "./routes/Routes";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (!fontsLoaded) return null;

  SplashScreen.hideAsync();

  return (
    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>
  );
}