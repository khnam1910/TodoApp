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
    },
    modalOverlay: {
        height: '80%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        height: '70%',
        width: '90%',
        backgroundColor: 'white',
    },
    buttonComponent: {
        padding: 15,
        borderRadius: 5,
        marginHorizontal: 5,
    }
})

export default globalStyles;