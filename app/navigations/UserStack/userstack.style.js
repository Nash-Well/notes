import { StyleSheet } from "react-native";

import { COLORS, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    
    headerTitle: {
        fontSize: 32,
        color: COLORS.white,
        fontFamily: FONTS.nutitoSemiBold,
    },
    
    headerContainer: {
        gap: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconBtn: {
        padding: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.eclipse,
    }
})

export default styles;