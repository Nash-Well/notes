import { StyleSheet } from "react-native";

import { COLORS, SIZES, FONTS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: SIZES.large,
        backgroundColor: COLORS.nero,
    },

    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: `rgba(${ COLORS.nobelRGB }, 0.2)`,
    },

    contentContainer: {
        alignItems:'center',
        borderRadius: SIZES.large,
        paddingVertical: 35,
        paddingHorizontal: '15%',
        backgroundColor: COLORS.nero
    },

    changesText: {
        marginBottom: SIZES.xSmall,
        color: COLORS.vLightGray,
        fontSize: SIZES.xLarge,
        fontFamily: FONTS.nutitoRegular,
    },

    btnsContainer: {
        gap: 15,
        marginTop: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    actionBtn: (save) => ({
        width: '40%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: SIZES.xSmall,
        backgroundColor: save ? COLORS.coolGreen : COLORS.red,
    }),

    actionBtnText: {
        color: COLORS.white,
        fontSize: SIZES.xMedium,
        fontFamily: FONTS.nutitoSemiBold,
    }
})

export default styles;