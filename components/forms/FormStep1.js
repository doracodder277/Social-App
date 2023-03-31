import React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import globalStyles from '../../Styles';

const FormStep1 = ({ onNext }) => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const handleNext = () => {
        onNext();
    };

    return (
        <View style={globalStyles.container}>
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
        </View>
    );
};

export default FormStep1;
