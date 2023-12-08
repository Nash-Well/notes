import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    noteContainer: (pressed, color) => ({
        marginBottom: SIZES.large,
        borderRadius: SIZES.xSmall,
        paddingVertical: SIZES.large,
        paddingHorizontal: 25,
        backgroundColor: !pressed ? COLORS.red : color,
    }),

    deleteNote: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SIZES.xLarge,
    },

    notesText: {
        fontSize: SIZES.xLarge,
        fontFamily: FONTS.nutitoRegular
    }
})

export default styles;