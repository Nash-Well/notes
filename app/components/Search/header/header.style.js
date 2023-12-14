import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        padding: SIZES.large,
        marginTop: SIZES.medium,
    },

    inputContainer: {
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        padding: SIZES.medium,
        paddingHorizontal: SIZES.xLarge,
        justifyContent: 'space-between',
        backgroundColor: COLORS.eclipse,
    },

    searchInput: {
        fontSize: SIZES.large,
        color: COLORS.grayEighty,
        fontFamily: FONTS.nutitoRegular,
    }
})

export default styles;