import React from 'react';
import { View, Text, Button } from 'react-native';

const ReviewScreen = ({ navigation, route }) => {
  const { firstName, lastName, email, phone } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>
        Please review your information:
      </Text>
      <View style={{ marginBottom: 10 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          First Name: {firstName}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Last Name: {lastName}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Email: {email}
        </Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          Phone: {phone}
        </Text>
      </View>
      <Button
        title="Edit Contact Info"
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Submit"
        onPress={() => {
          // TODO: Handle form submission
        }}
      />
    </View>
  );
};

export default ReviewScreen;
