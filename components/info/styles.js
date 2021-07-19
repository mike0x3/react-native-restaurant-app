import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    line: {
        width: '100%',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        marginTop: 5,
        marginBottom: 5,
    },
    contactContainer: {
        height: 65,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    contactImage: {
        width: '9%',
        overflow: 'visible',
    },
    contactText: {
        fontSize: 17,
        marginRight: 'auto',
    },
    inputView: {
        width: '100%',
    },
    input: {
        margin: 5,
        height: 40,
        borderColor: '#000000',
        borderWidth: 1
    },
    messageText: {
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 5,
    },
    link: {
        color: 'blue',
        textAlignVertical: 'bottom'
    },
    paragraph: {
        marginTop: 5,
        marginBottom: 5,
    },
    button: {
        marginTop: 10,
        marginBottom: 10,
    },
    textbox: {
        margin: 5,
        height: 120,
        borderColor: '#000000',
        borderWidth: 1
    }
})

export default styles;