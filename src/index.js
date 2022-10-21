import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterPage from './screens/Register';
import LoginPage from './screens/Login';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Search from './screens/Search';
import Cart from './screens/Cart';
import Account from './screens/Account';
import Icon from 'react-native-vector-icons/AntDesign';
import TabNav from './screens/TabNav';
import SuperFresh from './screens/SuperFresh';

const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="LoginScreen">
      <HomeStack.Screen
        name="LoginScreen"
        component={LoginPage}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="RegisterScreen"
        component={RegisterPage}
        options={{headerShown: true}}
      />
      <HomeStack.Screen
        name="Super_Fresh"
        component={AppNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="TabNav"
        component={TabNav}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="Account"
        component={Account}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={SuperFresh}
        options={{
          headerShown: false,
          tabBarIcon: props => <Icon name="home" {...props} />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: props => <Icon name="search1" {...props} />,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: props => <Icon name="shoppingcart" {...props} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarIcon: props => <Icon name="user" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
