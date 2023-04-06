import React from 'react';
import { View, ImageBackground } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import globalStyles from '../../Styles';

const FormStep1 = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleNext = () => {
        console.log(navigation);
    };

    return (
        <View style={styles.container}>
            <ImageBackground
              source={require('../../assets/de-jesus-benitez-kEgJVDkQkbU-unsplash.jpg')}
              resizeMode='cover'
              style={{ ...styles.container, width: '100%' }}
            >
                <TextInput
                    label="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={globalStyles.input}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={globalStyles.input}
                />
                <Button mode="contained" onPress={handleNext}>
                    Next
                </Button>
            </ImageBackground>
        </View>
    );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        justifyContent: 'flex-start'
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    button: {
        width: '50%',
    },
    animation: {
        marginBottom: 50,
        width: 200,
        height: 300,
    }
};

export default FormStep1;
