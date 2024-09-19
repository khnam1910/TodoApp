import { StyleSheet } from "react-native";
import colors from "../constants/colors"

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    section: {
        marginBottom: 5,
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 14,
        color: colors.text,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tabBarStyle: {
        backgroundColor: colors.bgColor,
        borderRadius: 100,
        borderColor: colors.description,
        borderWidth: 1,
        marginVertical: 0,
        marginHorizontal: 15
    },
    labelContainer: {
        borderColor: colors.text,
        marginVertical: -8,
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default globalStyles;