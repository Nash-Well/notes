import { StyleSheet, Dimensions } from "react-native";
import { FONTS, COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapperContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    headerText: {
        fontSize: SIZES.xxLarge,
        marginBottom: 30,
        fontFamily: FONTS.regular,
        textTransform: 'uppercase',
    },

    inputContainer: {
        gap: 5,
        marginBottom: 14,
        paddingBottom: 3,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        justifyContent: 'center',
        borderBottomColor: COLORS.silvergray,
    },

    textInput: {
        width: '50%',
        fontSize: SIZES.medium,
        fontFamily: FONTS.semibold,
    },

    loginBtn: (register=false) => ({
        padding: 15,
        marginTop: 18,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: register ? COLORS.purple : COLORS.primary,
        width: Dimensions.get('screen').width*0.6
    }),

    loginBtnText: {
        fontSize: SIZES.large,
        color: COLORS.white,
        alignItems: 'center',
        fontFamily: FONTS.regular,
        textTransform: 'uppercase',
    }
})

export default styles;