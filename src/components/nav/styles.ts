import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    flexDirection: "row",
    backgroundColor: "#73adde",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  navItemActive: {
    backgroundColor: "#fff",
  },
  navLabelActive: {
    color: "#73adde",
  },
  navLabel: {
    fontSize: 15,
    color: "#fff",
  },
});