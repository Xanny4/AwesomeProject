import React from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { getRandomHexColor } from '../utils/utils';
const AccountInfoScreen = ({ route }) => {
    const { account } = route.params;
    const randomColor = getRandomHexColor(account.firstName + account.lastName);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Avatar
                rounded
                title={`${account.firstName[0]}${account.lastName[0]}`}
                source={{ uri: account.avatar }}
                overlayContainerStyle={{ backgroundColor: randomColor }}
                size="large"
            />
            <Text>{`First Name: ${account.firstName}`}</Text>
            <Text>{`Last Name: ${account.lastName}`}</Text>
            <Text>{`Age: ${account.age}`}</Text>
            <Text>{`Gender: ${account.gender}`}</Text>
            <Text>{`Email: ${account.email}`}</Text>
        </View>
    );
};

export default AccountInfoScreen;
