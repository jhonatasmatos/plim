import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import Splash from '../screens/Splash';
import First from '../screens/First';

import Amount from '../screens/CreditRequest/Amount';
import Description from '../screens/CreditRequest/Description';

import List from '../screens/CreditContribution/EntrepreneursList';
import DetailCompany from '../screens/CreditContribution/DetailCompany';
import ContributionAmount from '../screens/CreditContribution/ContributionAmount';
import CreditCardData from '../screens/CreditContribution/CreditCardData';
import ConfirmContribution from '../screens/CreditContribution/ConfirmContribution';
import Congrats from '../screens/CreditContribution/Congrats';

const App = createStackNavigator()

const Routes: React.FC = () => (
  <NavigationContainer>
    <App.Navigator screenOptions={{ headerShown: false }}>
      <App.Screen name="Splash" component={Splash} />
      <App.Screen name="First" component={First} />

      {/* <App.Screen name="Amount" component={Amount} />
      <App.Screen name="Description" component={Description} /> */}

      <App.Screen name="List" component={List} />
      <App.Screen name="DetailCompany" component={DetailCompany} />
      <App.Screen name="ContributionAmount" component={ContributionAmount} />
      <App.Screen name="CreditCardData" component={CreditCardData} />
      <App.Screen name="ConfirmContribution" component={ConfirmContribution} />
      <App.Screen name="Congrats" component={Congrats} />
    </App.Navigator>
  </NavigationContainer>
)

export default Routes