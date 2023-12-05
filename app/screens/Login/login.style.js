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
    },

    inputContainer: {
        gap: 5,
        marginBottom: 18,
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

    registerContainer: {
        gap: 2,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },

    accountText: {
        fontSize: SIZES.medium,
        fontFamily: FONTS.regular,
    },

    registerText: {
        color: COLORS.purple,
        fontSize: SIZES.medium,
        fontFamily: FONTS.regular,
    },

    loginBtn: {
        padding: 15,
        marginTop: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.black,
        width: Dimensions.get('screen').width*0.6
    },

    loginBtnText: {
        fontSize: SIZES.large,
        color: COLORS.white,
        alignItems: 'center',
        fontFamily: FONTS.regular,
    }
})

export default styles;