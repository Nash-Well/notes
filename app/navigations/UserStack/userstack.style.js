import { StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    headerTitle: {
        fontSize: 32,
        color: COLORS.white,
        fontFamily: FONTS.nutitoSemiBold,
    },
    
    headerContainer: {
        gap: 15,
        marginRight: 20,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconBtn: {
        padding: 10,
        borderRadius: 15,
        backgroundColor: COLORS.eclipse,
    }
})

export default styles;