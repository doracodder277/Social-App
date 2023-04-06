import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ContactInfoScreen = ({ navigation, route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    navigation.navigate('AddressInfo', {
      ...route.params,
      firstName,
      lastName,
      email,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Step 2: Contact Information</Text>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        style={{ marginVertical: 10, paddingHorizontal: 10, borderWidth: 1, width: 250 }}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        style={{ marginVertical: 10, paddingHorizontal: 10, borderWidth: 1, width: 250 }}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginVertical: 10, paddingHorizontal: 10, borderWidth: 1, width: 250 }}
      />
      <Button title="Next" onPress={handleNext} disabled={!firstName || !lastName || !email} />
    </View>
  );
};

export default ContactInfoScreen;
