import { Dimensions, StyleSheet } from "react-native";

const screen = Dimensions.get('screen');

const styles = StyleSheet.create({
    componentContainer:{
        height: 90,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        paddingTop: 2,
        paddingBottom: 2,
    },
    image: {
        resizeMode: 'contain',
        width: '100%',
        height: '100%',
    },
    imageView: {
        width: '20%',
        marginRight: '2%'
    },
    textView: {
        width: '80%',
    },
    pageImage: {
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '400',
        padding: 5,
    },
    block: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    shareImage: {
        width: 33,
        height: 33,
        marginLeft: 5,
        marginRight: 5,
    },
    shareBlock: {
        alignItems: 'center',
        marginBottom: '1%'
    },
    scrollblock: {
        width: screen.width - 40,
        marginLeft: 20,
        marginRight: 20,
    },
    shareText: {
        fontSize: 15,
        fontWeight: '400'
    },
    shareTitle: {
        fontSize: 19,
        fontWeight: '400'
    },
    sharebox: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default styles;