import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar } from 'react-native-elements';
import { getRandomHexColor } from '../utils/utils';

const Account = ({ account, navigation }) => {
    const randomColor = getRandomHexColor(account.firstName + account.lastName);

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                title={`${account.firstName[0]}${account.lastName[0]}`}
                overlayContainerStyle={{ backgroundColor: randomColor }}
            />
            <View style={styles.infoContainer}>
                <Text style={styles.text}>{`${account.firstName}`}</Text>
                <Text style={styles.text}>{`${account.email}`}</Text>
            </View>
            <Button title="Info" onPress={() => navigation.navigate('AccountInfo', { account })} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    infoContainer: {
        flex: 1,
        marginLeft: 10
    },
    text: {
        marginBottom: 5
    }
});

export default Account;
