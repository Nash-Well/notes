import { StyleSheet } from "react-native";

import { SIZES, COLORS, FONTS } from "../../../../constants";

const styles = StyleSheet.create({
    textInput: (desc) => ({
        fontSize: desc ? SIZES.xLarge : SIZES.huge,
        marginTop:  desc ? SIZES.xxLarge : 0,
        fontFamily: FONTS.nutitoRegular,
        color: COLORS.white,
    })
});

export default styles;