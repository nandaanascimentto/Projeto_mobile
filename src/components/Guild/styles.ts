import { StyleSheet } from "react-native"
import { theme } from "../../global/theme"

const { colors, fonts } = theme

export const Styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 24
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20
    },
    title: {
        fontFamily: fonts.title700,
        color: colors.heading,
        fontSize: 18,
        marginBottom: 4,
    },
    type: {
        fontFamily: fonts.text400,
        color: colors.highlight,
        fontSize: 13,
    }
})