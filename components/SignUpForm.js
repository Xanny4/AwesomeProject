import React from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';

const SignUpForm = ({ formData, onChange, onRandomize, onSubmit }) => {
    return (
        <Container>
            <InputLabel>First Name</InputLabel>
            <Input
                value={formData.firstName}
                onChangeText={(text) => onChange('firstName', text)}
            />

            <InputLabel>Last Name</InputLabel>
            <Input
                value={formData.lastName}
                onChangeText={(text) => onChange('lastName', text)}
            />

            <InputLabel>Age</InputLabel>
            <Input
                value={formData.age}
                onChangeText={(text) => onChange('age', text)}
                keyboardType="numeric"
            />

            <InputLabel>Gender</InputLabel>
            <Input
                value={formData.gender}
                onChangeText={(text) => onChange('gender', text)}
            />

            <InputLabel>Email</InputLabel>
            <Input
                value={formData.email}
                onChangeText={(text) => onChange('email', text)}
                keyboardType="email-address"
            />

            <ButtonContainer>
                <Button title="Randomize Data" onPress={onRandomize} />
                <Button title="Submit" onPress={onSubmit} />
            </ButtonContainer>
        </Container>
    );
};

const Container = styled.View`
    padding-horizontal: 20px;
    padding-vertical: 10px;
`;

const InputLabel = styled.Text`
    font-size: 16px;
    margin-bottom: 5px;
`;

const Input = styled.TextInput`
    border-width: 1px;
    border-color: #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;

const ButtonContainer = styled.View`
    margin-top: 20px;
`;

export default SignUpForm;
