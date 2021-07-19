import { StyleSheet, Dimensions } from 'react-native';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    image: {
        width: win.width * 0.9,
        height: win.height * 0.28,
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        marginTop: 5,
    }
})

export default styles;