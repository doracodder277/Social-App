import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        height: 40,
        backgroundColor: '#f2f2f2',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 10,
    },
    primaryColor: {
        color: '#ce7704',
    },
    secondaryColor: {
        color: '#211402',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});

export default globalStyles;
