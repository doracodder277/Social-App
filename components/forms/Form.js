import React, { useState, useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import globalStyles from '../../Styles';

import FormStep1 from './FormStep1';
import FormStep2 from './FormStep2';

const Form = () => {
    const navigation = useNavigation();
    const [step, setStep] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (step === 2) {
            // handle validation
        }
    }, [step]);

    const handleNext = () => {
        setStep(2);
    };

    const handlePrev = () => {
        setStep(1);
    };

    const handleSubmit = () => {
        // handle form submission
        navigation.goBack();
    };

    return (
        <View style={globalStyles.container}>
            {step === 1 && <FormStep1 onNext={handleNext} />}
            {step === 2 && <FormStep2 onPrev={handlePrev} onSubmit={handleSubmit} />}
        </View>
    );
};


export default Form;
