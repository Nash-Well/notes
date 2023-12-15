import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../../constants";

const headerStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: SIZES.large,
        justifyContent: 'space-between',
    },

    headerContainer: {
        gap: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },

    backBtn: {
        padding: SIZES.xSmall,
        borderRadius: 15,
        backgroundColor: COLORS.eclipse,
    },

    toastText: (title) => ({
        fontSize: title ? SIZES.medium : 14,
        fontFamily: title ? FONTS.nutitoSemiBold : FONTS.nutitoRegular 
    })
})

export default headerStyles;