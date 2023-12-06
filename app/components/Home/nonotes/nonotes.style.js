import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    notesImg: {
        width: 400,
        height: 350,
    },

    notesText: {
        color: COLORS.white,
        fontSize: SIZES.large,
        fontFamily: FONTS.nutitoLight
    }
})

export default styles;