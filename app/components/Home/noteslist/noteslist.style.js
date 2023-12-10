import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    noteContainer: (pressed, color) => ({
        marginBottom: SIZES.large,
        borderRadius: SIZES.xSmall,
        paddingVertical: SIZES.large,
        paddingHorizontal: 25,
        backgroundColor: !pressed ? COLORS.shadeBlue : color,
    }),

    deleteNote: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    notesText: {
        fontSize: SIZES.xLarge,
        fontFamily: FONTS.nutitoRegular
    },

    iconsContainer: {
        gap: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    deleteBtn: {
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: COLORS.red,
        backgroundColor: COLORS.red,
    },

    atchBtn: (atch) => ({
        padding: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: COLORS.purple,
        backgroundColor: atch ? COLORS.purple : COLORS.shadeBlue,
    })
})

export default styles;