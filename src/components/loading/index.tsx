import { ActivityIndicator, View } from "react-native";
import { styles } from "./styles";

type Props = {
  loading: boolean;
};

const LoadingComponent = ({ loading }: Props) => {
  if (!loading) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#2AA1D9" />
      </View>
    </View>
  );
};

export default LoadingComponent;
