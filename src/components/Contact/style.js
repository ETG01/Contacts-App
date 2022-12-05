import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: "#606060"
    },
    textPadding: {
        paddingLeft: 5,
    },
    imgSizer: {
        width: 40,
        height: 40,
        borderRadius: 40/2,
        borderWidth: 2,
        backgroundColor: "white",
    },
});