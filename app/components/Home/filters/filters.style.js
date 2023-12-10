import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 5,
    },

    filterContainer: {
        borderWidth: 1,
        paddingHorizontal: 14,
        borderColor: COLORS.white,
        borderRadius: SIZES.xMedium,
        paddingVertical: SIZES.small,
    },

    filterText: (selected) => ({
        fontSize: SIZES.xMedium,
        fontFamily: FONTS.nutitoSemiBold,
        color: selected ? COLORS.nero : COLORS.white,
    })
})

export default styles;