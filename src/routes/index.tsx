import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Amount from '../screens/CreditRequest/Amount';
import Description from '../screens/CreditRequest/Description';

import List from '../screens/CreditContribution/EntrepreneursList';
import DetailCompany from '../screens/CreditContribution/DetailCompany';


const App = createStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator screenOptions={{ headerShown: false }}>
      {/* <App.Screen name="Amount" component={Amount} />
      <App.Screen name="Description" component={Description} /> */}
      <App.Screen name="List" component={List} />
      <App.Screen name="DetailCompany" component={DetailCompany} />
    </App.Navigator>
  </NavigationContainer>
)

export default Routes