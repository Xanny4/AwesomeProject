import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SignUpScreen from './screens/SignUpScreen';
import AccountsScreen from './screens/AccountsScreen';
import AccountInfoScreen from './screens/AccountInfoScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AccountStack = ({ accounts }) => (
  <Stack.Navigator>
    <Stack.Screen name="Account" options={{ headerShown: false }}>
      {() => <AccountsScreen accounts={accounts} />}
    </Stack.Screen>
    <Stack.Screen name="AccountInfo" options={{ headerTitle: "Account Information" }}>
      {(props) => <AccountInfoScreen {...props} />}
    </Stack.Screen>
  </Stack.Navigator>
);

const App = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SignUp">
          {() => <SignUpScreen accounts={accounts} setAccounts={setAccounts} />}
        </Tab.Screen>
        <Tab.Screen name="Accounts">
          {() => <AccountStack accounts={accounts} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
