import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  title: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 50,
    gap: 10,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
    fontFamily: "",
  },
  input: {
    marginTop: 30,
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
});