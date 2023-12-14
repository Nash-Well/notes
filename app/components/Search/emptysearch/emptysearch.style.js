import { StyleSheet } from "react-native";
import { COLORS, FONTS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        marginTop: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchImg: {
        backgroundColor: COLORS.nero,
    },

    searchText: {
        fontSize: SIZES.large,
        color: COLORS.white,
        fontFamily: FONTS.nutitoRegular,
    }
})

export default styles;