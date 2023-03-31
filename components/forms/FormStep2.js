import React from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import globalStyles from '../../Styles';

const FormStep2 = ({ onPrev, onSubmit }) => {
    const [address, setAddress] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const handlePrev = () => {
        onPrev();
    };

    const handleSubmit = () => {
        onSubmit();
    };

    return (
        <View style={globalStyles.container}>
            <TextInput
                label="Address"
                value={address}
                onChangeText={(text) => setAddress(text)}
                style={globalStyles.input}
            />
            <TextInput
                label="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                style={globalStyles.input}
            />
            <Button mode="outlined" onPress={handlePrev}>
                Prev
            </Button>
            <Button mode="contained" onPress={handleSubmit}>
                Submit
            </Button>
        </View>
    );
};

export default FormStep2;
