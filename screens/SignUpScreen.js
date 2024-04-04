import React, { useState } from 'react';
import { View } from 'react-native';
import SignUpForm from '../components/SignUpForm';
import faker from 'faker';

const SignUpScreen = ({ accounts, setAccounts }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        gender: '',
        email: ''
    });

    const handleRandomize = () => {
        setFormData({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: faker.random.number({ min: 18, max: 100 }).toString(),
            gender: faker.random.arrayElement(['Male', 'Female']),
            email: faker.internet.email()
        });
    };

    const handleChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value
        });
    };

    const handleSubmit = () => {
        setAccounts([...accounts, formData]);
        setFormData({
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            email: ''
        });
    };

    return (
        <View style={{ flex: 1 }}>
            <SignUpForm
                formData={formData}
                onChange={handleChange}
                onRandomize={handleRandomize}
                onSubmit={handleSubmit}
            />
        </View>
    );
};

export default SignUpScreen;
