import { COLORS } from "../../../constants";
import { StyleSheet, Dimensions } from "react-native";

const registerStyles = StyleSheet.create({
    registerBtn: {
        padding: 15,
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
        width: Dimensions.get('screen').width*0.6
    },
})

export default registerStyles;