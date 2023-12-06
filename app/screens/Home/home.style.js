import { StyleSheet } from "react-native";

import { COLORS, FONTS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.nero,
    },

    floatingButton: {
        right: 30,
        bottom: 30,
        width: 60,
        height: 60,
        padding: 11,
        borderRadius: 50,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: COLORS.black,
        shadowOffset: {
            width: -8, 
            height: 0, 
        },
        flexShrink: 0,
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: COLORS.nero,
    },
})

export default styles;