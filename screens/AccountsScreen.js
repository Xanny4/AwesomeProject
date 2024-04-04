import React from 'react';
import { View, FlatList } from 'react-native';
import Account from '../components/Account';
import { useNavigation } from '@react-navigation/native';

const AccountsScreen = ({ accounts }) => {
    const navigation = useNavigation(); // Use useNavigation hook to get navigation object

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={accounts}
                renderItem={({ item }) => <Account account={item} navigation={navigation} />} // Pass navigation prop to Account component
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default AccountsScreen;
