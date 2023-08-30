import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#17171C",
    justifyContent: "center",
    columnGap: 16,
    paddingHorizontal: 16,
  },
  valueContainer: {},
  valueText: {
    textAlign: "right",
    color: "#ffffffff",
    fontSize: 96,
  },
  buttonsContainer: {},
  lineButtonsContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    gap: 16,
    marginVertical: 10,
  },
});

export default styles;
